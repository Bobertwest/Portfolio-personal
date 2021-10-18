import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portada from "./components/Portada/Portada";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Context from "./context/Context";

function App() {
  return (
    <Context>
      <div className="App">
        <Portada />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
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
