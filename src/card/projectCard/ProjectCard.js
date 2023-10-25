import React from "react";
import classes from "./ProjectCard.module.css";

export default function ProjectCard({ heading, text, src, href, path }) {
  return (
    <div className={classes["card"]}>
      <div className={classes["card-details"]}>
        <h3 className={classes["card-heading"]}>{heading}</h3>
        <p className={classes["card-text"]}>{text}</p>
        <div className={classes["card-link"]}>
          <a
            href={href}
            alt="github"
            target="_blank"
            rel="noopener noreferrer"
            className={classes["card-btn-link"]}
          >
            Look at my code here
          </a>
        </div>
      </div>
      <div className={classes["card-img-container"]}>
        <a
          href={path}
          alt="link to website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={src[0]} className={classes["card-img"]} alt={heading} />
        </a>
        <a
          href={path}
          alt="link to website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={src[1]} className={classes["card-img"]} alt={heading} />
        </a>
      </div>
    </div>
  );
}
