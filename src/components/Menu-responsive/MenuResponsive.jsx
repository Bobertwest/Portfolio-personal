import React, { useContext } from "react";
import { Tema } from "../../context/Context";
import "./MenuResponisve.css";

const MenuResponsive = () => {
  const thema = useContext(Tema);
  const { theme } = thema;
  return (
    <nav className={`nav-container-responsive responsive${theme}`}>
      <ul className="list-responsive">
        <li className="list-item-responsive">
          <button className="btn btn-nav">About me</button>
        </li>
        <li className="list-item-responsive">
          <button className="btn btn-nav">My Skills</button>
        </li>
        <li className="list-item-responsive">
          <button className="btn btn-nav">My Services</button>
        </li>
        <li className="list-item-responsive">
          <button className="btn btn-nav">Portfolio</button>
        </li>
        <li className="list-item-responsive">
          <button className="btn btn-nav">Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuResponsive;
