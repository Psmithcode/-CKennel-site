import React from "react";
import { Rating } from "@mui/material";
import "../styles/ReviewCard.css";

export default function ReviewCard(props) {
  const { name, rating, message, date, title } = props;

  return (
    <div className="reviewCard-container">
      <h1 className="reviewCard-title">{`"${title}"`}</h1>
      <h3 className="reviewCard-name italic">{`-${name}`}</h3>
      <Rating name="read-only" className="reviewCard-rating" value={rating} readOnly />
      <main className="reviewCard-body">{message}</main>
      <h6 className="reviewCard-date">{date}</h6>
    </div>
  );
}
