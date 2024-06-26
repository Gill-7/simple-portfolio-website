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
