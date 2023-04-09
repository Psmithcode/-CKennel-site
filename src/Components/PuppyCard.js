import React from "react";
import "./PuppyCard.css";
import { Image } from "cloudinary-react";
import { Transformation } from "cloudinary-react";

export default function PupppyCard(props) {
  return (
    <div className="puppyCard-container">
      <div className="puppyCard-post-container">
        <div className="puppyCard-image-container">
          {/* <img src={props.image} className="puppyCard-image" alt="puppys" /> */}
          <Image cloudName={"didcw4ntc"} publicId={props.imageName}>
            <Transformation crop="scale" width="333" height="260" />
          </Image>
        </div>
        <p className="puppyCard-title">{props.name}</p>
        <ul className="puppyCard-list">
          <li className="puppyCard-list-text roboto">{props.text1}</li>
          <li className="puppyCard-list-text roboto">{props.text2}</li>
          <li className="puppyCard-list-text roboto">{props.text3}</li>
          <li className="puppyCard-list-text roboto">{props.text4}</li>
        </ul>
        <a className="puppyCard-date-link">
          <p className="puppyCard-link-text">{`Posted on: ${props.date}`}</p>
        </a>
      </div>
    </div>
  );
}
