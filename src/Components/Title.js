import "../reset.css";
import "../styles/Title.css";
import React from "react";
import { Button } from "@mui/material";
// import dogPicture from "../Images/lab-wid.jpg";
import dogPicture from "../Images/image0.jpeg";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

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
        <h1 className="title-text" style={{ color: "var(--darkest)" }}>
          Bar-C Kennels
        </h1>
        <p className="title-subtext">
          Purebred AKC Registered Labrador Retrievers based in Haskell, Texas.
        </p>
      </div>
      <Link to="/contact">
        <Button
          onClick={handleClick}
          size="large"
          variant="contained"
          className="title-contact-button"
          sx={{
            marginTop: "30px",
            marginBottom: "40px",
            borderRadius: "0px",
            backgroundColor: "var(--darkest)",
          }}
        >
          Contact us
        </Button>
      </Link>
      <Fade up>
        <div className="image-container flex-row-center">
          <img id="dog-picture" src={dogPicture} alt="Lab" />
        </div>
      </Fade>
    </div>
  );
}
