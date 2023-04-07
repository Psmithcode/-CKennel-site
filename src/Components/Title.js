import "../reset.css";
import "./Title.css";
import React from "react";
import { Button } from "@mui/material";
import dogPicture from "../Images/lab-wid.jpg";

export default function Title() {
  return (
    <div className="title-container" id='title'>
      <h1 className="title-text">Bar-C Kennels</h1>
      <p className="title-subtext">
        Purebred AKC Registered Labrador Retrievers based in Haskell, Texas.
      </p>
      <Button
        size="large"
        variant="contained"
        color="primary"
        className="title-contact-button"
        sx={{
          marginTop: '30px',
          marginBottom: "60px",
          borderRadius: "0px",
        }}
      >
        CONTACT US
      </Button>
      <div className="image-container flex-row-center">
        <img id="dog-picture" src={dogPicture} alt="Lab" />
      </div>
    </div>
  );
}
