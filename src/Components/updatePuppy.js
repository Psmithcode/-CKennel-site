import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import "../styles/createPuppy.css";

export default function UpdatePuppy() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [dateWhelped, setDateWhelped] = useState("");
  const [dateReady, setDateReady] = useState("");
  const [sire, setSire] = useState("");
  const [dam, setDam] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const puppyData = {
        name,
        dateWhelped,
        dateReady,
        price,
        sire,
        dam,
      };

      await axios.put("https://barclabs.vercel.app/puppies", puppyData);
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
        Update Puppy
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
          <h1 className="createPuppy-title">Update a Puppy</h1>
          <label>Name:</label>
          <input
            type="text"
            className="createPuppy-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label>Whelped:</label>
          <input
            className="createPuppy-input"
            type="date"
            value={dateWhelped}
            onChange={(e) => setDateWhelped(e.target.value)}
          />
          <br />
          <label>Ready:</label>
          <input
            className="createPuppy-input"
            type="date"
            value={dateReady}
            onChange={(e) => setDateReady(e.target.value)}
          />
          <br />
          <label>Sire:</label>
          <input
            className="createPuppy-input"
            type="text"
            value={sire}
            onChange={(e) => setSire(e.target.value)}
          />
          <br />

          <label>Dam:</label>
          <input
            className="createPuppy-input"
            type="text"
            value={dam}
            onChange={(e) => setDam(e.target.value)}
          />

          <br />

          <label>Price:</label>
          <input
            className="createPuppy-input"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

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
