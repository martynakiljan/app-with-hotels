import React, { useContext, useState } from "react";
import styles from "./Hotel.module.css";
import img from "../../images/photoHotel3.jpg";
import ThemeContext from "../../context/themeContext";
import { Link } from "react-router-dom";

function Hotel(props) {
  const theme = useContext(ThemeContext);

  const clickHandler = () => {
    props.onOpen(props);

    //w propsach jest aktualny hotel//
  };

  return (
    <div className={`row ${styles.hotel}`}>
      <div className="col-4">
        <img className="img-fluid" src={img} alt="hotelImg"></img>
      </div>

      <div className={`col ${styles.infoHotel}`}>
        <p className={styles.title}>{props.name}</p>
        <p className={styles.place}>{props.city}</p>
      </div>

      <div className={`col ${styles.infoHotel}`}>
        <p className={styles.rate}>Rate: {props.rating}</p>
        <p className={styles.reviews}>Reviews: {props.reviews}</p>
        <Link to={`/hotel/${props.id}`}>Show me!</Link>
      </div>

      <div className="col-12">
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}

export default Hotel;
