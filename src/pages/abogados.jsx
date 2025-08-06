import {Navbar, Contact, Footer} from '../components/Components';
import { mockup, fondo, figma, elementor, wordpress, mockup2, page1, page2, page3, page4, page5 } from '../assets/Assets';
import { Link, Outlet } from 'react-router-dom';



function Abogados() {
  return (
   <>
      <Navbar />
<section className="overflow-hidden ">
  {/* Banner de imagen arriba */}
      <div className="w-full mx-auto  bg-indigo-200">
        <div className="relative w-full mx-auto h-[40rem]">
  <img
    src={fondo}
    alt="Banner"
    className="w-full h-full object-cover"
  />
  <h2 className="absolute inset-0 flex items-center justify-center text-center text-white sm:text-7xl text-4xl font-bold bg-black/30">
    Abogados Viña del Mar
  </h2>
</div>

         <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
               
                <p className="mt-4 text-gray-600 text-lg">
                    Este proyecto fue desarrollado durante mi práctica profesional en colaboración con la agencia SBS Publicidad. Consistió en el rediseño del sitio web de un estudio de abogados, utilizando Elementor como herramienta principal. El mayor desafío fue trabajar con recursos visuales limitados, lo que nos llevó a implementar soluciones de diseño que lograran proyectar una imagen moderna y profesional.</p>
                  <div className="flex justify-center items-center gap-6 mt-8">
                   <img src={figma} alt="Figma" className="w-12 h-12 mt-7" /> 
                   <img src={elementor} alt="elementor" className="w-12 h-12 mt-7" /> 
                   <img src={wordpress} alt="wordpress" className="w-12 h-12 mt-7" /> 
                   </div>
           </div>
      
            <div className="mt-12 md:mt-0">
                <img src={mockup} alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
      
      </div>
      
  <div className=" px-6 lg:px-44  py-24" >
   
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
            <img src={mockup2} alt="mockup-abogados" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" className="w-250 sm:w-900 rounded-xl shadow-xl ring-1 ring-gray-400/10"/>

      <div className="lg:pr-8 lg:pt-4">
        
        <div className="lg:max-w-6xl">
          
          <p className="mt-2  font-bold tracking-tight text-gray-900 text-4xl sm:text-7xl">Parte del Proceso</p>
         
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-400">
                  <path
                    d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z">
                  </path>
                  <path
                    d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z">
                  </path>
                  <path
                    d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z">
                  </path>
                </svg>
              </dt>
              <dd className="inline">Selección y estructura base:
Se utilizó una plantilla de Elementor como base para estructurar el sitio web, considerando que solo se contaba con imágenes del equipo de abogados.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-400">
                  <path fill-rule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clip-rule="evenodd"></path>
                </svg>
                
              </dt>
              <dd className="inline">Ajustes de contenido y secciones:
Varias secciones de la plantilla original no eran del agrado del cliente, por lo que se rediseñaron. Además, el sitio anterior contenía textos extensos que fueron resumidos para mejorar la claridad y experiencia de navegación.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-400">
                  <path fill-rule="evenodd"
                    d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                    clip-rule="evenodd"></path>
                  <path
                    d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
                  </path>
                </svg></dt>
              <dd class="inline">Adaptación a la identidad de marca:
Uno de los principales desafíos fue adaptar la plantilla a los requerimientos del cliente, incluyendo el cambio de la paleta de colores para alinearla con su identidad visual.
              </dd>
            </div>
          </dl>
        </div>
        
      </div>
    </div>
  </div>
<div className="mb-6 text-center sm:text-2xl text-xl ">
    <a
      href="https://abogadosvinadelmar.cl/"
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
    
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-24lg:px-6">
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

export default Abogados;

 

