import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-black mt-2 text-[#ffffffb3] flex place-content-center py-[72px]">
        <div className="flex flex-col w-[1464px] gap-8">
          <div>
            <h3 className="text-[16px]">¿Preguntas? Llama al 0-000-00000</h3>
          </div>
          <div className="flex gap-64 text-[14px] underline">
            <ul>
              <li>Preguntas frecuentes</li>
              <li>Relaciones con inversionistas</li>
              <li>Formas de ver</li>
              <li>Información corporativa</li>
              <li>Solo en Netflix</li>
            </ul>
            <ul>
              <li>Centro de ayuda</li>
              <li>Empleo</li>
              <li>Términos de uso</li>
              <li>Contáctanos</li>
            </ul>
            <ul>
              <li>Cuenta</li>
              <li>Canjear tarjetas de regalo</li>
              <li>Privacidad</li>
              <li>Prueba de velocidad</li>
            </ul>
            <ul>
              <li>Prensa</li>
              <li>Comprar tarjetas de regalo</li>
              <li>Preferencias de cookies</li>
              <li>Avisos legales</li>
            </ul>
          </div>
          <div>
            <select
              className="bg-transparent border-2 border-white-950  text-white"
              name="Idioma"
              id="Idioma"
            >
              <option value="Español">Español</option>
              <option value="Ingles">Ingles</option>
            </select>
          </div>
          <div>
            <h3 className="text-[14px]">NetWaifu Perú</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
