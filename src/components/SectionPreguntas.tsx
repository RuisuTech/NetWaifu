import React from "react";
import Accordion from "./Accordion";
import EmailPregunta from "./EmailPregunta";

const SectionPreguntas: React.FC = () => {
  const accordionItems = [
    {
      title: "¿Qué es NetWaifu?",
      content: (
        <p>
          NetWaifu es un servicio de streaming que ofrece una gran variedad de
          películas, series y documentales premiados en casi cualquier pantalla
          conectada a internet. <br />
          <br /> Todo lo que quieras ver, sin límites ni comerciales, a un costo
          muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las
          semanas se agregan más películas y series!
        </p>
      ),
    },
    {
      title: "¿Cuánto cuesta NetWaifu?",
      content: (
        <p>
          Disfruta NetWaifu en tu smartphone, tablet, smart TV, laptop o
          dispositivo de streaming, todo por una tarifa plana mensual. Planes
          desde S/ 24.90 hasta S/ 44.90 al mes. Sin costos adicionales ni
          contratos.
        </p>
      ),
    },
    {
      title: "¿Dónde puedo ver NeWaifu?",
      content: (
        <p>
          Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de
          NetWaifu para ver contenido al instante a través de netwaifu.com desde
          tu computadora personal o en cualquier dispositivo con conexión a
          internet que cuente con la app de NetWaifu, como smart TV,
          smartphones, tablets, reproductores multimedia y consolas de juegos.{" "}
          <br />
          <br /> Además, puedes descargar tus series favoritas con la app para
          iOS o Android. Con la función de descarga, puedes ver contenido donde
          vayas y sin conexión a internet. Lleva NetWaifu contigo adonde sea.
        </p>
      ),
    },
    {
      title: "¿Cómo cancelo?",
      content: (
        <p>
          NetWaifu es flexible. Sin contratos molestos ni compromisos. Cancela
          la membresía online con solo dos clics. No hay cargos por cancelación.
          Empieza y termina cuando quieras.
        </p>
      ),
    },
    {
      title: "¿Qué puedo ver en NetWaifu?",
      content: (
        <p>
          NetWaifu tiene un amplio catálogo de películas, series, documentales,
          animes, originales premiados y más. Todo lo que quieras ver, cuando
          quieras.
        </p>
      ),
    },
    {
      title: "¿Es bueno NetWaifu para los niños?",
      content: (
        <p>
          La experiencia de Netflix para niños está incluida en la membresía
          para que los padres tengan el control mientras los peques disfrutan
          series y películas familiares en su propio espacio. <br />
          <br /> Los perfiles para niños incluyen controles parentales
          protegidos por PIN que te permiten restringir el contenido que pueden
          ver los niños en función de la clasificación por edad y bloquear
          determinados títulos que no quieras que los niños vean.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-black flex mt-2 p-24 place-content-center w-full">
      <div className="p-8 text-center">
        <h1 className="text-5xl max-md:text-2xl text-white font-bold mb-6">
          Preguntas Frecuentes
        </h1>
        <div className="flex">
          <Accordion items={accordionItems} />
        </div>
        <EmailPregunta />
      </div>
    </div>
  );
};

export default SectionPreguntas;
