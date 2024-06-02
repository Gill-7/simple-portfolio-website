import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Contact.module.css";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

function Contact() {
  const [status, setStatus] = useState("Submit");
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await emailjs.sendForm(
        "service_z6xgoyq",
        "template_mdj52tt",
        form.current,
        "Aklu7pbJF-X0jIsil"
      );
      setStatus("Submit");
      setShowMessage(true);
    } catch (error) {
      if (error.status === 400) {
        setShowMessage(true);
      }
    }
  };

  return (
    <div className={classes["form-container"]}>
      {!showMessage && (
        <div>
          <h2>Get in touch</h2>
          <form className={classes["form"]} ref={form} onSubmit={handleSubmit}>
            <div className={classes["form-field"]}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={`${classes.input}  ${classes["name-input"]}`}
                required
              />
            </div>
            <div className={classes["form-field"]}>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                className={`${classes.input} ${classes["email-input"]}`}
                required
              />
            </div>
            <div className={classes["form-field"]}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                className={classes["msg-input"]}
                rows="5"
                required
              />
            </div>
            <button type="submit">{status}</button>
          </form>
        </div>
      )}
      {showMessage && (
        <h3>Thanks for contacting. I will get back to you shortly.</h3>
      )}
      <div className={classes["social-contact"]}>
        <h2>Other ways to connect</h2>
        <div>
          <a
            href="https://www.linkedin.com/in/gillpreetsingh/"
            target="_blank"
            rel="noreferrer"
            className={classes.tooltip}
            aria-label="LinkedIn"
          >
            <GrLinkedinOption />
            <span className={classes.tooltiptext}>Linkedin</span>
          </a>
          <a
            href="https://github.com/Gill-7"
            target="_blank"
            rel="noreferrer"
            className={classes.tooltip}
            aria-label="Github"
          >
            <AiOutlineGithub />
            <span className={classes.tooltiptext}>Github</span>
          </a>
          <a
            href="mailto:gillpreetsingh28@gmail.com"
            className={classes.tooltip}
            aria-label="Email"
          >
            <AiOutlineMail />
            <span className={classes.tooltiptext}>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
