import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={classes["nav-heading"]}>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? `${classes.active} ${classes["nav-link"]}`
            : `${classes["nav-link"]}`
        }
      >
        About me
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive
            ? `${classes.active} ${classes["nav-link"]}`
            : `${classes["nav-link"]}`
        }
      >
        Finished Projects
      </NavLink>
      <NavLink
        to="/dev-projects"
        className={({ isActive }) =>
          isActive
            ? `${classes.active} ${classes["nav-link"]}`
            : `${classes["nav-link"]}`
        }
      >
        Current Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? `${classes.active} ${classes["nav-link"]}`
            : `${classes["nav-link"]}`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
