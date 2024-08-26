import React from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <div className={classes.about}>
      <h2 className={classes["about--heading"]}>
        A<span>bout Me</span>
      </h2>
      <div className={classes["about--text"]}>
        Full-stack developer with experience in creating and maintaining web
        applications. Passionate about coding, problem-solving, and learning new
        things. Always looking to improve skills and stay updated with the
        latest trends. Dedicated to growing, innovating, and working on
        meaningful projects.
      </div>
      <div className={classes["skill"]}>
        <h2 className={classes["skills--heading"]}>
          S<span>kills</span>
        </h2>
        <section className={classes["section"]}>
          <div className={classes.front}>
            <h3 className={classes["main-heading"]}>Front-End Development</h3>
            <div>
              <ul>
                <h4 className={classes.heading}>Languages & Frameworks</h4>
                <ul className={classes.list}>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Next.JS</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5, CSS3</li>
                </ul>
              </ul>
              <ul>
                <h4 className={classes.heading}>Tools & Libraries</h4>
                <ul className={classes.list}>
                  <li>NPM/Yarn, Axios</li>
                  <li>Webpack, Babel</li>
                  <li>CSS Flexbox, Grid</li>
                </ul>
              </ul>
            </div>
          </div>
          <div className={classes.back}>
            <h3 className={classes["main-heading"]}>Back-End Development</h3>
            <div>
              <ul>
                <h4 className={classes.heading}>Languages & Frameworks</h4>
                <ul className={classes.list}>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </ul>
              <ul>
                <h4 className={classes.heading}>Databases</h4>
                <ul className={classes.list}>
                  <li>SQL (PostgreSQL, MySQL)</li>
                  <li>Redis, MongoDB</li>
                </ul>
              </ul>
              <ul>
                <h4 className={classes.heading}>API & Web Services</h4>
                <ul className={classes.list}>
                  <li>RESTful APIs, GraphQL</li>
                  <li>Auth (JWT, OAuth)</li>
                </ul>
              </ul>
            </div>
          </div>
          <div className={classes.deploy}>
            <h3 className={classes["main-heading"]}>
              Deployment & Maintenance
            </h3>
            <div>
              <ul>
                <h4 className={classes.heading}>Version Control</h4>
                <ul className={classes.list}>
                  <li>Git, Github</li>
                </ul>
              </ul>
              <ul>
                <h4 className={classes.heading}>Cloud & Hosting</h4>
                <ul className={classes.list}>
                  <li>AWS, Docker</li>
                  <li>Vercel, Heroku</li>
                </ul>
              </ul>
              <ul>
                <h4 className={classes.heading}>CI/CD</h4>
                <ul className={classes.list}>
                  <li>GitHub Actions</li>
                  <li>Travis CI</li>
                </ul>
              </ul>
            </div>
          </div>
        </section>
        {/* <section className={classes["design-section"]}>
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
        </section> */}
      </div>
    </div>
  );
}
