import React from "react";
import classes from "../../card/projectCard/ProjectCard.module.css";
import ProjectCard from "../../card/projectCard/ProjectCard";

const images = {
  apod: ["images/apod1.png", "images/apod2.png"],
  weather: ["images/weather1a.png", "images/weather1.png"],
  faceDetection: ["images/facedetect1.png", "images/facedetect2.png"],
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
          heading="Face Detection"
          text="This app utilizes machine learning and algorithms to detect and outline faces with in uploaded images. Users can create accounts or log in to access the face detection service securely. Application also offers a feature to count the total images submitted and store the data in the database."
          href="https://github.com/Gill-7/smart-brain-frontend"
          path="https://face-detection-7ziu.onrender.com/"
        />
        <ProjectCard
          src={images.weather}
          heading="Ever Weather"
          text="Ever Weather is a modern web application designed to provide users with real-time weather information and an interactive map experience. Developed using Javascript, HTML, CSS and powered by the Express framework, the app seemlessly integrates the OpenWeather API for accurate weather data and the Google Maps API for a dynamic, interactive map. "
          href="https://github.com/Gill-7/weather-application"
          path="https://everweather.netlify.app/"
        />
        <ProjectCard
          src={images.apod}
          heading="Astronomy Picture Of The Day"
          text="APOD implement NASA's Astronomy Picture of the Day API. APOD displays NASA's daily APOD images along with detailed information about each picture. This app lets users to search for APOD images by specifying a date and to browse the archive previous APOD images."
          href="https://github.com/Gill-7/APOD"
          path="https://gill-7.github.io/APOD/"
        />
      </div>
    </div>
  );
}
