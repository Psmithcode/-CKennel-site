import { useState } from "react";
import "../styles/ContactForm.css";
import pawImage from "../whitePaw.jpg";
import { Fade } from "react-reveal";

export default function ContactForm() {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("https://barclabs.vercel.app/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };

  return (
    <div className="contact-container" id="contact">
      <Fade left>
        <section className="contact-text-container">
          <h2>Give us a shout!</h2>
          <h3>We'd love to hear from you.</h3>
          <div className="puppyCard-paw-container size3">
            <img src={pawImage} alt="paw" />
          </div>
        </section>
        <div className="contact-form-container">
          <form onSubmit={submitEmail} className="contact-form">
            {/* <legend className="contact-title">Contact Us</legend> */}
            <label className="contact-label">Name:</label>
            <input
              className="contact-form-input"
              placeholder="Name"
              onChange={handleStateChange}
              name="name"
              value={mailerState.name}
            />
            <label className="contact-label">Email:</label>
            <input
              className="contact-form-input"
              placeholder="Email"
              onChange={handleStateChange}
              name="email"
              value={mailerState.email}
            />
            <label className="contact-label">Message:</label>
            <textarea
              className="contact-form-input"
              placeholder="Message"
              onChange={handleStateChange}
              name="message"
              value={mailerState.message}
            />
            <button className="contact-form-submit">Send Message</button>
          </form>
        </div>
      </Fade>
    </div>
  );
}
