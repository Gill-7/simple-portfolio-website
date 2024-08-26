import React from "react";
import classes from "../../card/projectCard/ProjectCard.module.css";
import ProjectCard from "../../card/projectCard/ProjectCard";

const images = {
  apod: ["images/apod1.jpg", "images/apod2.jpg"],
  weather: [
    "images/weather1.jpg",
    "images/weather2.jpg",
    "images/weather3.jpg",
  ],
  faceDetection: [
    "images/faceFinder1.jpg",
    "images/faceFinder2.jpg",
    "images/faceFinder3.jpg",
  ],
};

export default function FinishedProjects() {
  return (
    <div className={classes.cards}>
      <h2 className={classes["cards-heading"]}>
        P<span>ersonal Projects</span>
      </h2>
      <div className={classes["cards-container"]}>
        <ProjectCard
          src={images.faceDetection}
          heading="FaceFinder"
          text="FaceFinder is an advanced face detection app powered by AI, designed to precisely identify faces in images. It incorporates secure JWT-based authentication to safeguard user data and sessions. Additionally, users can personalize their experience by updating their profiles, ensuring both security and ease of use."
          href="https://github.com/Gill-7/smart-brain-frontend"
          path="https://face-detection-7ziu.onrender.com/"
        />
        <ProjectCard
          src={images.weather}
          heading="Ever Weather"
          text="Ever Weather is a modern web application designed to provide users with real-time weather information and an interactive map experience. The integration of the Google Maps API allows users to easily search for and explore weather conditions on a dynamic, interactive map."
          href="https://github.com/Gill-7/weather-application"
          path="https://everweather.netlify.app/"
        />
        <ProjectCard
          src={images.apod}
          heading="Astronomy Picture Of The Day"
          text="APOD leverages NASA's Astronomy Picture of the Day API to display daily space images along with detailed information. Users can search for APOD images by date and browse the archive of previous images, offering an engaging way to explore the wonders of the universe."
          href="https://github.com/Gill-7/APOD"
          path="https://gill-7.github.io/APOD/"
        />
      </div>
    </div>
  );
}
