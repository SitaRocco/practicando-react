import React, { useState } from 'react';
import Ro from '../../assets/Ro.png'; 





function About() {
  return (
    <section className="w-full py-12 px-4 bg-zinc-50">
  <div className="max-w-5xl mx-auto rounded-2xl px-6 py-2 bg-purple-100">
    <div className="flex flex-col md:flex-row items-center rounded-xl">
      {/* Texto */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-2 text-pink-500">Sobre mí</h2>
        <p className="text-zinc-50">
          Soy Rocío Castillo, Desarrolladora y Diseñadora Web. Tengo experiencia trabajando con herramientas como FIGMA, ADOBE XD, HTML, CSS, JAVASCRIPT, WORDPRESS y PHP, y pongo especial atención en que el diseño se vea bien y funcione de forma clara y armónica. <br /><br />
          Me especializo en crear interfaces atractivas, funcionales y centradas en la experiencia de usuario, abordando tanto el diseño visual como su implementación técnica. Actualmente estoy disponible para nuevos proyectos o colaboraciones.
        </p>
      </div>

      {/* Imagen */}
      <div className="w-full md:w-1/2 p-4">
        <img src={Ro} alt="Ejemplo" className="w-full h-auto rounded-xl" />
      </div>
    </div>
  </div>
</section>

  );
}

export default About;
