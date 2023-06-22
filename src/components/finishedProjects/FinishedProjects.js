import React from "react";
import classes from "../../card/projectCard/ProjectCard.module.css";
import ProjectCard from "../../card/projectCard/ProjectCard";

const images = {
  jammming: [
    "images/jammming1.png",
    "images/jammming2.png",
    "images/jammming3.png",
  ],
  weather: [
    "images/weather1.png",
    "images/weather1a.png",
    "images/weather2.png",
  ],
};

export default function FinishedProjects() {
  return (
    <div className={classes.cards}>
      <h2 className={classes["cards-heading"]}>Personal Projects</h2>
      <div className={classes["cards-container"]}>
        <ProjectCard
          src={images.weather}
          heading="Ever Weather"
          text="This project helps user to save custom playlist to their Spotify account by clicking a
            button. Implemented search for a song, album or artist from Spotify library and displays the
            list of returned tracks. Added new tracks to the playlist or remove a track from the playlist."
          href="https://github.com/Gill-7/weather-application"
          path="https://everweather.netlify.app/"
        />
        <ProjectCard
          src={images.jammming}
          heading="Jammming Spotify Playlist"
          text="This project helps user to save custom playlist to their Spotify account by clicking a
            button. Implemented search for a song, album or artist from Spotify library and displays the
            list of returned tracks. Added new tracks to the playlist or remove a track from the playlist."
          href="https://github.com/Gill-7/Jammming-Spotify-Playlist"
          path="http://jammmingplaylist.surge.sh/"
        />
      </div>
    </div>
  );
}
