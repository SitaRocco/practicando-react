import React from 'react';
import proyecto1 from '../../assets/patadepato.webp'
import proyecto2 from '../../assets/abogados.jpg'
import { Link, Outlet } from 'react-router-dom';

const projects = [
  {
    title: 'Sitio web accesorios "Pata de Pato"',
    image:
      proyecto1,
    bg: 'bg-transparent',
    span: 'col-span-2 sm:col-span-1 md:col-span-2',
    route: "patadepato"
  },
  {
    title: 'Rediseño Sitio web " Abogados Viña del Mar"',
    image:
      proyecto2,
    bg: 'bg-transparent',
    span: 'col-span-2 sm:col-span-1 md:col-span-2',
    route: "abogados"
  },
];

function Projects() {
  return (
    <section className="bg-indigo-200" id="proyectos">
      <div className="py-4 px-2 mx-auto max-w-screen-2xl sm:py-4 lg:px-6">
        <h2 className="text-4xl sm:text-8xl font-bold mb-24 text-zinc-700 text-center mt-12">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.span} ${project.bg} flex flex-col`}
            >
              {/* Card con marco visible */}
              <div className="bg-zinc-50 border border-black border-b-4 rounded-2xl p-4">
                  <Link to={`/${project.route}`} className="group relative flex flex-col rounded-xl overflow-hidden h-[400px]">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-4">
                    {project.title}
                  </h3>
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Projects;

