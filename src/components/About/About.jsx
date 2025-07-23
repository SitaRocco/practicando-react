import React, { useState } from 'react';
import Ro from '../../assets/Ro.png'; 





function About() {
  return (
    <section className="w-full py-12 px-4 bg-indigo-400">
  <div className="max-w-7xl mx-auto rounded-2xl px-6 py-2">
    <div className="flex flex-col md:flex-row items-center rounded-xl">
      {/* Texto */}
      <div className="w-full p-4">
        <h2 className="text-4xl sm:text-7xl font-bold mb-2 text-emerald-200">Sobre mí</h2>
        <p className="text-zinc-50 text-xl sm:text-2xl py-2">
          Soy Rocío Castillo, Desarrolladora y Diseñadora Web. Tengo experiencia trabajando con herramientas como FIGMA, HTML, CSS, JAVASCRIPT, WORDPRESS y PHP, y pongo especial atención en que el diseño se vea bien y funcione de forma clara y armónica. <br /><br />
          Me especializo en crear interfaces atractivas, funcionales y centradas en la experiencia de usuario, abordando tanto el diseño visual como su implementación técnica. Actualmente estoy disponible para nuevos proyectos o colaboraciones.
        </p>
      </div>

      {/* Imagen */}
      <div className="w-full md:w-1/2 p-4">
        <img src={Ro} alt="Ejemplo" className="w-full h-auto rounded-xl" />
      </div>
    </div>
  </div>
  <h2 className="text-4xl sm:text-7xl text-center font-bold mb-2 text-emerald-200 py-16">Servicios</h2>
<div>
  <div class="container px-4 md:px-12 py-12 mx-auto">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 border rounded-lg shadow bg-zinc-50  border-black border-b-[4px] p-4 md:p-6 text-center">
      <div class="flex flex-wrap flex-col items-center justify-center px-1 md:px-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-8 h-8 dark:text-indigo-400">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>



        <h1 class="mt-4 text-xl font-semibold text-zinc-700">Rediseño de Sitios Web</h1>

        <p class="mt-2 text-zinc-700 text-xl sm:text-2xl">Actualización del diseño, contenido y funcionalidad de un sitio web</p>
      </div>

      <div class="flex flex-wrap flex-col items-center justify-center px-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-8 h-8 dark:text-indigo-400">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>


        <h1 class="mt-4 text-xl font-semibold text-zinc-700">Desarrollo Web</h1>

        <p class="mt-2 text-zinc-700 text-xl sm:text-2xl">Investigación de usuario y análisis de objetivos, planificación de la arquitectura del sitio, diseño visual adaptable y desarrollo funcional</p>
      </div>

     
    </div>
  </div>
</div>


</section>


  );
}

export default About;
