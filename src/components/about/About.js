import React from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <div className={classes.about}>
      <h3 className={classes["about--heading"]}>About Me</h3>
      <div className={classes["about--text"]}>
        My main experience is in front-end developement but I also have passion
        for design. I develop websites with HTML, CSS, Sass, JavaScript,
        Typescript, React, Redux, Firebase. Currently, I am learning back-end
        technologies, more specifically Node.js and Express to create a full
        stack websites. I love to code from scratch and enjoy bringing ideas to
        life. I have serious passion for UI effects, animations and creating
        dynamic user experiences. I'm a learner with strong time management and
        communication skills.
      </div>
      <div className={classes["skill"]}>
        <h3>Skills</h3>
        <div className={classes["skills-container"]}>
          <div>
            <p>JavaScript</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.javascript}`}>
                85%
              </div>
            </div>
          </div>
          <div>
            <p>Typescript</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.typescript}`}>
                75%
              </div>
            </div>
          </div>
          <div>
            <p>React</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.react}`}>85%</div>
            </div>
          </div>
          <div>
            <p>Redux</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.redux}`}>70%</div>
            </div>
          </div>
          <div>
            <p>HTML</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.html}`}>100%</div>
            </div>
          </div>
          <div>
            <p>CSS</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.css}`}>90%</div>
            </div>
          </div>
          <div>
            <p>NodeJS</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.nodejs}`}>50%</div>
            </div>
          </div>
          <div>
            <p>Express</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.express}`}>50%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
