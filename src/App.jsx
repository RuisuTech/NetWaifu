import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.tsx";
import HeroBar from "./components/HeroBar.tsx";
import Section from "./components/Section.tsx";

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
          <Section />
        </div>
      </div>
    </>
  );
}

export default App;
