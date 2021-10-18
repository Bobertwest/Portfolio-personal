import React, { useState } from "react";
import { createContext } from "react";

export const Tema = createContext();

const Context = (props) => {
  //IDS
  const elementID = {
    about: "about",
    skills: "skills",
    services: "services",
    portfolio: "portfolio",
    contact: "contact",
  };

  //Temas
  const themes = {
    white: "light",
    dark: "dark",
  };

  //Tema por defecto
  const [theme, setTheme] = useState(themes.white);
  const [claro, setClaro] = useState(true);
  return (
    <Tema.Provider
      value={{
        themes: themes,
        theme: theme,
        claro: claro,
        elementID: elementID,
        setTheme: setTheme,
        setClaro: setClaro,
      }}>
      {props.children}
    </Tema.Provider>
  );
};

export default Context;
