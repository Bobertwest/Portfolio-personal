import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Tema } from "../../context/Context";
import "./Contact.css";

const Contact = () => {
  const thema = useContext(Tema);
  const { theme, elementID } = thema;

  const CopyToClipboard = (id) => {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    Swal.fire("Number copied to clipboard!", "", "success");
  };
  return (
    <div className={`container contact${theme}`} id={elementID.contact}>
      <h1 className="contactTitle">Contact</h1>
      <p className="contactMessage">
        {`Contact me for a project, hiring or if you want to invite me a coffee. `}
        <Icon icon="cib:java" />
      </p>
      <div className="contact">
        <form className="contactForm">
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="name" placeholder="Name" />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message..."></textarea>
          <input type="submit" value="Send" className="btn sendForm" />
        </form>
        <div className="media">
          <h3 className="mediaTitle">My social networks</h3>
          <ul className="mediaList">
            <li className="whats">
              <p
                onClick={() => {
                  CopyToClipboard("numero");
                }}>
                <Icon icon="akar-icons:whatsapp-fill" />
                <span id="numero">{` +507 6661-6396`}</span>
              </p>
            </li>
            <li>
              <a
                href="https://www.instagram.com/robert_west.js/?hl=es"
                target="_blank"
                rel="noopener noreferrer">
                <Icon icon="akar-icons:instagram-fill" />
                {` robert_west.js`}
              </a>
            </li>
            <li>
              <a
                href="mailto:robertmathewwest10@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <Icon icon="eva:email-outline" />
                {` robert@gmail.com`}
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/robertwest01"
                target="_blank"
                rel="noopener noreferrer">
                <Icon icon="akar-icons:twitter-fill" />
                {` robertwest01`}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/robert-west-400394163/"
                target="_blank"
                rel="noopener noreferrer">
                <Icon icon="ant-design:linkedin-outlined" />
                {` Robert West`}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
