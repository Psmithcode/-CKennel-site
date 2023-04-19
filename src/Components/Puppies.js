import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Updates.css";
import PuppyCard from "./PuppyCard";
import Fade from "react-reveal/Fade";

export default function Puppies(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://barclabs.vercel.app/puppies")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="updates-container" id="puppies">
      <h2 className="updates-title">Puppies</h2>
      <Fade left duration={700}>
        <div className="updateCards-container">
          {data.map((puppy, index) => {
            return (
              <PuppyCard
                key={index}
                id={puppy.id}
                imageName={puppy.image}
                name={puppy.name}
                whelpedDate={puppy.whelped_date}
                readyDate={puppy.ready_date}
                sire={puppy.sire}
                dam={puppy.dam}
                vaccinated={puppy.vaccinated}
                price={puppy.price}
              />
            );
          })}
        </div>
      </Fade>
    </div>
  );
}
