import React, { Fragment } from "react";
import blue from "../assets/img/blue.png";
import black from "../assets/img/black.png";
import green from "../assets/img/green.png";
import red from "../assets/img/red.png";
const ProductImages = () => {
  return (
    <Fragment>
      <img src={blue} alt="blue phone" className="phone show" color="blue" />
      <img src={red} alt="red phone" className="phone" color="red" />
      <img src={green} alt="green phone" className="phone" color="green" />
      <img src={black} alt="black phone" className="phone " color="black" />
    </Fragment>
  );
};
export default ProductImages;
