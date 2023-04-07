import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Updates.css";

// import PuppyPictureOne from "../Images/IMG_9445.jpg";
// import UpdateCard from "./UpdateCard";
import PuppyOne from "../Images/puppyCloseup.jpg";
// import PuppyTwo from "../Images/pile1.jpg";
// import PuppyThree from "../Images/pile2.jpg";
import PuppyCard from "./PuppyCard";

export default function Puppies(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/puppies")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  // let text =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enunc nisi. Donec cursus dui eu odio iaculis blandit ac blandit sem. Inconsequat dolor non ultrices sagittis.";
  return (
    <div className="updates-container" id="puppies">
      <h2 className="updates-title">Puppies</h2>
      <div className="updateCards-container">
        {data.map((puppy, index) => {
          return (
            <PuppyCard
              imageName={puppy.image}
              name={puppy.name}
              date={puppy.date_added}
              text1={puppy.text1}
              text2={puppy.text2}
              text3={puppy.text3}
              text4={puppy.text4}
            />
          );
        })}
        {/* <PuppyCard image={PuppyOne} text={text} />
        <PuppyCard image={PuppyTwo} text={text} />
        <PuppyCard image={PuppyThree} text={text} />
        <PuppyCard image={PuppyOne} text={text} />
        <PuppyCard image={PuppyTwo} text={text} />
        <PuppyCard image={PuppyThree} text={text} /> */}
      </div>
    </div>
  );
}
