import React, { useState } from 'react';
import Ro from '../../assets/Ro.png'; 






function About() {
  return (
    <section className="w-full py-12 px-4 bg-indigo-300" id ="about">
  <div className="max-w-7xl mx-auto rounded-2xl px-6 py-2">
    <div className="flex flex-col md:flex-row items-center rounded-xl">
      
      {/* Texto */}
      <div className="w-full">
        <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-zinc-700">Sobre mi</h2>
        <p className="text-zinc-700  text-start text-xl max-w-2xl mx-auto md:mx-0 ">
         ¡Hola! Soy Rocío y comencé este viaje a principios de 2023, cuando después de muchos años decidí estudiar. Fue un gran desafío, ya que partí literalmente desde cero en programación, pero con mucha motivación y curiosidad por aprender. <br></br>

<br></br>El diseño es un área que me atrae profundamente y que he podido explorar también a través de la orfebrería, oficio que llevo varios años desarrollando. La mezcla entre creatividad y técnica que he aprendido con la orfebrería la relaciono con el diseño y desarrollo web: partir desde la investigación y los primeros bocetos, hasta ver cómo todo se transforma en un sitio web funcional.

<br></br>
<br></br>Si quieres que tus ideas se conviertan en un sitio web, me encantaría trabajar contigo y llevar tu proyecto a la realidad. </p>
      </div>

      {/* Imagen */}
      <div className="w-xs md:w-1/2 p-4">
        <img src={Ro} alt="Ejemplo" className="w-auto md:w-full h-auto rounded-xl" />
      </div>
    </div>
  </div>



</section>


  );
}

export default About;
