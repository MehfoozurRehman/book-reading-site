import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function BookCard({
  image,
  title,
  author,
  url,
  bookContentText,
  bookContentAudio,
  name,
}) {
  return (
    <div>
      <div className="ColImg">
        <img className="Img" src={image} alt={title} />
      </div>
      <div className="ColDetail">
        <div className="Header">
          <div className="BookTitle">{title}</div>
        </div>
        <div className="Description">{author}</div>
        <p className="content">{bookContentText}</p>
        <AudioPlayer
          src={bookContentAudio}
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
        <a className="Link" href={url}>
          Learn more
        </a>
      </div>
    </div>
  );
}
