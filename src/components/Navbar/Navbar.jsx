import React, {useState} from 'react'
import Logo from '../../assets/Logo.png'

const navbarlinks = [
    {
        id:1,
        title:"Inicio",
        Link:"/"
    },
    {
        id:2,
        title:"Proyectos",
        Link:"/"
    },
    {
        id:3,
        title:"Sobre mí",
        Link:"/"
    },
    {
        id:4,
        title:"Contacto",
        Link:"/"
    },
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <nav className='fixed top-0 left-0 w-full  backdrop-blur-md z-50'>
      <div className='flex justify-between items-center sm:px-12 px-4 sm:py-6 py-3'>
        <div>
            <img src={Logo} alt='Logo del sitio' className='w-[100px]'/>
        </div>

       {/*Botón de hamburguesa*/}
        <button onClick={toggleMenu} className='text-white md:hidden'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24 '>
              {isOpen ? (<path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d=" M6 18L18 6M6 6l12 12"/>) : (<path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d=" M4 6h16M4 12h16M4 18h16 "/>)}
              
            </svg>
        </button>

        <div className='hidden md:block'>
            <ul className='flex sm:space-x-8 space-x-4'>
                {navbarlinks.map((link)=>(
                <li key={link.id}>
                    <a className='text-white sm:text-lg text-sm hover:text-sky-100 transition-transform hover:scale-110 transform inline-block duration-300 ' href={link.Link}>{link.title}</a>
                </li>
                ))}
            </ul>
        </div>
      </div>

      {/* Menú mobile*/}
      <div
  className={`md:hidden absolute top-full left-0 w-full bg-black transition-all duration-300 z-50 ${
    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
>
  <ul className="flex flex-col px-4 py-2">
    {navbarlinks.map((link) => (
      <li key={link.id} className="py-2 text-center">
        <a
          className="text-white hover:text-sky-200"
          href={link.Link}
          onClick={() => setIsOpen(false)}
        >
          {link.title}
        </a>
      </li>
    ))}
  </ul>
</div>

    </nav>
  )
}

export default Navbar
