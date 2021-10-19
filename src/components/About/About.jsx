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
      <article className="aboutText" data-aos="fade-left">
        <h1 className="aboutTitle">About me</h1>
        <p className="aboutName">I'm Robert West</p>
        <p className="aboutName aboutPosition">
          Mechatronics Engieneer/Frontend developer
        </p>
        <br />
        <br />

        <p className="aboutAbout">
          I am a young mechatronics engineer, technology enthusiast. I like
          learning new technologies and inventing functional solutions.
          Currently I am working as a frontend developer. I always seek to use
          the best programming practices and meet the needs of my clients.
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
