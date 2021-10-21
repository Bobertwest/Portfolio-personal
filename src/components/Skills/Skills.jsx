import React, { useContext, useState } from "react";
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
  const { theme, elementID } = thema;
  const [load, setLoad] = useState(false);
  window.addEventListener("scroll", () => {
    if (parseInt(window.pageYOffset) >= 990) {
      setLoad(true);
    }
  });
  return (
    <div className={`container mySkills${theme}`} id={elementID.skills}>
      <h1 className="mySkillsTitle">My Skills</h1>
      <div className="allSkills">
        <Skill
          time={400}
          grades={140}
          content={html}
          text="Html5"
          load={load}
        />
        <Skill time={400} grades={30} content={css} text="CSS3" load={load} />
        <Skill time={400} grades={75} content={sass} text="Sass" load={load} />
        <Skill
          time={400}
          grades={65}
          content={jav}
          text="Javascript"
          load={load}
        />
        <Skill
          time={400}
          grades={95}
          content={react}
          text="React js"
          load={load}
        />
        <Skill
          time={400}
          grades={55}
          content={redux}
          text="Redux"
          load={load}
        />
        <Skill time={400} grades={85} content={git} text="GIT" load={load} />
        <Skill
          time={400}
          grades={50}
          content={firebase}
          text="Firebase"
          load={load}
        />
        <Skill time={400} grades={80} content={npm} text="NPM" load={load} />
      </div>
      <p className="learning">AND ALWAYS LEARNING🔥</p>
      <Icono2 />
    </div>
  );
};

export default Skills;
