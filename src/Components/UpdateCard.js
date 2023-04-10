import React from "react";
import "./UpdateCard.css";
import { Link } from "@mui/material";

export default function UpdateCard(props) {
  return (
    <div className="updateCard-container">
      <div className="updateCard-post-container">
        <h1>{props.title}</h1>

        <a className="updateCard-date-link">
          <p className="updateCard-link-text">{`Posted on: ${props.date}`}</p>
        </a>
        <p className="updateCard-body-text roboto">{props.par1}</p>
        <Link to={`/update/${props.id}`}>
          <p>Read more</p>
        </Link>
        {/* <p className="updateCard-body-text roboto">{props.par2}</p> */}
      </div>
    </div>
  );
}
