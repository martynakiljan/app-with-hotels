import React from "react";
import styles from "./Hotel.module.css";
import img from "../../images/photoHotel3.jpg";

function Hotel(props) {
  console.log(props);
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
        <p className={styles.rate}>
          Rate: {props.rating}
        </p>
        <p className={styles.reviews}>Reviews: {props.reviews}</p>
        <a href="#" className="btn btn-primary float-right">
          Show me!
        </a>
      </div>

      <div className="col-12">
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}

export default Hotel;
