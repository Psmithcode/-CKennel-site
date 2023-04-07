import { useState } from "react";
import "./ContactForm.css";

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
    <div className="contact-form-container" id="contact">
      <form onSubmit={submitEmail} className="contact-form">
        <legend className="contact-title">Contact Us</legend>
        <input
          className="contact-form-input"
          placeholder="Name"
          onChange={handleStateChange}
          name="name"
          value={mailerState.name}
        />
        <input
          className="contact-form-input"
          placeholder="Email"
          onChange={handleStateChange}
          name="email"
          value={mailerState.email}
        />
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
  );
}
