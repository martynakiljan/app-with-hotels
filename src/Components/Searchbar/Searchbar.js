import React, { useContext, useEffect, useState, useRef } from "react";
import { Button, Input } from "reactstrap";
import styles from "./Searchbar.module.css";
import ThemeContext from "../../context/themeContext";

function Searchbar(props) {
  const theme = useContext(ThemeContext);
  const [term, setTerm] = useState("");

  const searchFun = () => {
    console.log(term);
    props.onSearch(term);
  };

  const updateTerm = (e) => {
    setTerm(e.target.value);
  };

  const inputRef = useRef(null);

  const focusInput = () => {
    // document.querySelector(".search").focus();
    inputRef.current.focus();
  };

  //to samo co componentDidMound//
  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className={styles.searchBar}>
        <input
          ref={inputRef}
          onKeyDown={(e) => e.key === "Enter" && searchFun()}
          onChange={updateTerm}
          value={term}
          className="form-control search"
          placeholder="I'm looking for..."
        />
  
      <Button onClick={searchFun} className={`ml-1 btn btn-${theme.color}`}>
        Search!
      </Button>
    </div>
  );
}

export default Searchbar;
