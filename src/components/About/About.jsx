import React, { useState } from 'react';
import Ro from '../../assets/Ro.png'; 





function About() {
  return (
    <section className="w-full py-12 px-4 bg-zinc-100" id ="about">
  <div className="max-w-7xl mx-auto rounded-2xl px-6 py-2">
    <div className="flex flex-col md:flex-row items-center rounded-xl">
      
      {/* Texto */}
      <div className="w-full p-4">
        <h2 className="text-4xl sm:text-8xl font-bold mb-2 text-zinc-700">Sobre mi</h2>
        <p className="text-zinc-700 text-xl sm:text-2xl py-2">
         ¡Hola! Soy Rocío, Desarrolladora y Diseñadora Web de Santiago, Chile.

Me encanta transformar ideas en experiencias digitales que no solo se ven bien, sino que también funcionan con claridad, coherencia y propósito. Disfruto cada parte del proceso: desde imaginar una interfaz atractiva hasta verla cobrar vida en el navegador.<br></br>

<br></br>Tengo un enfoque especial en la experiencia de usuario, porque creo que un buen diseño no solo es estético, sino también intuitivo y accesible para todas las personas.

Si estás buscando a alguien que te escuche, entienda lo que necesitas y lo traduzca en un sitio web funcional y visualmente armonioso, me encantaría trabajar contigo. Actualmente estoy disponible para nuevos proyectos o colaboraciones.
        </p>
      </div>

      {/* Imagen */}
      <div className="w-xs md:w-1/2 p-4">
        <img src={Ro} alt="Ejemplo" className="w-full h-auto rounded-xl" />
      </div>
    </div>
  </div>
  <h2 className="text-4xl sm:text-8xl text-center font-bold mb-2 text-zinc-700 py-16">Servicios</h2>
<div>
  <div className="container px-4 md:px-12 py-12 mx-auto">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 border rounded-lg shadow bg-emerald-100  border-black border-b-[4px] p-4 md:p-6 text-center">
      <div className="flex flex-wrap flex-col items-center justify-center px-1 md:px-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          className="w-8 h-8 dark:text-indigo-400">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>



        <h1 className="mt-4 text-3xl font-semibold text-zinc-700">Rediseño de Sitios Web</h1>

        <p className="mt-2 text-zinc-700 text-xl sm:text-2xl"></p>
      </div>

      <div className="flex flex-wrap flex-col items-center justify-center px-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          className="w-8 h-8 dark:text-indigo-400">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>


        <h1 className="mt-4 text-3xl font-semibold text-zinc-700">Desarrollo Web</h1>

        <p className="mt-2 text-zinc-700 text-xl sm:text-2xl"></p>
      </div>

     
    </div>
  </div>
</div>


</section>


  );
}

export default About;
