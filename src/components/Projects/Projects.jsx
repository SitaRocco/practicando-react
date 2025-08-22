import React from 'react';
import proyecto1 from '../../assets/mockup-pdp.png'
import proyecto2 from '../../assets/abogados.jpg'

import { Link, Outlet } from 'react-router-dom';

const projects = [
  {
    
    image:
      proyecto1,
    }
  
];

function Projects() {
  return (
    <section className="bg-zinc-700 pt-12">
      <h2 className="text-6xl text-center text-zinc-50">
      Proyectos
    </h2>
    <div className="min-h-screen bg-zinc-700  py-16 px-8 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-8">
 
  <div className="w-full flex justify-center h-full  gap-8" >
    <img src={proyecto1} className="rounded-2xl"/>
  </div>

  
  <div className="w-full text-left relative">
   
    

    
    <h2 className="text-3xl md:text-5xl  mb-4 text-zinc-50">
      Pata de Pato
    </h2>

    
    <p className="text-zinc-50 mb-6 text-start text-xl  max-w-2xl mx-auto md:mx-0">
      Este sitio web para la marca Pata de Pato, que crea accesorios hechos a mano con cuero reciclado, tenía como objetivo reflejar uno de sus principales valores: el compromiso con el cuidado del medio ambiente. Además de mostrar y vender sus productos, el sitio debía incorporar un proyecto personal de su creador: una iniciativa de limpieza de playas que realiza junto a su perrita 🐕 y un pato 🦆. El desafío fue encontrar una forma de equilibrar ambos mundos: por un lado, visibilizar la causa medioambiental; por otro, mantener el enfoque comercial claro y atractivo.
    </p>

    
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <a href="#" className="bg-tertiary text-zinc-50 font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/80 text-center">
        See Projects
      </a>
      <a href="#" className="border border-tertiary text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/10 text-center">
        More Details
      </a>
    </div>
  </div>
  
  
</div>
<h2 className="text-3xl md:text-5xl text-center mb-4 text-zinc-50">
      Parte del proceso
    </h2>
<div className="container mx-auto px-4 py-8">
    <div className="relative wrap overflow-hidden">
        <div className="border-2-2 absolute border-opacity-20 border-indigo-400 h-full border left-1/2"></div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-zinc-50 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
                <p className="text-gray-700 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.</p>
            </div>
        </div>
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div class="order-1 bg-zinc-50 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
                <p class="text-gray-700 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.</p>
            </div>
        </div>
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div class="order-1 bg-zinc-50 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
                <p class="text-gray-700 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.</p>
            </div>
        </div>
    </div>
</div>
</section>
  );
}


export default Projects;

