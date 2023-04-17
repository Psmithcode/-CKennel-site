import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import "../styles/updateDetails.css"

export default function UpdateDetails(props) {
  const { id } = useParams();
  const { updates, fetchUpdates } = props;
  const Update = updates.find((update) => update.id == id);
  console.log(updates);
  console.log(Update);
  useEffect(() => {
    if (updates.length === 0) {
      fetchUpdates();
    }
  }, []);

  if (!updates.length) {
    return <p>Loading</p>;
  }

  return (
    <div className="updateDetails-page-container">
    <article className="updateDetails-container">
      <h1 className="updateDetails-title">{Update.title}</h1>
      <p className="updateDetails-paragraph">{Update.paragraph1}</p>
      <p className="updateDetails-paragraph">{Update.paragraph2}</p>
      <h3 className="updateDetails-date">{Update.date_added}</h3>
    </article>
    </div>
  );
}
