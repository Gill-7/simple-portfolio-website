import React from "react";
import classes from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className={classes.cards}>
      <h2 className={classes["projects-heading"]}>Personal Projects</h2>

      <div className={classes["cards-container"]}>
        <ul className={classes["cards-items"]}>
          <ProjectCard />
        </ul>
      </div>
    </div>
  );
}
