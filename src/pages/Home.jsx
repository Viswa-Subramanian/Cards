/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import Gradients from "../components/Gradients";
import ProductImages from "../components/ProductImages";
import Info from "../components/Info";

const Home = () => {
  var sizes, colors, phones, gradients, phoneBackground, phoneHeight;
  var prevColor = "blue";
  var animateOrNot = true;

  function changeColor() {
    if (!animateOrNot) {
      return;
    }
    var primary = this.getAttribute("primary");
    var color = this.getAttribute("color");
    var phone = document.querySelector(`.phone[color="${color}"]`);
    var gradient = document.querySelector(`.gradient[color="${color}"]`);
    var prevGradient = document.querySelector(
      `.gradient[color="${prevColor}"]`
    );

    colors.forEach(color => color.classList.remove("active"));
    this.classList.add("active");
    document.documentElement.style.setProperty("--primary", primary);
    phones.forEach(s => s.classList.remove("show"));
    phone.classList.add("show");
    gradients.forEach(g => g.classList.remove("display", "behind"));
    prevGradient.classList.add("behind");
    gradient.classList.add("display");
    prevColor = color;
    animateOrNot = false;
    setTimeout(() => {animateOrNot = true;}, 800);
  }

  function changeSize() {
    sizes.forEach(size => size.classList.remove("active"));
    this.classList.add("active");
  }

  const changeHeight = () => {
    var x = window.matchMedia("(max-width:1000px)");

    !phones ? (phoneHeight = 0) : (phoneHeight = phones[0].offsetHeight);
    if (x.matches) {
      if (phoneHeight === 0) {
        try {
          setTimeout(changeHeight, 50);
        } catch (error) {
          alert("Oh no");
        }
      }
      phoneBackground.style.height = `${phoneHeight * 0.9}px`;
    } else if (!!phoneBackground) {
      phoneBackground.style.height = "475px";
    }
  };

  useEffect(() => {
    sizes = document.querySelectorAll(".size");
    colors = document.querySelectorAll(".color");
    phones = document.querySelectorAll(".phone");
    gradients = document.querySelectorAll(".gradient");
    phoneBackground = document.querySelector(".phoneBackground");
    colors.forEach(color => color.addEventListener("click", changeColor));
    sizes.forEach(size => size.addEventListener("click", changeSize));
    changeHeight();}, []);
  window.addEventListener("resize", changeHeight);

  return (
    <div className="Home">
      <div className="container">
        <div className="card">
          <div className="phoneBackground">
            <Gradients />
            <h2 className="apple">AE AE AE AE AE AE </h2>
            <h2 className="apple">AE AE AE AE AE AE </h2>
            <a href=" " className="share"><i className="fab fa-apple fa-2x"></i></a>
            <ProductImages />
          </div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Home;
