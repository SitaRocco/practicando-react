import React, { useState } from 'react';
import contactImg from '../../assets/contacto2.png'; 
import fondo from '../../assets/fondo.png';
import { createClient } from "smtpexpress"

// variables de entorno
const smtp_projectId = import.meta.env.VITE_smtp_projectId;
const smtp_projectSecret = import.meta.env.VITE_smtp_projectSecret;
const smtp_email = import.meta.env.VITE_smtp_email;
const smtp_recipient = import.meta.env.VITE_smtp_recipient;

/*
const smtp_projectId = process.env.smtp_projectId;
const smtp_projectSecret = process.env.smtp_projectSecret;
const smtp_email = process.env.smtp_email;
const smtp_recipient = process.env.smtp_recipient;
*/

export const smtpexpressClient = createClient({
  projectId: smtp_projectId,
  projectSecret: smtp_projectSecret
});

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      await smtpexpressClient.sendApi.sendMail({
        subject: `Nuevo mensaje de ${form.name}`,
        message: `Nombre: ${form.name}\nEmail de contacto: ${form.email}\nMensaje: ${form.message}`,
        sender: {
          name: "Portafolio",
          email: smtp_email
        },
        recipients: smtp_recipient
      });
      setStatus('¡Mensaje enviado!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error al enviar el mensaje.');
      console.error("Error al enviar:", error);
    }
  };

  return (
    <section id="contacto">
      <div className="w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${fondo})` }}>
        <div className="flex flex-col lg:flex-row px-4 py-12 lg:px-16 max-w-screen-xl mx-auto gap-y-36 lg:gap-x-16">
          <div className="w-full lg:w-1/2 flex justify-center items-center ">
            <img src={contactImg} alt="Contact Illustration" className="max-w-full h-auto rounded-lg" />
          </div>
          <div className="w-full lg:w-1/2 bg-zinc-50 p-8 border rounded-lg  border-black border-b-[4px]">
            <h1 className="text-4xl text-gray-800 font-bold mb-4">¿Tienes algún proyecto en mente?</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg text-gray-900 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-400 rounded py-2 px-3 text-base text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg text-gray-900 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-400 rounded py-2 px-3 text-base text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg text-gray-900 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-400 rounded py-2 px-3 h-32 text-base text-gray-900 resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-200 to-indigo-400 text-zinc-700 py-3 rounded-3xl text-xl font-bold cursor-pointer hover:bg-indigo-500  transition duration-200"
                disabled={status === 'Enviando...'}
              >
                Enviar
              </button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;