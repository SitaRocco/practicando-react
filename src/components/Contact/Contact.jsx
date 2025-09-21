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

      // Mensaje de éxito
      setStatus('¡Mensaje enviado con éxito!');
      // Limpiar campos
      setForm({ name: '', email: '', message: '' });

      // Opcional: ocultar mensaje después de 3s
      setTimeout(() => setStatus(''), 3000);

    } catch (error) {
      setStatus('❌ Error al enviar el mensaje.');
      console.error("Error al enviar:", error);
    }
  };

  return (
   <section id="contacto">
  <div
    className="w-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${fondo})` }}
  >
    <div className="flex flex-col lg:flex-row px-4 py-12 lg:px-16 max-w-screen-xl mx-auto gap-y-36 lg:gap-x-16">
      
      {/* Imagen lateral */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={contactImg}
          alt="Contact Illustration"
          className="max-w-full h-auto rounded-lg"
        />
      </div>

      {/* Botón en recuadro */}
      <div className="w-full lg:w-1/2 bg-zinc-50 p-8 border rounded-lg border-black border-b-[4px] flex flex-col items-center justify-center">
        <h1 className="text-3xl text-gray-800 font-bold mb-6 text-center">
          ¿Tienes un proyecto en mente? 
        </h1>
        <a
          href="mailto:rociocastillo.s@gmail.com"
          className="cursor-pointer rounded-3xl px-16 py-3 text-xl bg-gradient-to-r from-indigo-200 to-indigo-400 text-zinc-700 font-bold hover:from-indigo-300 hover:to-indigo-500 hover:text-white hover:scale-105 transition-all duration-300"
        >
          Escríbeme
        </a>
      </div>
    </div>
  </div>
</section>

  );
}

export default Contact;
