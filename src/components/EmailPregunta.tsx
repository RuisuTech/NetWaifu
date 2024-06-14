import React from "react";

export default function EmailPregunta() {
  return (
    <div className="flex flex-col text-center gap-4 text-white p-8">
      <div>
        <h2 className="text-[20px]">
          ¿Quieres ver NetWaifu ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de NetWaifu.
        </h2>
        <div className="flex justify-center gap-4 mt-4">
          <input
            className="bg-slate-950/50 border-2 border-slate-700 text-slate rounded p-2 w-[330px]"
            type="email"
            name="emails"
            id="email"
            placeholder="Email"
          />
          <button className="bg-red-500 border-2 border-red-500 text-white rounded p-1 pb-2  text-2xl">
            Comenzar{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
