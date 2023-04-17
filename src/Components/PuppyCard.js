import React from "react";
import "../styles/PuppyCard.css";
// import { Transformation } from "cloudinary-react";
import { AdvancedImage } from "@cloudinary/react";

// Import required actions.
import { fill } from "@cloudinary/url-gen/actions/resize";

// Import required qualifiers.
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

import paw from "../paw.jpg";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "react-router-dom";

export default function PupppyCard(props) {
  const cloud = new Cloudinary({
    cloud: {
      cloudName: "didcw4ntc",
    },
  });

  const image = cloud.image(props.imageName);
  // image.resize(scale().width(290))
  image.resize(fill().width(290).height(240).gravity(autoGravity()));

  return (
    <Link to={`/puppies/${props.id}`}>
      <div className="puppyCard-container">
        <section className="puppyCard-top-container">
          <div className="puppyCard-image-container">
            <AdvancedImage className="puppyCard-image" cldImg={image} />
          </div>
          <div className="puppyCard-paws-container">
            <div className="puppyCard-paw-container size2">
              <img
                alt="paw"
                src={paw}
                className="paw-image"
                style={{ rotate: "20deg" }}
              />
            </div>
          </div>
        </section>
        <section className="puppyCard-middle-container">
          <p className="puppyCard-title">{`Hi, my name is ${props.name}!`}</p>
        </section>

        <section className="puppyCard-bottom-container">
          <div className="puppyCard-paw-container size2">
            <img
              src={paw}
              alt="paw"
              className="paw-image"
              style={{ rotate: "-20deg" }}
            />
          </div>
          <ul className="puppyCard-list">
            <li className="puppyCard-list-text roboto">{`Whelped:  ${props.whelpedDate}`}</li>
            <li className="puppyCard-list-text roboto">{`Ready:    ${props.readyDate}`}</li>
            <li className="puppyCard-list-text roboto">{`Dam: ${props.dam}`}</li>
            <li className="puppyCard-list-text roboto">{`Sire: ${props.sire}`}</li>
            <li className="puppyCard-list-text roboto">Registration - AKC</li>
            {props.vaccinated === "yes" && (
              <li className="puppyCard-list-text roboto">
                Current Vaccines/Worming
              </li>
            )}
            <li className="puppyCard-list-text roboto">Haskell, TX</li>
            <li className="puppyCard-list-text roboto">{`Pet price: ${props.price}`}</li>
          </ul>
        </section>
      </div>
    </Link>
  );
}
