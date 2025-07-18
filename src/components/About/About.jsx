import React, { useState } from 'react';

function About() {
  return (
    <section className="w-full bg-lime-200 py-12 px-4">
      <div className="max-w-4xl mx-auto rounded-2xl px-6 py-2 bg-white text-black border border-black border-b-4">
        <div className="flex flex-row items-center rounded-xl">
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-2 text-fuchsia-950">Título de la Sección</h2>
            <p className="text-fuchsia-950">
              Este es un párrafo de texto que describe la imagen. Puedes agregar más párrafos o elementos aquí.
            </p>
          </div>
          <div className="w-1/2 p-4">
            {/* Imagen u otro contenido */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
