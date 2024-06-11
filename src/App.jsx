import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.tsx";
import HeroBar from "./components/HeroBar.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="bg-[url('./../bg-port.webp')] bg-center bg-cover h-screen">
          <NavBar />
          <HeroBar />
        </div>
      </div>
    </>
  );
}

export default App;
