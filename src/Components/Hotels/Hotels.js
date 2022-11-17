import React, { Component } from "react";
import Hotel from "./Hotel";
import styles from "./Hotel.module.css";

class Hotels extends Component {
  render() {
    return (
      <div className={styles.hotelsContainer}>
        <h2>Offerts:</h2>
        {this.props.hotels.map((hotel) => {
          return <Hotel key={hotel.id} {...hotel} />;
        })}
      </div>
    );
  }
}

export default Hotels;
