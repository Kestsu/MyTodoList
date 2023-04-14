import React from "react";
import "./logo.css";

function Logo() {
  document.addEventListener("DOMContentLoaded", function() {
    const curser = document.querySelector(".curser");
    document.addEventListener("mousemove", function (e) {
      const X = e.clientX;
      const Y = e.clientY;
      curser.style.left = X + "px";
      curser.style.top = Y + "px";
    });
  });
  
  return (
    <>
      <div className="container fundo">
        <div className="curser"></div>
        <div className="row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div className="row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div className="row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div className="row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div className="row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <button className="hexagon">Hi</button>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div className="row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div className="row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div className="row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div className="row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div className="row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div className="row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
      </div>
      <div className="on-top"></div>
    </>
  );
}

export default Logo;
