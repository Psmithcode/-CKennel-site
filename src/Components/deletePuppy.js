import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import "../styles/createPuppy.css";

export default function DeletePuppy() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const puppyData = {
        name,
      };

      await axios.delete(process.env.REACT_APP_URL_PUPPIES, {
        data: puppyData,
      });
      console.log(puppyData);

      setLoading(false);
      console.log("Form submitted successfully!");
    } catch (err) {
      setLoading(false);
      console.log("Error submitting form.", err);
    }
  };

  if (!isVisible) {
    return (
      <Button
        variant="contained"
        onClick={() => {
          setIsVisible(true);
        }}
      >
        Delete Puppy
      </Button>
    );
  }

  if (isVisible) {
    return (
      <div className="createPuppy-modal-container">
        <form onSubmit={handleSubmit} className="createPuppy-form">
          <Button
            className="createUpdate-exit"
            variant="contained"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            X
          </Button>
          <h1 className="createPuppy-title">Delete a Puppy</h1>
          <label>Name:</label>
          <input
            type="text"
            className="createPuppy-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

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
