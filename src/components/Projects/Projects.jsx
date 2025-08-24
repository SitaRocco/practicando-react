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
      <h2 className="text-4xl sm:text-6xl text-center text-zinc-700">Portafolio</h2>
 

      {/* Primer bloque: Pata de Pato */}
      <div className="min-h-screen bg-emerald-200 py-16 px-8 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full flex justify-center h-full relative">
          <img
            src={imagenesPata[indexPata]}
            className="rounded-2xl w-[500px] h-auto transition-all duration-500"
          />

          <button
            onClick={prevPata}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-400 text-white px-3 py-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={nextPata}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-400 text-white px-3 py-2 rounded-full"
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
          <h2 className="text-3xl md:text-4xl mb-4 text-zinc-700 text-start">Pata de Pato</h2>
          {/* Herramientas / Tecnologías */}
<div className="flex flex-wrap justify-start gap-4 mb-3 text-start">
  {[svg1, svg2, svg3, svg4, svg5, svg6, svg7].map((icon, i) => (
    <div key={i} className="w-7 h-12 sm:w-10 sm:h-16">
      <img src={icon} alt={`Herramienta ${i + 1}`} className="w-full h-full object-contain" />
    </div>
  ))}
</div>
         <div className="text-zinc-700 mb-6 text-start text-xl max-w-2xl mx-auto md:mx-0 space-y-6">
  <p>
    Este sitio web para la marca Pata de Pato, que crea accesorios hechos a mano con cuero reciclado, tenía como objetivo reflejar su compromiso con el cuidado del medio ambiente. Además de mostrar y vender sus productos, debía incorporar un proyecto personal de su creador: una iniciativa de limpieza de playas que realiza junto a su perrita 🐕 y un pato 🦆.

El desafío fue equilibrar ambos mundos: visibilizar la causa medioambiental sin perder el foco comercial.
</p>
  

  <p>
   El desarrollo se centró en diseñar una narrativa visual unificada, donde los productos y la historia del proyecto convivieran sin competir. Se trabajó  creando secciones diferenciadas pero conectadas por el mismo estilo y tono cercano.
  </p>

  <p>
    La solución fue un sitio que combina tienda online y relato ecológico, reforzando la identidad de la marca y mostrando su propósito con autenticidad.
  </p>
</div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://www.patadepato.cl"  target="_blank"
 
              >
              <button className=" w-full cursor-pointer rounded-3xl px-6 py-2 bg-gradient-to-r from-indigo-200 to-indigo-400 text-zinc-700 font-bold sm:text-xl 
                   hover:from-indigo-300 hover:to-indigo-500 hover:text-white hover:scale-105 transition-all duration-300">
  Ver sitio web
</button>
            </a>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-400 text-white px-3 py-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={nextAbogados}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-400 text-white px-3 py-2 rounded-full"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {imagenesAbogados.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${i === indexAbogados ? 'bg-indigo-400' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
        
        <div className="w-full text-left relative">
          <h2 className="text-3xl md:text-4xl mb-4 text-zinc-700">Abogados Viña del Mar</h2>
          {/* Herramientas / Tecnologías */}
<div className="flex flex-wrap justify-start gap-4 mb-3 text-start">
  {[svg1,  svg6, svg8].map((icon, i) => (
    <div key={i} className="w-7 h-12 sm:w-10 sm:h-16">
      <img src={icon} alt={`Herramienta ${i + 1}`} className="w-full h-full object-contain" />
    </div>
  ))}
</div>
          <div className="text-zinc-700 mb-6 text-start text-xl max-w-2xl mx-auto md:mx-0 space-y-6">
  <p>
    Este proyecto fue desarrollado durante mi práctica profesional en  la Agencia SBS Publicidad. Consistió en el rediseño del sitio web de un estudio de abogados, utilizando Elementor como herramienta principal para estructurar y dar forma a la propuesta digital.
    El desafío fue trabajar con recursos visuales limitados: pocas imágenes y la necesidad de transmitir profesionalismo en un rubro donde la confianza y la claridad son clave.
  </p>

  <p>
    El desarrollo se centró en optimizar la estructura del sitio , en potenciar el diseño a través de tipografías limpias y una paleta de colores sobria, lo que permitió reforzar la idea de modernidad y generar una navegación clara y accesible.
  </p>

  <p>
    La solución fue un sitio web renovado, capaz de proyectar una imagen sólida y profesional, cumpliendo con las expectativas del cliente y de la agencia.
  </p>
</div>


          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://abogadosvinadelmar.cl/"  target="_blank"
 
              >
             <button className=" w-full cursor-pointer rounded-3xl px-6 py-2 bg-gradient-to-r from-indigo-200 to-indigo-400 text-zinc-700 font-bold sm:text-xl 
                   hover:from-indigo-300 hover:to-indigo-500 hover:text-white hover:scale-105 transition-all duration-300">
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


