import React, { useContext } from "react";
import { Tema } from "../../context/Context";
import "./Header.css";

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
      setTheme(dark);
      setClaro(false);
    } else {
      setTheme(white);
      setClaro(true);
    }
  };

  return (
    <header className="header">
      <button className="btn btn-header">The Robert West</button>
      <nav className="nav-container">
        <ul className="list">
          <li className="slider">
            <button
              className={`btn btn-slider ${theme}`}
              onClick={tema}></button>
          </li>
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
