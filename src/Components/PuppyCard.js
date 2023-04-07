import React from "react";
import "./UpdateCard.css";
import { Image } from "cloudinary-react";

export default function PupppyCard(props) {
  return (
    <div className="updateCard-container">
      <div className="updateCard-post-container">
        <div className="updateCard-image-container">
          {/* <img src={props.image} className="updateCard-image" alt="updates" /> */}
          <Image
            cloudName={"didcw4ntc"}
            publicId={props.imageName}
          />
        </div>
        <a className="updateCard-date-link">
          <p className="updateCard-link-text">{props.date}</p>
        </a>
        <p>{props.name}</p>
        <ul>
          <li className="updateCard-body-text roboto">{props.text1}</li>
          <li className="updateCard-body-text roboto">{props.text2}</li>
          <li className="updateCard-body-text roboto">{props.text3}</li>
          <li className="updateCard-body-text roboto">{props.text4}</li>
        </ul>
      </div>
    </div>
  );
}
