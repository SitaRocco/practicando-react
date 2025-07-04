import React from 'react'
import Personaje from "../../assets/Personaje.png"
import Logo from "../../assets/Logo.png"
import {motion} from "framer-motion"
import { slipeUp } from '../../utility/animation'

const Hero = () => {
  return (
    <section className='mt-36'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/*Textos y descripción*/}
        <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <motion.img
           src={Logo} alt='logo del juego'
          variants={slipeUp(0.2)}
          initial="initial"
          animate="animate"

          />
          <p className='py-12 text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem sagittis, dapibus ipsum in, vehicula augue. In justo sem, pharetra non nunc vitae, vehicula bibendum dui. 
          </p>
          <div className='flex justify-center gap-4'>
            <a className='bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-500 transition-all duration-300 items-center cursor-pointer'>Jugar ahora</a>
            <a className='bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-500 transition-all duration-300 items-center cursor-pointer'>Ver gameplay</a>
          </div>
        </div>

        {/*Imagen*/}
        <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <img src={Personaje} alt='personaje del juego'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
