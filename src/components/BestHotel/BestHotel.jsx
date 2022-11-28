import React, { useEffect, useState, useReducer } from "react";
import moment from "moment";

const BestHotel = (props) => {
  const endTime = moment()
    .add(34, "minutes")
    .add(23, "seconds");
  const [time, setTime] = useState("");

  const hotel = props.getHotel();

  useEffect(() => {
    setInterval(() => {
      const leftTime = -moment().diff(endTime) / 1000;
      const minutes = Math.floor(leftTime / 60);
      const seconds = Math.floor(leftTime % 60);
      setTime(`minutes: ${minutes}, seconds ${seconds}`);
    }, 1000);
  }, []);

  if (!hotel) return null;

  return (
    <div className="car bg-success text-white">
      <div className="card-header"> The best offert! </div>{" "}
      <div className="card-body">
        <div className="card-title"> {hotel.name} </div>{" "}
        <div className="card-subtitle"> {hotel.description} </div>{" "}
        <p> Rate: {hotel.rating} </p>{" "}
        <a href="#/" className="btn btn-sm btn-light">
          show me!
        </a>
        <p>left until the end of the offer {time} </p>{" "}
      </div>{" "}
    </div>
  );
};

export default BestHotel;
