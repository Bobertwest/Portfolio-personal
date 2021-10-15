import React, { useContext } from "react";
import useSkill from "./useSkill";
import { Tema } from "../../context/Context";
import "./Skills.css";
import Icono2 from "../Icono2";
import html from "../../SVGS/Html.svg";
import css from "../../SVGS/Css.svg";
import sass from "../../SVGS/Sass.svg";
import jav from "../../SVGS/Javascript.svg";
import react from "../../SVGS/React.svg";
import redux from "../../SVGS/Redux.svg";
import git from "../../SVGS/git.svg";
import firebase from "../../SVGS/Firebase.svg";
import npm from "../../SVGS/npm.svg";

const Skills = () => {
  const [Skill] = useSkill();
  const thema = useContext(Tema);
  const { theme } = thema;

  return (
    <div className={`mySkills${theme}`}>
      <h1 className="mySkillsTitle">My Skills</h1>
      <div className="allSkills">
        <Skill time={400} grades={140} content={html} title="Html5" />
        <Skill time={400} grades={30} content={css} />
        <Skill time={400} grades={75} content={sass} />
        <Skill time={400} grades={65} content={jav} />
        <Skill time={400} grades={95} content={react} />
        <Skill time={400} grades={55} content={redux} />
        <Skill time={400} grades={85} content={git} />
        <Skill time={400} grades={50} content={firebase} />
        <Skill time={400} grades={80} content={npm} />
      </div>
      <p className="learning">AND ALWAYS LEARNING🔥</p>
      <Icono2 />
    </div>
  );
};

export default Skills;
