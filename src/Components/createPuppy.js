import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import "../styles/createPuppy.css";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export default function CreatePuppy() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [dateWhelped, setDateWhelped] = useState("");
  const [dateReady, setDateReady] = useState("");
  const [sire, setSire] = useState("");
  const [dam, setDam] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "nskblihj");

      const cloudinaryRes = await axios.post(
        "https://api.cloudinary.com/v1_1/didcw4ntc/image/upload",
        formData
      );
      const publicId = cloudinaryRes.data.public_id;

      const puppyData = {
        name,
        dateWhelped,
        dateReady,
        price,
        selectedValue,
        sire,
        dam,
        image: publicId,
      };

      await axios.post("https://barclabs.vercel.app/puppies", puppyData);

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
        Create Puppy
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
          <h1 className="createPuppy-title">Create a Puppy</h1>
          <label>Name:</label>
          <input
            type="text"
            className="createPuppy-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Profile Picture:</label>
          <input
            className="createPuppy-image-input"
            type="file"
            accept="image/*"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <label>Whelped:</label>
          <input
            className="createPuppy-input"
            type="date"
            value={dateWhelped}
            onChange={(e) => setDateWhelped(e.target.value)}
          />

          <label>Ready:</label>
          <input
            className="createPuppy-input"
            type="date"
            value={dateReady}
            onChange={(e) => setDateReady(e.target.value)}
          />

          <label>Sire:</label>
          <input
            className="createPuppy-input"
            type="text"
            value={sire}
            onChange={(e) => setSire(e.target.value)}
          />

          <label>Dam:</label>
          <input
            className="createPuppy-input"
            type="text"
            value={dam}
            onChange={(e) => setDam(e.target.value)}
          />

          <label>Current Vaccinations and worming?</label>
          <RadioGroup
            aria-label="YesNo"
            name="YesNo"
            value={selectedValue}
            onChange={handleChange}
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "10px",
            }}
          >
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
              onClick={() => {
                console.log(selectedValue);
              }}
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label="No"
              onClick={() => {
                console.log(selectedValue);
              }}
            />
          </RadioGroup>

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
