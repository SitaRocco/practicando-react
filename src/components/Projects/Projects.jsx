import React, { useState } from 'react';
import proyecto1 from '../../assets/vista con logo.png';
import proyecto2 from '../../assets/vista 1.png';
import proyecto3 from '../../assets/wireframe.png';
import proyecto4 from '../../assets/arquetipo.png';
import proyecto5 from '../../assets/vita abogados.png';
import proyecto6 from '../../assets/mockup-2.png';
import proyecto7 from '../../assets/page-3.png';
import proyecto8 from '../../assets/page-4.png';
import svg1 from '../../assets/figma.svg';
import svg2 from '../../assets/html5.svg';
import svg3 from '../../assets/css.svg';
import svg4 from '../../assets/bootstrap.svg';
import svg5 from '../../assets/javascript.svg';
import svg6 from '../../assets/wordpress.svg';
import svg7 from '../../assets/php.svg';
import svg8 from '../../assets/elementor.svg';

import { Link, Outlet } from 'react-router-dom';

function Projects() {
  const imagenesPata = [proyecto1, proyecto2, proyecto3, proyecto4];
  const [indexPata, setIndexPata] = useState(0);
  const prevPata = () =>
    setIndexPata(indexPata === 0 ? imagenesPata.length - 1 : indexPata - 1);
  const nextPata = () =>
    setIndexPata(indexPata === imagenesPata.length - 1 ? 0 : indexPata + 1);

  const imagenesAbogados = [proyecto5, proyecto6, proyecto7, proyecto8];
  const [indexAbogados, setIndexAbogados] = useState(0);
  const prevAbogados = () =>
    setIndexAbogados(
      indexAbogados === 0 ? imagenesAbogados.length - 1 : indexAbogados - 1
    );
  const nextAbogados = () =>
    setIndexAbogados(
      indexAbogados === imagenesAbogados.length - 1 ? 0 : indexAbogados + 1
    );

  return (
    <section className="bg-emerald-200 pt-12" id="proyectos">
      <h2 className="text-4xl sm:text-6xl text-center text-zinc-700">
        Portafolio
      </h2>

      {/* Bloque Pata de Pato */}
      <div className="min-h-screen bg-emerald-200 py-16 px-8 md:px-20 lg:px-32 flex flex-col items-center justify-center gap-12">
        {/* Card con carrusel */}
        <div className="w-full flex justify-center relative">
          <div className="bg-zinc-50 rounded-2xl shadow-lg w-[90%] sm:w-[500px] lg:w-[900px] h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center relative overflow-hidden">
            <img
              src={imagenesPata[indexPata]}
              className="w-full h-full object-contain transition-all duration-500"
            />

            {/* Botones navegación */}
            <button
              onClick={prevPata}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-indigo-400 text-white px-3 py-2 rounded-full"
            >
              ‹
            </button>
            <button
              onClick={nextPata}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-indigo-400 text-white px-3 py-2 rounded-full"
            >
              ›
            </button>

            {/* Puntos indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {imagenesPata.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === indexPata ? 'bg-indigo-400' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Texto y descripción */}
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-zinc-700">
            Pata de Pato
          </h2>

          {/* Herramientas */}
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            {[svg1, svg2, svg3, svg4, svg5, svg6, svg7].map((icon, i) => (
              <div key={i} className="w-7 h-12 sm:w-10 sm:h-16">
                <img
                  src={icon}
                  alt={`Herramienta ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-zinc-700 mb-6 text-xl space-y-6 text-start">
            <div>
            <h2 className="font-bold text-2xl">Contexto:</h2>
            <p>
           
              Pata de Pato es una marca dedicada a la creación de accesorios
              hechos a mano con cuero reciclado. Hasta entonces, sus ventas se
              realizaban únicamente a través de su cuenta de Instagram
              (@patadepato.cl) y en una tienda física ubicada en Punta de Lobos.
              Además, su fundador lidera una cuadrilla de limpieza de playas,
              una iniciativa que comparte junto a su perrita y un pato.
            </p>
            </div>
            <div>
            <h2 className="font-bold text-2xl">Problema:</h2>
            <p>
              
              La marca necesitaba un sitio web que ampliara su canal de ventas
              con una tienda online, reflejara su compromiso ecológico y
              artesanal y contara la historia detrás de la marca, conectando
              emocionalmente con los clientes.
            </p>
            </div>
            <div>
            <h2 className="font-bold text-2xl">Proceso:</h2>
            <p>
              
              Investigación de usuario para comprender motivaciones y
              expectativas de los clientes, Benchmark de referentes del sector,
              Wireframes que definieron la arquitectura y flujo de navegación
              del sitio y Diseño de narrativa visual que integrara la venta de
              productos y el proyecto de limpieza de playas.
            </p>
            </div>
            <div>
            <h2 className="font-bold text-2xl">Solución:</h2>
            <p>
            Un sitio web que combina tienda online y relato ecológico, con
            secciones diferenciadas pero unidas por un mismo estilo visual.
            </p>
            </div>
          </div>

          {/* Botón centrado */}
          <div className="flex justify-center">
            <a href="https://www.patadepato.cl" target="_blank">
              <button className="cursor-pointer rounded-3xl px-16 py-3 text-xl bg-gradient-to-r from-indigo-200 to-indigo-400 text-zinc-700 font-bold hover:from-indigo-300 hover:to-indigo-500 hover:text-white hover:scale-105 transition-all duration-300">
                Ver sitio web
              </button>
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-indigo-400 w-full my-8 text-center" />

      {/* Bloque Abogados */}
      <div className="min-h-screen bg-emerald-200 py-16 px-8 md:px-20 lg:px-32 flex flex-col items-center justify-center gap-12">
        {/* Card con carrusel */}
        <div className="w-full flex justify-center relative">
          <div className="bg-zinc-50 rounded-2xl shadow-lg w-[90%] sm:w-[500px] lg:w-[900px] h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center relative overflow-hidden">
            <img
              src={imagenesAbogados[indexAbogados]}
              className="w-full h-full object-contain transition-all duration-500"
            />

            {/* Botones navegación */}
            <button
              onClick={prevAbogados}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-indigo-400 text-white px-3 py-2 rounded-full"
            >
              ‹
            </button>
            <button
              onClick={nextAbogados}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-indigo-400 text-white px-3 py-2 rounded-full"
            >
              ›
            </button>

            {/* Puntos indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {imagenesAbogados.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === indexAbogados ? 'bg-indigo-400' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Texto y descripción */}
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-zinc-700">
            Abogados Viña del Mar
          </h2>

          {/* Herramientas */}
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            {[svg1, svg6, svg8].map((icon, i) => (
              <div key={i} className="w-7 h-12 sm:w-10 sm:h-16">
                <img
                  src={icon}
                  alt={`Herramienta ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-zinc-700 mb-6 text-xl space-y-6 text-start">
            <div>
            <h2 className="font-bold text-2xl">Contexto:</h2>
            <p>
               Este proyecto fue desarrollado durante mi práctica profesional en
              la Agencia SBS Publicidad. Consistió en el rediseño del sitio web
              de un estudio de abogados en Viña del Mar, utilizando Elementor
              como herramienta principal para estructurar y dar forma a la
              propuesta digital.
            </p>
            </div>
            <div>
            <h2 className="font-bold text-2xl">Problema:</h2>
            <p>
              El desafío era trabajar con recursos visuales limitados (pocas
              imágenes disponibles) y, al mismo tiempo, transmitir una imagen de
              profesionalismo, confianza y claridad, elementos fundamentales
              dentro del rubro legal.
            </p>
            </div>
            <div>
            <h2 className="font-bold text-2xl">Proceso:</h2>
            <p>
              El desarrollo se centró en optimizar la estructura del sitio para
              facilitar la navegación y potenciar el diseño con tipografías
              limpias y una paleta de colores sobria.
            </p>
            </div>
            <div>
              <h2 className="font-bold text-2xl">Solución:</h2>
            <p>
              El resultado fue un sitio web renovado y profesional, que
              logró proyectar confianza y claridad, cumpliendo con las
              expectativas del cliente y de la Agencia.
            </p>
            </div>
          </div>

          {/* Botón centrado */}
          <div className="flex justify-center">
            <a href="https://abogadosvinadelmar.cl/" target="_blank">
              <button className="cursor-pointer rounded-3xl px-16 py-3 text-xl bg-gradient-to-r from-indigo-200 to-indigo-400 text-zinc-700 font-bold hover:from-indigo-300 hover:to-indigo-500 hover:text-white hover:scale-105 transition-all duration-300">
                Ver sitio web
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;


