import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function BookCard({ image, title, author, url, date, intro }) {
  return (
    <Link
      to={{ pathname: "/book", search: `?show=${url}` }}
      className="CardWrapper"
    >
      <div className="ColImg">
        <img className="Img" src={image} alt={title} />
      </div>
      <div className="ColDetail">
        <div className="BookTitle">{title}</div>
        <div className="Description">{author}</div>
        <div className="Date">Published on {date}</div>
        <div className="Intro">{intro}</div>
      </div>
    </Link>
  );
}
