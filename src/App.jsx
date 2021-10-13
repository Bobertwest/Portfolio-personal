import React from "react";
import About from "./components/About/About";
import Portada from "./components/Portada/Portada";
import Context from "./context/Context";

function App() {
  return (
    <Context>
      <div className="App">
        <Portada />
        <About />
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
