import React from "react";
import classes from "../../card/projectCard/ProjectCard.module.css";
import ProjectCard from "../../card/projectCard/ProjectCard";

export default function FinishedProjects() {
  return (
    <div className={classes.cards}>
      <h3 className={classes["cards-heading"]}>Current ly in development</h3>
      <div className={classes["cards-container"]}>
        This page is in development
        {/* <ProjectCard
          // src={images.jammming}
          heading="Jammming Spotify Playlist"
          text="This project helps user to save custom playlist to their Spotify account by clicking a
            button. Implemented search for a song, album or artist from Spotify library and displays the
            list of returned tracks. Added new tracks to the playlist or remove a track from the playlist."
          href="https://github.com/Gill-7/Jammming-Spotify-Playlist"
          path="http://jammmingplaylist.surge.sh/"
        /> */}
      </div>
    </div>
  );
}
