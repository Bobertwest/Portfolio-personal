import React from "react";
import Portada from "./components/Portada/Portada";
import Context from "./context/Context";

function App() {
  return (
    <Context>
      <div className="App">
        <Portada />
      </div>
    </Context>
  );
}

export default App;
