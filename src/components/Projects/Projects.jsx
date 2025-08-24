import React, { useState } from 'react';
import proyecto1 from '../../assets/mockup-pdp.png';
import proyecto2 from '../../assets/mockup-2-patadepato.png';
import proyecto3 from '../../assets/pdp3.png';
import proyecto4 from '../../assets/pdp2.png';
import proyecto5 from '../../assets/mockup-abogados.png';
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
  const prevPata = () => setIndexPata(indexPata === 0 ? imagenesPata.length - 1 : indexPata - 1);
  const nextPata = () => setIndexPata(indexPata === imagenesPata.length - 1 ? 0 : indexPata + 1);

  
  const imagenesAbogados = [proyecto5, proyecto6, proyecto7, proyecto8];
  const [indexAbogados, setIndexAbogados] = useState(0);
  const prevAbogados = () =>
    setIndexAbogados(indexAbogados === 0 ? imagenesAbogados.length - 1 : indexAbogados - 1);
  const nextAbogados = () =>
    setIndexAbogados(indexAbogados === imagenesAbogados.length - 1 ? 0 : indexAbogados + 1);

  return (
    <section className="bg-emerald-200 pt-12" id="proyectos">
      <h2 className="text-4xl sm:text-6xl text-center text-zinc-700">Proyectos</h2>
      {/* Herramientas / Tecnologías */}
<div className="flex flex-wrap justify-center gap-4 mt-12 mb-6 text-white fill-current">
  {[svg1, svg2, svg3, svg4, svg5, svg6, svg7,svg8].map((icon, i) => (
    <div key={i} className="w-10 h-12 sm:w-16 sm:h-16">
      <img src={icon} alt={`Herramienta ${i + 1}`} className="w-full h-full object-contain" />
    </div>
  ))}
</div>

      {/* Primer bloque: Pata de Pato */}
      <div className="min-h-screen bg-emerald-200 py-16 px-8 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full flex justify-center h-full relative">
          <img
            src={imagenesPata[indexPata]}
            className="rounded-2xl w-[500px] h-auto transition-all duration-500"
          />

          <button
            onClick={prevPata}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={nextPata}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {imagenesPata.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${i === indexPata ? 'bg-white' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full text-left relative">
          <h2 className="text-3xl md:text-5xl mb-4 text-zinc-700">Pata de Pato</h2>

          <p className="text-zinc-700 mb-6 text-start text-xl max-w-2xl mx-auto md:mx-0">
            Este sitio web para la marca Pata de Pato, que crea accesorios hechos a mano con cuero
            reciclado, tenía como objetivo reflejar uno de sus principales valores: el compromiso con
            el cuidado del medio ambiente. Además de mostrar y vender sus productos, el sitio debía
            incorporar un proyecto personal de su creador: una iniciativa de limpieza de playas que
            realiza junto a su perrita 🐕 y un pato 🦆. El desafío fue encontrar una forma de
            equilibrar ambos mundos: por un lado, visibilizar la causa medioambiental; por otro,
            mantener el enfoque comercial claro y atractivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="border border-tertiary text-zinc-700 font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/10 text-center"
            >
              More Details
            </a>
          </div>
        </div>
      </div>

      {/* Timeline Pata de Pato */}
      <h2 className="text-3xl md:text-5xl text-center mb-4 text-zinc-700">Parte del proceso</h2>
      <div className="container mx-auto px-4 py-8">
        <div className="relative wrap overflow-hidden">
          <div className="hidden md:block border-2 absolute border-opacity-20 border-indigo-400 h-full left-1/2"></div>

          {/* Evento 1 */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full md:right-timeline">
            <div className="order-1 hidden md:block w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-12 h-12 rounded-full mx-auto md:mx-0">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-zinc-50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
              <p className="text-gray-700 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo,
                aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>

          {/* Evento 2 */}
          <div className="mb-8 flex flex-col md:flex-row-reverse justify-between items-center w-full md:left-timeline">
            <div className="order-1 hidden md:block w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-12 h-12 rounded-full mx-auto md:mx-0">
              <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div className="order-1 bg-zinc-50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
              <p className="text-gray-700 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo,
                aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>

          {/* Evento 3 */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full md:right-timeline">
            <div className="order-1 hidden md:block w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-12 h-12 rounded-full mx-auto md:mx-0">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-zinc-50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
              <p className="text-gray-700 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo,
                aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr class="border-t border-indigo-400 w-full my-8 text-center"></hr>
      {/* Segundo bloque: Abogados */}
      <div className="min-h-screen bg-emerald-200 py-16 px-8 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full flex justify-center h-full relative">
          <img
            src={imagenesAbogados[indexAbogados]}
            className="rounded-2xl w-[500px] h-auto transition-all duration-500"
          />

          <button
            onClick={prevAbogados}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={nextAbogados}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {imagenesAbogados.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${i === indexAbogados ? 'bg-white' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
        
        <div className="w-full text-left relative">
          <h2 className="text-3xl md:text-5xl mb-4 text-zinc-700">Abogados Viña del Mar</h2>

          <p className="text-zinc-700 mb-6 text-start text-xl max-w-2xl mx-auto md:mx-0">
            Este proyecto fue desarrollado durante mi práctica profesional en colaboración con la agencia SBS Publicidad. Consistió en el rediseño del sitio web de un estudio de abogados, utilizando Elementor como herramienta principal. El mayor desafío fue trabajar con recursos visuales limitados, lo que nos llevó a implementar soluciones de diseño que lograran proyectar una imagen moderna y profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="border border-tertiary text-zinc-700 font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/10 text-center"
            >
              More Details
            </a>
          </div>
        </div>
      </div>

      {/* Timeline Abogados */}
      <h2 className="text-3xl md:text-5xl text-center mb-4 text-zinc-700">Parte del proceso</h2>
      <div className="container mx-auto px-4 py-8">
        <div className="relative wrap overflow-hidden">
          <div className="hidden md:block border-2 absolute border-opacity-20 border-indigo-400 h-full left-1/2"></div>

          {/* Evento 1 */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full md:right-timeline">
            <div className="order-1 hidden md:block w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-12 h-12 rounded-full mx-auto md:mx-0">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-zinc-50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
              <p className="text-gray-700 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo,
                aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>

          {/* Evento 2 */}
          <div className="mb-8 flex flex-col md:flex-row-reverse justify-between items-center w-full md:left-timeline">
            <div className="order-1 hidden md:block w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-12 h-12 rounded-full mx-auto md:mx-0">
              <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div className="order-1 bg-zinc-50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
              <p className="text-gray-700 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo,
                aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>

          {/* Evento 3 */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full md:right-timeline">
            <div className="order-1 hidden md:block w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-12 h-12 rounded-full mx-auto md:mx-0">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-zinc-50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
              <p className="text-gray-700 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo,
                aliquet velit ac, dapibus elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;


