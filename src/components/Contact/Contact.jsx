import { Icon } from "@iconify/react";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Tema } from "../../context/Context";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../helpers/dbConfig";
import "./Contact.css";
import Spinner from "../../helpers/Spinner";

const Contact = () => {
  const thema = useContext(Tema);
  const { theme, elementID } = thema;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageContact, setMessageContact] = useState({
    email: "",
    name: "",
    message: "",
  });

  const { email, name, message } = messageContact;

  const handleChange = (e) => {
    setMessageContact({
      ...messageContact,
      [e.target.name]: e.target.value,
    });
  };

  const submitMessage = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setError(true);
    } else {
      setError(false);
      try {
        setLoading(true);
        const date = new Date();
        var month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const finalDate = `${year}-${month}-${day}-(${hour}:${minute})`;
        const route = `messages/${finalDate}/${name}`;
        await setDoc(doc(db, route, email), {
          says: message,
        });
        setLoading(false);
        Swal.fire("Great!", "Message has been sent succefully🙌!!", "success");
        setMessageContact({
          email: "",
          name: "",
          message: "",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "Try again...",
        });
        console.log(error);
        setLoading(false);
      }
    }
  };

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
        <form className="contactForm" onSubmit={submitMessage}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={name}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message..."
            onChange={handleChange}
            value={message}></textarea>
          {error ? (
            <p className="error">
              Todos los campos son obligatorios o puedes buscarme en redes
            </p>
          ) : null}
          <button type="submit" className="btn sendForm" disabled={loading}>
            {loading ? <Spinner /> : "Send"}
          </button>
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
                href="mailto:robert@therobertwest.com"
                className="emailClass"
                target="_blank"
                rel="noopener noreferrer">
                <Icon icon="eva:email-outline" />
                {` robert@therobertwest.com`}
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
