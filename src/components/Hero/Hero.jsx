import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { slipeUp } from '../../utility/animation'
import fondo from '../../assets/fondo.png';
import saludo from '../../assets/saludo.png'


const Hero = () => {
  useEffect(() => {
    const shapeContainers = document.querySelectorAll(".falling-shapes");

    shapeContainers.forEach((container) => {
      if (!container) return;

      const shapes = ["square"];

      for (let i = 0; i < 25; i++) {
        const shapeEl = document.createElement("div");
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        shapeEl.classList.add("shape", shapeType);
        shapeEl.style.left = `${Math.random() * 100}%`;
        shapeEl.style.animationDuration = `${5 + Math.random() * 4}s`;
        shapeEl.style.animationDelay = `${Math.random() * 5}s`;
        shapeEl.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(shapeEl);
      }
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden" id="inicio">
     
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  z-0"
        style={{ backgroundImage: `url(${fondo})` }}
      ></div>

      {/* Contenido sobre la imagen */}
    <div className="relative w-full max-w-6xl flex items-center justify-center">
  {/* Imagen saludo, centrada y detrás del recuadro */}
  <img
    src={saludo}
    alt="saludo-ro"
    className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 w-48 sm:w-80 "
  />

  {/* Recuadro principal */}
  <div className="grid grid-cols-1 gap-10 items-center w-full z-10 mt-24 sm:mt-32
   lg:mt-48">
    <div className="mt-36 mb-20 p-6  text-center flex flex-col justify-center items-center bg-zinc-100 rounded-xl border border-black border-b-[4px]">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-700 mb-6 mt-6">
        Rocío Castillo
      </h1>
      <p className="text-zinc-700 text-base sm:text-2xl max-w-prose font-bold">
        Desarrolladora y Diseñadora web
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <a href="#proyectos">
          <button className="cursor-pointer rounded-3xl px-6 py-2 bg-gradient-to-r from-indigo-200 to-indigo-400 text-zinc-700 font-bold sm:text-xl  hover:from-indigo-300 hover:to-indigo-500 hover:text-white hover:scale-105 transition-all duration-300">
            Ver Proyectos
          </button>
        </a>
      </div>
    </div>
  </div>
</div>

    </section>
    
  )
}

export default Hero;
