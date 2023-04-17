import "../reset.css";
import "../styles/Title.css";
import React from "react";
import { Button } from "@mui/material";
// import dogPicture from "../Images/lab-wid.jpg";
import dogPicture from "../Images/image0.jpeg";
// import { Link } from "react-router-dom";

export default function Title(props) {
  function handleClick() {
    const targetElement = document.getElementById("#contact");
    window.scrollTo({
      top: targetElement,
      behavior: "smooth",
    });
  }
  const { theme } = props;
  return (
    <div className="title-container" id="title">
      <div className="title-text-container">
        <h1 className="title-text" style={{ color: "rgb(121, 99, 78)" }}>
          Bar-C Kennels
        </h1>
        <p className="title-subtext">
          Purebred AKC Registered Labrador Retrievers based in Haskell, Texas.
        </p>
      </div>
      {/* <Link href="#contact"> */}

      <Button
        onClick={handleClick}
        size="large"
        variant="contained"
        color="primary"
        className="title-contact-button"
        sx={{
          marginTop: "30px",
          marginBottom: "60px",
          borderRadius: "0px",
        }}
      >
        Contact us
      </Button>
      {/* </Link> */}
      <div className="image-container flex-row-center">
        <img id="dog-picture" src={dogPicture} alt="Lab" />
      </div>
    </div>
  );
}
