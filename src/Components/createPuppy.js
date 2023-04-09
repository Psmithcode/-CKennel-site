import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import "./createPuppy.css";

export default function CreatePuppy() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [loading, setLoading] = useState(false);

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

      const secureUrl = cloudinaryRes.data.secure_url;

      const puppyData = {
        name,
        text1,
        text2,
        text3,
        text4,
        image: secureUrl,
      };

      await axios.post("https://barclabs.vercel.app/puppies", puppyData);

      setLoading(false);
      console.log("Form submitted successfully!");
    } catch (err) {
      setLoading(false);
      console.log("Error submitting form.", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="createPuppy-form">
      <h1 className="createPuppy-title">Create a Puppy</h1>
      <label>
        Name:
        </label>
        <input
          type="text"
          className="createPuppy-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <br />
      <label>
        Text 1:
        </label>
        <input
          className="createPuppy-input"
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
      <br />
      <label>
        Text 2:
        </label>
        <input
          className="createPuppy-input"
          type="text"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
      <br />
      <label>
        Text 3:
        </label>
        <input
          className="createPuppy-input"
          type="text"
          value={text3}
          onChange={(e) => setText3(e.target.value)}
        />
      <br />
      <label>
        Text 4:
        </label>
        <input
          className="createPuppy-input"
          type="text"
          value={text4}
          onChange={(e) => setText4(e.target.value)}
        />
      <br />
      <label>
        Profile Picture:
        </label>
        <input
        className="createPuppy-image-input"
          type="file"
          accept="image/*"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
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
  );
}
