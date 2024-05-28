import React from "react";
import classes from "../../card/projectCard/ProjectCard.module.css";

export default function DevProjects() {
  return (
    <div className={classes.cards}>
      <h3 className={classes["cards-heading"]}>
        C<span Projects>urrent Projects</span>
      </h3>
      <div className={classes["cards-container"]}>
        Readers (Working Project title)
        <ol>
          <li>Easy to search and browse through books</li>
          <li>Manage your online personal library</li>
          <li>
            Keep track books you've read, books you're reading, and books you
            want to read
          </li>
          <li>
            Record your progress by adding the start and finish data of your
            books
          </li>
        </ol>
      </div>
    </div>
  );
}
