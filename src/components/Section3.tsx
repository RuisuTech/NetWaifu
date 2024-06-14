import React from "react";

export default function Section3() {
  return (
    <div>
      <div className="bg-black flex place-content-center mt-2 p-24">
        <div className="flex gap-4 flex-col text-white place-content-center w-[605px]">
          <h1 className="font-bold text-5xl">Disfruta donde quieras</h1>
          <h2 className="text-2xl">
            Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.
          </h2>
        </div>
        <div className="relative h-[450px] w-[600px]">
          <img
            className="absolute inset-0 object-cover w-full h-full z-0"
            src="./../bg-port.webp"
            alt="background image"
          />
          <div className="absolute inset-0 bg-[url('./../tv.png')] bg-center bg-cover z-10"></div>
        </div>
      </div>
    </div>
  );
}
