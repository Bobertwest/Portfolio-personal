import React, { useContext, useEffect, useState } from "react";
import { Tema } from "../../context/Context";
import { Divide as Hamburger } from "hamburger-react";
import "./Header.css";
import MenuResponsive from "../Menu-responsive/MenuResponsive";
import { getAltura } from "../../helpers/helpers";

const Header = () => {
  const thema = useContext(Tema);

  const {
    themes: { white, dark },
    theme,
    claro,
    setTheme,
    setClaro,
  } = thema;

  const tema = () => {
    if (claro) {
      setClaro(false);
      setTheme(dark);
    } else {
      setClaro(true);
      setTheme(white);
    }
  };

  const [showMenu, setShowMenu] = useState(false);
  const [altura, setAltura] = useState(parseInt(window.pageYOffset));
  const [claseName, setClaseName] = useState(getAltura(altura));
  const [headerFondo, setHeaderFondo] = useState(null);
  window.addEventListener("scroll", () => {
    setAltura(parseInt(window.pageYOffset));
  });

  useEffect(() => {
    if (showMenu) {
      setClaseName("Sticky");
      setHeaderFondo(theme);
    } else {
      setClaseName(getAltura(altura));
      if (getAltura(altura) === "Sticky") {
        setHeaderFondo(theme);
      } else {
        setHeaderFondo(null);
      }
    }
  }, [showMenu, altura, theme]);

  return (
    <header className={`${claseName} header${headerFondo}`} id="head">
      <button className="btn btn-header">The Robert West</button>
      <nav className="nav-container">
        <ul className="list">
          <li className="slider">
            <button
              className={`btn btn-slider ${theme}`}
              onClick={tema}></button>
          </li>
          <li className="btn-menu-container">
            <button
              className="btn btn-menu"
              onClick={() => setShowMenu(!showMenu)}>
              <Hamburger size={20} />
            </button>
          </li>
          {showMenu ? <MenuResponsive /> : null}
          <li className="list-item">
            <button className="btn btn-nav">About me</button>
          </li>
          <li className="list-item">
            <button className="btn btn-nav">My Skills</button>
          </li>
          <li className="list-item">
            <button className="btn btn-nav">My Services</button>
          </li>
          <li className="list-item">
            <button className="btn btn-nav">Portfolio</button>
          </li>
          <li className="list-item">
            <button className="btn btn-nav">Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
