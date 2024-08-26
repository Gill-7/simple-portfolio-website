import React from "react";
import classes from "./ProjectCard.module.css";
import Carousel from "../carousel/Carousel";

export default function ProjectCard({ heading, text, src, href, path }) {
  return (
    <div className={classes["card"]}>
      <div className={classes["card-details"]}>
        <h3 className={classes["card-heading"]}>{heading}</h3>
        <p className={classes["card-text"]}>
          {text}(
          <a href={href} alt="github" target="_blank" rel="noopener noreferrer">
            CODE
          </a>
          )
        </p>
      </div>
      <div className={classes["card-img-container"]}>
        <Carousel path={path} src={src} heading={heading} />
      </div>
    </div>
  );
}
