import React, { useContext, useEffect, useState } from "react";
import { Tema } from "../../context/Context";
import "./Header.css";
import MenuResponsive from "../Menu-responsive/MenuResponsive";
import { getAltura, goTo } from "../../helpers/helpers";
import { Icon } from "@iconify/react";

const Header = () => {
  const thema = useContext(Tema);

  const {
    themes: { white, dark },
    theme,
    elementID,
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

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeButton = () => {
    if (showMenu) {
      document.getElementById("hamburger").style.transform = "rotateY(-180deg)";
    } else {
      document.getElementById("hamburger").style.transform = "rotateY(0deg)";
    }
    setShowMenu(!showMenu);
  };

  return (
    <header className={`${claseName} header${headerFondo}`} id="head">
      <button className="btn btn-header" onClick={goToTop}>
        The R<Icon icon="akar-icons:react-fill" className="reactIcon" />
        bert West
      </button>
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
              onClick={changeButton}
              id="hamburger">
              <Icon
                icon={showMenu ? "line-md:close" : "line-md:menu"}
                className="butonMenu"
              />
            </button>
          </li>
          {showMenu ? <MenuResponsive setShowMenu={setShowMenu} /> : null}
          <li className="list-item">
            <button
              className="btn btn-nav"
              onClick={() => {
                goTo(elementID.about);
              }}>
              About me
            </button>
          </li>
          <li className="list-item">
            <button
              className="btn btn-nav"
              onClick={() => {
                goTo(elementID.skills);
              }}>
              My Skills
            </button>
          </li>
          <li className="list-item">
            <button
              className="btn btn-nav"
              onClick={() => {
                goTo(elementID.services);
              }}>
              My Services
            </button>
          </li>
          <li className="list-item">
            <button
              className="btn btn-nav"
              onClick={() => {
                goTo(elementID.portfolio);
              }}>
              Portfolio
            </button>
          </li>
          <li className="list-item">
            <button
              className="btn btn-nav"
              onClick={() => {
                goTo(elementID.contact);
              }}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
