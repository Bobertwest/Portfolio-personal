import React from "react";
import { Icon } from "@iconify/react";

const Service = ({ icon, text, identify }) => {
  return (
    <div className="service" data-aos="fade-up">
      <Icon icon={icon} className={`${identify} iconoService`} />
      <h3 className="iconoText">{text}</h3>
    </div>
  );
};

export default Service;
