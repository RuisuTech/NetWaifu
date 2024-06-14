import React from "react";

export default function Section4() {
  return (
    <div>
      <div className="bg-black flex place-content-center mt-2 p-24">
        <div className="relative h-[450px] w-[600px]">
          <img
            className="absolute inset-0 object-cover w-full h-full z-0"
            src="./../bg-w.webp"
            alt="background image"
          />
          <div className="absolute inset-0 bg-[url('./../tv.png')] bg-center bg-cover z-10"></div>
        </div>
        <div className="flex gap-4 flex-col text-white place-content-center w-[605px]">
          <h1 className="font-bold text-5xl">Crea varios perfiles</h1>
          <h2 className="text-2xl">
            Aventuras con tus personajes favoritos en un espacio diseñado
            exclusivamente para ellos, sin costo con tu membresía.
          </h2>
        </div>
      </div>
    </div>
  );
}
