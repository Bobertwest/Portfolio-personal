import React, { useContext } from "react";
import { Tema } from "../../context/Context";
import Header from "../Header/Header";
import "./Portada.css";

const Portada = () => {
  const thema = useContext(Tema);
  const { theme } = thema;
  return (
    <div className={`portada ${theme}`}>
      <Header />
      <div className="portadaInfo">
        <div className="texto">
          <h1 className="titulo saludo">Hi,</h1>
          <h1 className="titulo nombre">I´m ROBERT WEST</h1>
          <h1 className={`titulo profesion profesion${theme}`}>
            frontend developer
          </h1>
        </div>
        <div className="profile"></div>
      </div>
    </div>
  );
};

export default Portada;
