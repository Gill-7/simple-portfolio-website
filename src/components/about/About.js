import React from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <div className={classes.about}>
      <h2 className={classes["about--heading"]}>
        A<span>bout Me</span>
      </h2>
      <div className={classes["about--text"]}>
        Dedicated and self-motivated self-taught full-stack developer with a
        passion for creating innovative and user-centric web applications. I am
        passionate about creating exceptional user experiences, optimizing web
        functionality, and continually expanding my knowledge in front-end and
        back-end technologies.My objective is to collaborate with dynamic teams,
        tackle complex challenges, and drive the success of web applications
        through my diverse technical expertise and self-driven commitment to
        excellence.
      </div>
      <div className={classes["skill"]}>
        <h2 className={classes["skills--heading"]}>
          S<span>kills</span>
        </h2>
        <section className={classes["design-section"]}>
          <div className={classes["timeline"]}>
            <div className={classes["timeline-empty"]}></div>

            <div className={classes["timeline-middle"]}>
              <div className={classes["timeline-circle"]}></div>
            </div>
            <div
              className={`${classes["timeline-component"]} ${classes["timeline-content"]}`}
            >
              <h3>Python (learning)</h3>
            </div>
            <div
              className={`${classes["timeline-component"]} ${classes["timeline-content"]}`}
            >
              <h3>PostgreSQL</h3>
            </div>
            <div className={classes["timeline-middle"]}>
              <div className={classes["timeline-circle"]}></div>
            </div>
            <div className={classes["timeline-empty"]}></div>

            <div className={classes["timeline-empty"]}></div>

            <div className={classes["timeline-middle"]}>
              <div className={classes["timeline-circle"]}></div>
            </div>
            <div
              className={`${classes["timeline-component"]} ${classes["timeline-content"]}`}
            >
              <h3>Express</h3>
            </div>

            <div
              className={`${classes["timeline-component"]} ${classes["timeline-content"]}`}
            >
              <h3>Nodejs</h3>
            </div>

            <div className={classes["timeline-middle"]}>
              <div className={classes["timeline-circle"]}></div>
            </div>

            <div className={classes["timeline-empty"]}></div>
            <div className={classes["timeline-empty"]}></div>
            <div className={classes["timeline-middle"]}>
              <div className={classes["timeline-circle"]}></div>
            </div>

            <div
              className={`${classes["timeline-component"]} ${classes["timeline-content"]}`}
            >
              <h3>Typescript</h3>
            </div>
            <div
              className={`${classes["timeline-component"]} ${classes["timeline-content"]}`}
            >
              <h3>React</h3>
            </div>
            <div className={classes["timeline-middle"]}>
              <div className={classes["timeline-circle"]}></div>
            </div>
            <div className={classes["timeline-empty"]}></div>

            <div className={classes["timeline-empty"]}></div>
            <div className={classes["timeline-middle"]}>
              <div className={classes["timeline-circle"]}></div>
            </div>
            <div
              className={`${classes["timeline-component"]} ${classes["timeline-content"]}`}
            >
              <h3>Javascript</h3>
            </div>
            <div
              className={`${classes["timeline-component"]} ${classes["timeline-content"]}`}
            >
              <h3>CSS</h3>
            </div>
            <div className={classes["timeline-middle"]}>
              <div className={classes["timeline-circle"]}></div>
            </div>
            <div className={classes["timeline-empty"]}></div>

            <div className={classes["timeline-empty"]}></div>
            <div className={classes["timeline-middle"]}>
              <div className={classes["timeline-circle"]}></div>
            </div>
            <div
              className={`${classes["timeline-component"]} ${classes["timeline-content"]}`}
            >
              <h3>Html</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
