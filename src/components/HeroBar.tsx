import React from "react";

export default function HeroBar() {
  return (
    <div className="flex flex-col text-center gap-4 text-white mt-[270px] max-md:mt-[50px] p-4">
      <h1 className="text-5xl max-md:text-2xl font-bold ">Películas y series ilimitadas y mucho más</h1>
      <h2 className="text-2xl max-md:text-xl">Disfruta donde quieras. Cancela cuando quieras.</h2>
      <div>
        <h2 className="text-2xl max-md:text-lg">
          ¿Quieres ver NetWaifu ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de NetWaifu.
        </h2>
        <div className="flex justify-center gap-4 mt-4 mb-60">
          <input className="bg-slate-950/50 border-2 border-slate-700 text-slate rounded p-2 w-1/6 max-md:w-1/2" type="email" name="emails" id="email" placeholder="Email" />
          <button className="bg-red-500 border-2 border-red-500 text-white rounded p-1 pb-2  text-2xl">Comenzar </button>
        </div>
      </div>
    </div>
  );
}
