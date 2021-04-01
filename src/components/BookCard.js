import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function BookCard({ image, title, author, url }) {
  return (
    <div className="CardWrapper">
      <div className="ColImg">
        <img className="Img" src={image} alt={title} />
      </div>
      <div className="ColDetail">
        <div className="Header">
          <div className="BookTitle">{title}</div>
        </div>
        <div className="Description">{author}</div>
        <Link
          to={{ pathname: "/book", search: `?show=${url}` }}
          className="Link"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}
