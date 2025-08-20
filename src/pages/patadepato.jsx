import {Navbar, Contact, Footer} from '../components/Components';
import { mockup, fondo, figma, elementor, wordpress, mockup2, page1, page2, page3, page4, page5, fondo2,mockup3,mockup4,php,html,css,javascript } from '../assets/Assets';
import { Link, Outlet } from 'react-router-dom';



function Patadepato() {
  return (
   <>
      <Navbar />
<section className="overflow-hidden ">
  {/* Banner de imagen arriba */}
      <div className="w-full mx-auto  bg-indigo-200">
        <div className="relative w-full mx-auto h-[40rem]">
  <img
    src={fondo2}
    alt="Banner"
    className="w-full h-full object-cover"
  />
  <h2 className="absolute inset-0 flex items-center justify-center text-center text-white sm:text-7xl text-4xl font-bold bg-black/30">
    Pata de Pato
  </h2>
</div>

         <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
               
                <p className="mt-4 text-gray-600 text-lg">
                    Este sitio web para la marca Pata de Pato, que crea accesorios hechos a mano con cuero reciclado, tenía como objetivo reflejar uno de sus principales valores: el compromiso con el cuidado del medio ambiente. Además de mostrar y vender sus productos, el sitio debía incorporar un proyecto personal de su creador: una iniciativa de limpieza de playas que realiza junto a su perrita 🐕 y un pato 🦆. El desafío fue encontrar una forma de equilibrar ambos mundos: por un lado, visibilizar la causa medioambiental; por otro, mantener el enfoque comercial claro y atractivo.</p>
                  <div className="flex justify-center items-center gap-6 mt-8">
                   <img src={figma} alt="Figma" className="w-8 h-8 lg:w-12 lg:h-12 mt-7" />
                    <img src={html} alt="html" className="w-8 h-8 lg:w-12 lg:h-12 mt-7" />
                    <img src={css} alt="css" className="w-8 h-8 lg:w-12 lg:h-12 mt-7" />
                    <img src={javascript} alt="javascript" className="w-8 h-8 lg:w-12 lg:h-12 mt-7"/>
                   <img src={php} alt="php" className="w-8 h-8 lg:w-12 lg:h-12 mt-7" /> 
                   <img src={wordpress} alt="wordpress" className="w-8 h-8 lg:w-12 lg:h-12 mt-7" /> 
                   </div>
           </div>
      
            <div className="mt-12 md:mt-0">
                <img src={mockup3} alt="patadepato-web" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
      
      </div>
      
<div className="px-6 lg:px-44 py-24">
  <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Imagen */}
    <img
      src={mockup4}
      alt="mockup-patadepato-web"
      className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
    />

    {/* Texto con listado */}
    <div>
      <h2 className="font-bold tracking-tight text-gray-900 text-4xl sm:text-5xl">
        Parte del Proceso
      </h2>
      <ul className="mt-6 space-y-4 text-lg text-gray-600 list-disc list-inside">
        <li>
          <strong>Investigación:</strong> Mediante encuestas realizadas a los seguidores de la cuenta de Instagram de nuestro cliente, 
  identificamos hallazgos clave, como el interés de los usuarios en conocer más sobre la historia, trayectoria 
  y compromiso medioambiental de la marca.
        </li>
        <li>
          <strong>Diseño:</strong> Se crearon wireframes para organizar la estructura del sitio y presentar a nuestro cliente una vista previa 
  de cada sección. Además, se sugirió incluir en la página de “Contacto” un video sobre las charlas medioambientales 
  que el cliente realiza en colegios, utilizando este recurso como medio para agendar visitas educativas.
        </li>
        <li>
          <strong>Desarrollo:</strong> El sitio fue desarrollado desde cero utilizando Bootstrap 5 y CSS para los estilos, junto con WordPress y ACF. 
  Se integró WooCommerce para habilitar la venta de accesorios en línea.</li>
      </ul>
    </div>

  </div>
</div>


<div className="mb-6 text-center sm:text-2xl text-xl ">
    <a
      href="https://patadepato.cl/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-zinc-700 hover:text-zinc-900 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.828 10.172a4 4 0 015.656 5.656l-3 3a4 4 0 01-5.656 0M10.172 13.828a4 4 0 01-5.656-5.656l3-3a4 4 0 015.656 0"
        />
      </svg>
      Ver sitio web
    </a>
  </div>

 <div className="px-4 py-12 sm:px-6 lg:px-8">
  {/* Card con fondo blanco y bordes */}
  <div className="bg-zinc-100 border border-black border-b-[4px] rounded-xl p-6">
    
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
              <h2 className="text-4xl sm:text-7xl font-bold mb-24 text-zinc-700 text-center">Galería de Imágenes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
        <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
          <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
            <img
              src={page1}
              alt="abogados-web"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </a>
        </div>

        <div className="col-span-2 sm:col-span-1 md:col-span-2">
          <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
            <img
              src={page2}
              alt="abogados-web"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </a>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
              <img
                src={page3}
                alt="abogados-web"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </a>
            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
              <img
                src={page4}
                alt="abogados-web"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </a>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
          <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
            <img
              src={page5}
              alt="abogados-web"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </a>
        </div>

      </div>
    </div>
  </div>
</div>


  <div className=" text-center sm:mt-0 mt-12 mb-32">
  <Link to={'/#proyectos'}
    className=" cursor-pointer inline-block bg-gradient-to-r from-indigo-200 to-indigo-400 px-6 py-3 rounded-3xl"
  >
    Volver a proyectos
  </Link>
</div>

</section>
<Contact />

      <Footer />
    </>
	

  );
}

export default Patadepato;