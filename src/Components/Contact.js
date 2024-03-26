import axios from "axios";
import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const formSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://upskilling-egypt.com:3001/contact", {
        name,
        email,
        phone,
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="container contact">
        <div className="row">
          <div className="form col-lg-8 col-md-6 col-sm-12 col-xs-12">
            <form onSubmit={formSumbit}>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
          <dev className="contact-info col-lg-2 col-md-6 col-sm-12 col-xs-12">
            <div className="icons">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <h6>test@gmail.com</h6>
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <h6>+201154932137</h6>
            </div>
          </dev>
        </div>
      </div>
    </>
  );
}

export default Contact;
