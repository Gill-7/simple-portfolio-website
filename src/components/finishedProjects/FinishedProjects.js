import React from "react";
import classes from "../../card/projectCard/ProjectCard.module.css";
import ProjectCard from "../../card/projectCard/ProjectCard";

const images = {
  apod: ["images/apod1.png", "images/apod2.png"],
  weather: ["images/weather1.png", "images/weather1a.png"],
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
          text="This app displays real-time data, including temperature, humidity, wind speed and weather conditions, and allows users to check current weather conditions for a specific location."
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
