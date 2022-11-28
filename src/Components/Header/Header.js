import React from "react";
import styles from "./Header.module.css";
import withMousePosition from "../../hoc/withMousePosition";
import InspiringQuote from "../InspiringQuote/InspiringQuote";

function Header(props) {
  const paralaxStyles = {
    transform: `translate(
      ${props.mouseY / -20}px,
      ${props.mouseY / 120}px    
      )`,
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerImage} style={paralaxStyles}></div>
      {props.children}
      <InspiringQuote/>
    </header>
  );
}

export default withMousePosition(Header);
