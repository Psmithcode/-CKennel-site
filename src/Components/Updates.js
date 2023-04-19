import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";
import "../styles/Updates.css";
import Fade from "react-reveal";

import UpdateCard from "./UpdateCard";

export default function Updates(props) {
  // const [data, setData] = useState([]);
  const { updates, fetchUpdates } = props;
  // console.log(props)
  useEffect(() => {
    fetchUpdates();
  }, []);
  return (
    <div className="updates-container" id="updates">
      <h2 className="updates-title">Updates</h2>
      <Fade left>
        <div className="updateCards-container">
          {updates.map((update, index) => {
            return (
              <UpdateCard
                key={index}
                id={update.id}
                title={update.title}
                date={update.date_added}
                par1={update.paragraph1}
                par2={update.paragraph2}
              />
            );
          })}
        </div>
      </Fade>
    </div>
  );
}
