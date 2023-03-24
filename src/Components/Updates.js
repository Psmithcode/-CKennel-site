import React from "react";
import "./Updates.css";

import PuppyPictureOne from "../Images/IMG_9445.jpg";
import UpdateCard from "./UpdateCard";
let updateText =
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enunc nisi. Donec cursus dui eu odio iaculis blandit ac blandit sem. Inconsequat dolor non ultrices sagittis.";

export default function Updates(props) {
  return (
    <div className="updates-container" id="updates">
      <h2 className="updates-title">Updates</h2>
      <div className="updateCards-container">
        <UpdateCard image={PuppyPictureOne} text={updateText} />
        <UpdateCard image={PuppyPictureOne} text={updateText} />
        <UpdateCard image={PuppyPictureOne} text={updateText} />
      </div>
    </div>
  );
}
