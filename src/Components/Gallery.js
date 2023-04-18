import React, { useEffect, useState } from "react";
import "../styles/Gallery.css";
import axios from "axios";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

const cloudName = "didcw4ntc";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://res.cloudinary.com/didcw4ntc/image", {
      type: "list",
      sign_url: true,
    }).then((res) => {
      console.log(res, "helloooooooooooooooooooooooooo");
    });
    // .then((res) => {
    //   console.log("resources:", res.data.resources);
    //   setImages(res.data.resources);
    // });
  }, []);

  return (
    <div className="main">
      <h1>Galleria</h1>
      <div className="gallery">
        <CloudinaryContext cloudName={cloudName}>
          {images.map((data) => {
            return (
              <div className="responsive" key={data.public_id}>
                <div className="img">
                  <a
                    href={`https://res.cloudinary.com/didcw4ntc/image/upload/${data.public_id}.jpg`}
                  >
                    <Image publicId={data.public_id}>
                      <Transformation
                        crop="scale"
                        width="300"
                        height="200"
                        dpr="auto"
                        responsive_placeholder="blank"
                      />
                    </Image>
                  </a>
                  {/* <div className="desc">Created at {data.created_at}</div> */}
                </div>
              </div>
            );
          })}
        </CloudinaryContext>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
