import React from "react";
import "../styles/Reviews.css";
import AddReview from "./AddReview";
import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Fade from "react-reveal";

export default function Reviews() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://barclabs.vercel.app/reviews")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="reviews-container" id="reviews">
      <h1 className="reviews-title">Reviews</h1>
      <Fade left duration={700}>
        <div className="review-card-container">
          {data.map((review, index) => {
            return (
              <ReviewCard
                key={index}
                name={review.name}
                rating={review.rating}
                message={review.message}
                date={review.date_posted}
                title={review.title}
              />
            );
          })}
        </div>
        <AddReview />
      </Fade>
    </div>
  );
}
