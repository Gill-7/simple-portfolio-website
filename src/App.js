import classes from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import FinishedProjects from "./components/finishedProjects/FinishedProjects";
import DevProjects from "./components/devProjects/DevProjects";
import Contact from "./components/contact/Contact";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <div className={classes["space"]}> */}
      <div className={classes["solar-system"]}>
        <div className={classes["sun"]}></div>
        <div className={`${classes["orbit"]} ${classes["orbit-mercury"]}`}>
          <div className={`${classes["planet"]} ${classes["mercury"]}`}></div>
          <div className={classes["planet-name"]}></div>
        </div>
        <div className={`${classes["orbit"]} ${classes["orbit-venus"]}`}>
          <div className={`${classes["planet"]} ${classes["venus"]}`}></div>
        </div>
        <div className={`${classes["orbit"]} ${classes["orbit-earth"]}`}>
          <div className={`${classes["planet"]} ${classes["earth"]}`}></div>
        </div>
        <div className={`${classes["orbit"]} ${classes["orbit-mars"]}`}>
          <div className={`${classes["planet"]} ${classes["mars"]}`}></div>
        </div>
        <div className={`${classes["orbit"]} ${classes["orbit-jupiter"]}`}>
          <div className={`${classes["planet"]} ${classes["jupiter"]}`}></div>
        </div>
        <div className={`${classes["orbit"]} ${classes["orbit-saturn"]}`}>
          <div className={`${classes["planet"]} ${classes["saturn"]}`}></div>
        </div>
        <div className={`${classes["orbit"]} ${classes["orbit-uranus"]}`}>
          <div className={`${classes["planet"]} ${classes["uranus"]}`}></div>
        </div>
        <div className={`${classes["orbit"]} ${classes["orbit-neptune"]}`}>
          <div className={`${classes["planet"]} ${classes["neptune"]}`}></div>
        </div>
      </div>
      {/* </div> */}
      <div className={classes.container}>
        <div className={classes["name-heading"]}>
          <h1>
            G<span>illpreet </span>S<span>ingh</span>
          </h1>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<FinishedProjects />} />
            <Route path="/dev-projects" element={<DevProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
