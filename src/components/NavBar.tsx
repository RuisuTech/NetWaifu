import React from "react";

export default function NavBar() {
  return (
    <div className="flex place-content-around items-center p-8">
      <img className="h-12 max-md:h-6" src="./../NetWaifu-Logo.png" alt="Logo" />
      <div className="flex gap-4">
        <select className="bg-transparent border-2 border-white-950  text-white" name="Idioma" id="Idioma">
          <option value="Español">Español</option>
          <option value="Ingles">Ingles</option>
        </select>
        <a className="bg-red-500 border-2 border-red-500 text-white rounded p-2" href="#">Iniciar sesión</a>
      </div>
    </div>
  );
}
