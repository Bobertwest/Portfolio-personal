import React, { useContext } from "react";
import { Tema } from "../../context/Context";
import Header from "../Header/Header";
import "./Portada.css";

const Portada = () => {
  const thema = useContext(Tema);
  const { theme } = thema;
  return (
    <div className={`container portada ${theme}`}>
      <Header />
      <h1 className="titulo saludo">Hi,</h1>
      <h1 className="titulo nombre">
        <pre>I´m </pre> ROBERT WEST
      </h1>
      <h1 className={`titulo profesion profesion${theme}`}>
        frontend developer
      </h1>
    </div>
  );
};

export default Portada;
