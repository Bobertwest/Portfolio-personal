import React from "react";
import { Icon } from "@iconify/react";

const Work = ({ fondo, titulo, descripcion, web, codigo }) => {
  return (
    <div className="work">
      <img src={fondo} alt="" className="fondoWork" />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <a href={web} target="_blank" rel="noopener noreferrer">
          <Icon icon="ls:web" />
        </a>
        <a href={codigo} target="_blank" rel="noopener noreferrer">
          <Icon icon="akar-icons:github-fill" />
        </a>
      </div>
    </div>
  );
};

export default Work;
