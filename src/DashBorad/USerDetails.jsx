import React, { useContext } from "react";
import { DataProvider } from "../assets/Store/SaraKaam";

const USerDetails = () => {
  const {
    state: {
      user: { name, age, email, address, image }
    },
  } = useContext(DataProvider);
  return (
    <div className="row">
      <div className="col-md-8">
        <h1>Name:{name}</h1>
        <h4>Age:{age}</h4>
        <h4>Email:{email}</h4>
        <h4>Address:{address}</h4>
      </div>
      <div className="col-md-4">
        <img src={image} alt="" style={{ width: "150px", height: "150px" }} />
      </div>
    </div>
  );
};

export default USerDetails;
