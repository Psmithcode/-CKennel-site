import React from "react";
import "./UpdateCard.css";

export default function UpdateCard(props) {
  return (
    <div className="updateCard-container">
      <div className="updateCard-post-container">
        <div className="updateCard-image-container">
          <img
            src={props.image}
            className="updateCard-image"
            alt="puppies"
          />
        </div>
        <a className="updateCard-date-link">
          <p className="updateCard-link-text">Posted on March 23, 2023</p>
        </a>
        <p className="updateCard-body-text roboto">{props.text}</p>
      </div>
    </div>
  );
}
