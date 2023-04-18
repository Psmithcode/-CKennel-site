import React from "react";
import "../styles/Reviews.css";
import AddReview from "./AddReview";
import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/reviews")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="reviews-container" id="reviews">
      <div className="review-card-container">
        {data.slice(0, 3).map((review, index) => {
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
    </div>
  );
}
