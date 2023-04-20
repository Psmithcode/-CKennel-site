import React from "react";
import "../styles/UpdateCard.css";
import { Link } from "react-router-dom";

export default function UpdateCard(props) {
  return (
    <div className="updateCard-container">
      <div className="updateCard-post-container">
        <h1 className="updateCard-title">{props.title}</h1>

        <p className="updateCard-date">{`Posted on: ${props.date}`}</p>

        <p className="updateCard-body-text roboto">{props.par1}</p>
        <Link className="updateCard-link" to={`/updates/${props.id}`}>Read more</Link>
      </div>
    </div>
  );
}
