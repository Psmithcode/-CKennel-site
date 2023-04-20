import React, { useEffect, useState } from "react";
import "../styles/Gallery.css";
import axios from "axios";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { Buffer } from "buffer";

const cloudName = "didcw4ntc";

export default async function Gallery() {


  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.REACT_APP_CLOUD_API_KEY + ":" + process.env.REACT_APP_CLOUD_API_SECRET
        ).toString("base64")}`,
      },
    }
  )
    .then((r) => r.json())
    .then(console.log(results));

  return (
    <div className="main">
      <h1>Galleria</h1>
      <div className="gallery">
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
