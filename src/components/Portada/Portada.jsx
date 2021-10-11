import React, { useContext } from "react";
import { Tema } from "../../context/Context";
import Header from "../Header/Header";
import "./Portada.css";
import port from "../../Images/Port.png";
import portDark from "../../Images/Port-dark.png";

const Portada = () => {
  const thema = useContext(Tema);
  const { theme, claro } = thema;
  return (
    <div className={`container portada ${theme}`}>
      <Header />
      {claro ? (
        <img src={port} alt="" className="portadaFondo" />
      ) : (
        <img src={portDark} alt="" className="portadaFondo" />
      )}
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
