import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { fill } from "@cloudinary/url-gen/actions/resize";
import "../styles/puppyDetails.css";

export default function PuppyDetails(props) {
  const { id } = useParams();
  const { puppies, fetchPuppies } = props;
  const Puppie = puppies.find((puppie) => puppie.id == id);
  console.log(puppies);
  console.log(Puppie);
  useEffect(() => {
    if (puppies.length === 0) {
      fetchPuppies();
    }
  }, []);

  if (!puppies.length) {
    return <p>Loading</p>;
  }

  const cloud = new Cloudinary({
    cloud: {
      cloudName: "didcw4ntc",
    },
  });
  const image = cloud.image(Puppie.image);
  image.resize(fill().height(300).gravity(autoGravity()));
  return (
    <div className="puppyDetails-page-container">
      <section className="puppyDetails-container">
        <div className="puppyDetails-image-container">
          <AdvancedImage className="puppyDetails-image" cldImg={image} />
        </div>
        <div className="puppy-info-container">
          <p className="puppyDetails-name">{Puppie.name}</p>
          <p className="puppyDetails-text">{`Whelped:  ${Puppie.whelped_date}`}</p>
          <p className="puppyDetails-text">{`Ready:    ${Puppie.ready_date}`}</p>
          <p className="puppyDetails-text">{`Dam: ${Puppie.dam}`}</p>
          <p className="puppyDetails-text">{`Sire: ${Puppie.sire}`}</p>
          {Puppie.vaccinated === "yes" && (
            <p className="puppyDetails-text">Current Vaccines/Worming</p>
          )}
          <p className="puppyDetails-text">Haskell, TX</p>
          <p className="puppyDetails-text">{`Pet price: ${Puppie.price}`}</p>
        </div>
      </section>
    </div>
  );
}
