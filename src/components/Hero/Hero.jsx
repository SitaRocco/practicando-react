import React, { useEffect } from 'react'
import Personaje from "../../assets/Personaje.png"
import Logo from "../../assets/Logo.png"
import { motion } from "framer-motion"
import { slipeUp } from '../../utility/animation'

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
    <section className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Fondo animado */}
      <div className="falling-shapes absolute top-0 left-0 w-full h-full pointer-events-none z-0"></div>

      <div className="w-full max-w-6xl flex items-center justify-center z-10">
        <div className="grid grid-cols-1 gap-10 items-center w-full">
          
          {/* Texto */}
          <div className="p-6 sm:p-10 text-center flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-6 mt-6">
              Rocío Castillo
            </h1>
            <p className="text-white text-base sm:text-lg max-w-prose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <a
                href="#projects"
                className="bg-yellow-600 py-2 px-8 sm:px-12 rounded-3xl hover:bg-black transition-all duration-300 whitespace-nowrap text-center"
              >
                Ver proyectos
              </a>
              
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
  )
}

export default Hero
