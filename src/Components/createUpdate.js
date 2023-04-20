import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import "../styles/createUpdate.css";

export default function CreateUpdate(props) {
  const [title, setTitle] = useState("");
  const [par1, setPar1] = useState("");
  const [par2, setPar2] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let updateData = {
      title,
      par1,
      par2,
    };

    try {
      await axios.post("https://barclabs.vercel.app/updates", updateData);
      console.log("update posted successfully!");
    } catch (err) {
      console.log("Error posting to /updates", err);
    }
    setTitle("");
    setPar1("");
    setPar2("");
  };

  if (!isVisible) {
    return (
      <Button
        variant="contained"
        onClick={() => {
          setIsVisible(true);
        }}
      >
        Create Update
      </Button>
    );
  }

  if (isVisible) {
    return (
      <div className="createUpdate-modal-container">
        <form className="createUpdate-form" onSubmit={handleSubmit}>
          <Button
            className="createUpdate-exit"
            variant="contained"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            X
          </Button>
          <h1 className="createUpdate-title">Create an update</h1>
          <label>Title:</label>
          <input
            type="text"
            required
            className="update-title"
            placeholder="Enter update Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>Paragraph 1:</label>
          <textarea
            required
            className="update-textarea"
            value={par1}
            placeholder="Enter first paragraph"
            onChange={(e) => setPar1(e.target.value)}
          ></textarea>
          <label>Paragraph 2:</label>
          <textarea
            className="update-textarea"
            value={par2}
            placeholder="Enter second paragraph"
            onChange={(e) => setPar2(e.target.value)}
          ></textarea>
          {loading ? (
            <Button variant="contained" className="createPuppy-submit">
              Submitting Form
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className="createPuppy-submit"
              type="submit"
            >
              Submit Form
            </Button>
          )}
        </form>
      </div>
    );
  }
}
