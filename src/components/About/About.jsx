import React, { useState } from 'react';
import Ro from '../../assets/Ro.png'; 






function About() {
  return (
    <section className="w-full py-12 px-4 bg-indigo-300" id="about">
  <div className="max-w-4xl mx-auto">
    {/* Card centrada */}
    <div className="bg-zinc-50 border border-black border-b-4 rounded-2xl shadow-lg p-8">
      
      {/* Título con foto al lado */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-4xl sm:text-6xl font-bold text-zinc-700">Sobre mi</h2>
        <div className="w-12 h-12 sm:w-16 sm:h-16 text-end">
          <img src={Ro} alt="Rocío" className="w-full h-full object-cover rounded-full border border-black" />
        </div>
      </div>

      {/* Texto */}
      <p className="text-zinc-700 text-xl leading-relaxed space-y-4 text-start">
        ¡Hola! Soy Rocío y comencé este viaje a principios de 2023, cuando después de muchos años decidí estudiar. Fue un gran desafío, ya que partí literalmente desde cero en programación, pero con mucha motivación y curiosidad por aprender.
      </p>

      <p className="text-zinc-700 text-xl leading-relaxed space-y-4 mt-4 text-start">
        El diseño es un área que me atrae profundamente y que he podido explorar también a través de la orfebrería, oficio que llevo varios años desarrollando. La mezcla entre creatividad y técnica que he aprendido con la orfebrería la relaciono con el diseño y desarrollo web: partir desde la investigación y los primeros bocetos, hasta ver cómo todo se transforma en un sitio web funcional.
      </p>

      <p className="text-zinc-700 text-xl leading-relaxed space-y-4 mt-4 text-start">
        Si quieres que tus ideas se conviertan en un sitio web, me encantaría trabajar contigo y llevar tu proyecto a la realidad.
      </p>

    </div>
  </div>
</section>

  );
}


export default About;
