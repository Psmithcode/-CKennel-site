import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Rating } from "@mui/material";
import axios from "axios";
import "../styles/AddReview.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgb(121, 99, 78)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddReview() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [message, setMessage] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const reviewData = {
        name,
        rating,
        title,
        message,
      };
      console.log(reviewData);
      await axios.post("https://barclabs.vercel.app/reviews", reviewData);

      console.log("Form submitted successfully!");
    } catch (err) {
      console.log("Error submitting form.", err);
    }

    setName("");
    setRating(0);
    setMessage("");

    handleClose();
  };

  return (
    <div>
      <Button
        sx={{ textTransform: "none", backgroundColor: "var(--dark)" }}
        onClick={handleOpen}
        variant="contained"
      >
        Write a review
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="addReview-container">
            <form className="addReview-form" onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                className="addReview-input"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <label>Review Title:</label>
              <input
                className="addReview-input"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <label>Rating:</label>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
              <label>Message:</label>
              <textarea
                className="addReview-input"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <Button type="submit" variant="contained" sx={{ width: "30%" }}>
                Submit
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
