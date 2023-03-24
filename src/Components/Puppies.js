import React from "react";
import "./Updates.css";

import PuppyPictureOne from "../Images/IMG_9445.jpg";
import UpdateCard from "./UpdateCard";
import PuppyOne from "../Images/puppyCloseup.jpg";
import PuppyTwo from "../Images/pile1.jpg";
import PuppyThree from "../Images/pile2.jpg";

export default function Puppies(props) {
  let text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enunc nisi. Donec cursus dui eu odio iaculis blandit ac blandit sem. Inconsequat dolor non ultrices sagittis.";
  return (
    <div className="updates-container" id="puppies">
      <h2 className="updates-title">Puppies</h2>
      <div className="updateCards-container">
        <UpdateCard image={PuppyOne} text={text} />
        <UpdateCard image={PuppyTwo} text={text} />
        <UpdateCard image={PuppyThree} text={text} />
        <UpdateCard image={PuppyOne} text={text} />
        <UpdateCard image={PuppyTwo} text={text} />
        <UpdateCard image={PuppyThree} text={text} />
      </div>
    </div>
  );
}
