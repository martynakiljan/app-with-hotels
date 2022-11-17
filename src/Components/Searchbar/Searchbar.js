import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import styles from "./Searchbar.module.css";

function Searchbar() {
  const [term, setTerm] = useState("");

  const searchFun = () => {
    console.log(term);
  };

  const updateTerm = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <div className="row">
        <div className="form-group col">
          <Input
            onKeyDown={(e) => e.key === "Enter" && searchFun()}
            onChange={updateTerm}
            value={term}
            className="form-control"
            placeholder="I'm looking for..."
          />
        </div>
        <div className="col">
          <Button onClick={searchFun} color="primary">
            Search!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
