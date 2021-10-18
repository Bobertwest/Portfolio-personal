import React, { useContext } from "react";
import { Tema } from "../../context/Context";
import { portfolio } from "../../helpers/helpers";
import Sublimat from "../../Images/Sublimat.png";
import "./Portfolio.css";
import Work from "./Work";

const Portfolio = () => {
  const thema = useContext(Tema);
  const { theme, elementID } = thema;
  return (
    <div className={`container portfolio${theme}`} id={elementID.portfolio}>
      <h1 className="portfolioTitle">Portafolio</h1>
      <div className="allWorks">
        {portfolio.map((project) => (
          <Work
            key={project.web}
            fondo={project.fondo}
            titulo={project.titulo}
            descripcion={project.descripcion}
            web={project.web}
            codigo={project.codigo}
          />
        ))}
      </div>
      <div className="bussinesess">
        <h1 className="portfolioTitle titleCenter">
          Businesses which have trusted
        </h1>
        <a
          className="linkSublimat"
          href="https://sublimatbella.com"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={Sublimat}
            alt="Sublimat y diseños bella"
            className="sublimat"
          />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
