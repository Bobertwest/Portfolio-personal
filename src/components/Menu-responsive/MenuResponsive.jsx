import React, { useContext } from "react";
import { Tema } from "../../context/Context";
import { goTo } from "../../helpers/helpers";
import "./MenuResponisve.css";

const MenuResponsive = ({ setShowMenu }) => {
  const thema = useContext(Tema);
  const { theme, elementID } = thema;

  const verEemento = (id) => {
    setShowMenu();
    goTo(id);
  };
  return (
    <nav className={`nav-container-responsive responsive${theme}`}>
      <ul className="list-responsive">
        <li className="list-item-responsive">
          <button
            className="btn btn-nav"
            onClick={() => verEemento(elementID.about)}>
            About me
          </button>
        </li>
        <li className="list-item-responsive">
          <button
            className="btn btn-nav"
            onClick={() => verEemento(elementID.skills)}>
            My Skills
          </button>
        </li>
        <li className="list-item-responsive">
          <button
            className="btn btn-nav"
            onClick={() => verEemento(elementID.services)}>
            My Services
          </button>
        </li>
        <li className="list-item-responsive">
          <button
            className="btn btn-nav"
            onClick={() => verEemento(elementID.portfolio)}>
            Portfolio
          </button>
        </li>
        <li className="list-item-responsive">
          <button
            className="btn btn-nav"
            onClick={() => verEemento(elementID.contact)}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuResponsive;
