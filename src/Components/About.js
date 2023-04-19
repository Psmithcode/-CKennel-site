import React from "react";
import "../styles/About.css";
import Fade from "react-reveal/Fade";

export default function About(props) {
  return (
    <div className="about-container" id="about">
      <div className="about-title-container">
        <h2 className="about-title">Why Choose Us?</h2>
      </div>
      <Fade left duration={700}>
        <p className="about-list-body-text">
          Welcome to BAR-C Kennels out of Haskell TX. We are passionate about
          these incredible animals and are committed to providing the best
          possible breeding program for our clients. We fell in love with the
          Labrador breed. We were drawn to their loyal and loving nature, their
          intelligence, and their playful spirit. We decided to start our own
          breeding program so that we could share the joy of these wonderful
          dogs with others. Our puppies are raised in a loving home environment
          and receive the best possible care. They are socialized from a young
          age, which helps them to become well-adjusted and confident dogs. We
          also provide our clients with support and guidance throughout the
          puppy-raising process to ensure that their new addition is happy.
        </p>
        <div className="about-list-container">
          <ul className="about-list">
            <li>Our dogs are family raised with kids and other animals.</li>
            <li>
              We only have 1-2 litters each year. We breed for quality, not
              quantity.
            </li>
            <li>
              Our puppies are socialized daily and started on a military based
              super dog program for neurological development.
            </li>
            <li>
              We are very active with updates and development of your newly
              purchased friend!
            </li>
            <li>
              We welcome anyone who wants to come see the puppies in person!
              This will be by appointment, contact us to get in touch!
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
}
