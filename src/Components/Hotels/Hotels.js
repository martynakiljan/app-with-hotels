import React, { Component } from "react";
import Hotel from "./Hotel.jsx";
import styles from "./Hotel.module.css";
import ThemeContext from "../../context/themeContext";

class Hotels extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div className={styles.hotelsContainer}>
        <h2>Offerts:</h2>
        {this.props.hotels.map((hotel) => {
          return <Hotel onOpen={this.props.onOpen} theme={this.context} key={hotel.id} {...hotel} />;
        })}
      </div>
    );
  }
}

export default Hotels;
