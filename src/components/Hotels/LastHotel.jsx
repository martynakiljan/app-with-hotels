import React from "react";
import useStateStorage from "../../hoc/useStateStorage";

const LastHotel = (props) => {
  const [hotel, setHotel] = useStateStorage(null);

  return (
    <div className="card bg-light">
      <div className="card-body">
        <div className="d-flex justy-content-between">
          <div className="card-title">
            Have you recently viewed this hotel, are you still interested?{" "}
          </div>{" "}
          <div className="card-title"> {hotel.name} </div>{" "}
          <a href="#/" className="btn btn-sm btn-light">
            YES
          </a>
          <button className="btn btn-sm btn-light" onClick={props.onRemove}>
            NO, thanks
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default LastHotel;
