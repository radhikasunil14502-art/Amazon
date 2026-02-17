import React, { useContext, useEffect, useRef, useState } from "react";
import Products from "./Products";
// import { data } from "./Data.js";
import axios from "axios";
import { DataProvider } from "../assets/Store/SaraKaam.jsx";

const Amazon = () => {
  const {
    state: { productList },
    getProducts,
  } = useContext(DataProvider);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      <div className="row text-center">
        {productList.length == 0 ? (
          <h1 className=" text-center text-danger "style={{marginTop:"300px"}}>Not Found</h1>
        ) : (
          productList.map((elm, ind) => <Products key={ind} elm={elm} />)
        )}
      </div>
    </div>
  );
};

export default Amazon;
