import React, { useState } from "react";
import { createContext } from "react";

export const Tema = createContext();

const Context = (props) => {
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
        setTheme: setTheme,
        setClaro: setClaro,
      }}>
      {props.children}
    </Tema.Provider>
  );
};

export default Context;
