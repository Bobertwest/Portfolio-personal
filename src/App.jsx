import React, { useEffect } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portada from "./components/Portada/Portada";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Context from "./context/Context";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <Context>
      <div className="App">
        <Portada />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <iframe
          src="https://jueguitodob.netlify.app/"
          style={{ width: "100%", height: "100vh" }}
          title="juego"></iframe>
        {/* <h1>hola mudno</h1>
        <h1>hola mudno</h1>
        <h1>hola mudno</h1>
        <h1>hola mudno</h1>
        <h1>hola mudno</h1>
        <h1>hola mudno</h1>
        <h1>hola mudno</h1>
        <h1>hola mudno</h1>
        <h1>hola mudno</h1>
        <h1>hola mudno</h1> */}
      </div>
    </Context>
  );
}

export default App;
