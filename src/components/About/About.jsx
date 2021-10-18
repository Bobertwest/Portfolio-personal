import React, { useContext } from "react";
import { Tema } from "../../context/Context";
import Icono from "../Icono";
import "./About.css";
import curriculum from "../../assets/Curriculum_PDF.pdf";

const About = () => {
  const thema = useContext(Tema);

  const { theme, elementID } = thema;
  return (
    <div className={`container about${theme}`} id={elementID.about}>
      <Icono />
      <article className="aboutText">
        <h1 className="aboutTitle">About me</h1>
        <p className="aboutName">I'm Robert West</p>
        <p className="aboutName aboutPosition">
          Mechatronics Engieneer/Frontend developer
        </p>
        <br />
        <br />

        <p className="aboutAbout">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          consectetur amet voluptatum! Officia maiores ipsum eaque illo, natus
          fuga, veniam optio, atque nostrum libero praesentium molestiae
          repellendus quaerat id quo!
        </p>
        <a
          className="btn btn-download"
          href={curriculum}
          download="Robert West - CV"
          target="_blank"
          rel="noreferrer">
          Download CV
        </a>
      </article>
    </div>
  );
};

export default About;
