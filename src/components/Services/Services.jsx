import React, { useContext } from "react";
import { Tema } from "../../context/Context";
import Service from "./Service";
import "./Services.css";

const Services = () => {
  const thema = useContext(Tema);
  const { theme } = thema;
  return (
    <div className={`container services${theme}`}>
      <h1 className="servicesTitle">My services</h1>
      <div className="allServices">
        <Service
          icon="clarity:design-line"
          text="Web design"
          identify="design"
        />
        <Service
          icon="clarity:devices-solid"
          text="Responsive design"
          identify="responsive"
        />
        <Service icon="entypo:code" text="Development" identify="develop" />
        <Service
          icon="si-glyph:database-upload"
          text="Deployment"
          identify="deploy"
        />
        <Service icon="wpf:maintenance" text="Maintenance" identify="setting" />
      </div>
    </div>
  );
};

export default Services;
