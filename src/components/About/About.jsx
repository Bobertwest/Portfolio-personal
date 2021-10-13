import React, { useContext } from "react";
import { Tema } from "../../context/Context";
import Icono from "../Icono";
import "./About.css";

const About = () => {
  const thema = useContext(Tema);

  const { theme } = thema;
  return (
    <div className={`about${theme}`}>
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
        <button className="btn btn-download">Download CV</button>
      </article>
    </div>
  );
};

export default About;
