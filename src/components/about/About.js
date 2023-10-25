import React from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <div className={classes.about}>
      <h3 className={classes["about--heading"]}>About Me</h3>
      <div className={classes["about--text"]}>
        Dedicated and self-motivated self-taught full-stack developer with a
        passion for creating innovative and user-centric web applications. I am
        passionate about creating exceptional user experiences, optimizing web
        functionality, amnd continually expanding my knowledge in front-end and
        back-end technologies.My objective is to collaborate with dynamic teams,
        tackle complex challenges, and drive the success of web applications
        through my diverse technical expertise and self-driven commitment to
        excellence.
      </div>
      <div className={classes["skill"]}>
        <h3>Skills</h3>
        <div className={classes["skills-container"]}>
          <div>
            <p>JavaScript</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.javascript}`}>
                90%
              </div>
            </div>
          </div>
          <div>
            <p>React</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.react}`}>90%</div>
            </div>
          </div>
          <div>
            <p>NodeJS</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.nodejs}`}>90%</div>
            </div>
          </div>
          <div>
            <p>Express</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.express}`}>90%</div>
            </div>
          </div>
          <div>
            <p>PostgreSQL</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.psql}`}>80%</div>
            </div>
          </div>
          <div>
            <p>SQL</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.sql}`}>80%</div>
            </div>
          </div>
          <div>
            <p>Typescript</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.typescript}`}>
                70%
              </div>
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
              <div className={`${classes.skills} ${classes.html}`}>90%</div>
            </div>
          </div>
          <div>
            <p>CSS</p>
            <div className={classes["skills-section"]}>
              <div className={`${classes.skills} ${classes.css}`}>90%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
