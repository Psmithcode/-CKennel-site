import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Updates.css";

import UpdateCard from "./UpdateCard";

export default function Updates(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://barclabs.vercel.app/updates")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="updates-container" id="updates">
      <h2 className="updates-title">Updates</h2>
      <div className="updateCards-container">
        {data.map((update, index) => {
          return (
            <UpdateCard
              id={update.id}
              title={update.title}
              date={update.date_added}
              par1={update.paragraph1}
              par2={update.paragraph2}
            />
          );
        })}
      </div>
    </div>
  );
}
