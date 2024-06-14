import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.tsx";
import HeroBar from "./components/HeroBar.tsx";
import Section from "./components/Section.tsx";
import Section2 from "./components/Section2.tsx";
import Section3 from "./components/Section3.tsx";
import Section4 from "./components/Section4.tsx";
import SectionPreguntas from "./components/SectionPreguntas.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#222]">
        <div className="bg-[url('./../bg-port.webp')] bg-center bg-cover h-[100vh]">
          <NavBar />
          <HeroBar />
        </div>
        <div>
          <Section />
          <Section2 />
          <Section3 />
          <Section4 />
          <SectionPreguntas />
        </div>
      </div>
    </>
  );
}

export default App;
