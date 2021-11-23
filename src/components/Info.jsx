import React from "react";

const Info = () => {
  const appleName = (
    <div className="phoneName">
      <div>
        <h1 className="big">Iphone AE</h1>
        <span className="new">in stock</span>
      </div>
      <h3 className="small">Apple Iphone 14 AE Mini</h3>
    </div>
  );
  const str = 'A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery.'
  const about = (
    <div className="description">
      <p className="text">
      {str}
      </p>
      <p>Let's go MINI</p>
    </div>
  );

  const ColorWalls = (
    <div className="color-container">
      <h3 className="title">Pick your vibe!</h3>
      <div className="colors">
        <span className="color active" primary="#174b99" color="blue"></span>
        <span className="color" primary="#f84848" color="red"></span>
        <span className="color" primary="#29b864" color="green"></span>
        <span className="color" primary="#444" color="black"></span>
      </div>
    </div>
  );

  const Varientbox = (
    <div className="size-container">
      <h3 className="title">Varient</h3>
      <div className="sizes">
        <span className="size" >128GB</span>
        <span className="size">256GB</span>
        <span className="size active">512GB</span>
      </div>
    </div>
  );

  const OrderPrice = (
    <div className="buy-price">
      <a href="/#" className="buy">
        <i className="fab fa-apple"></i>Buy Now</a>
      <div className="price">
        <h1>$ 1099.99</h1>
      </div>
    </div>
  );

  return (
    <div className="info">
      {appleName} {about} {ColorWalls} {Varientbox} {OrderPrice}
    </div>
  );
};

export default Info;
