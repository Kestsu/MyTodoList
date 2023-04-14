import React, { useState } from "react";
import "./styles.css";

function App() {
  const [state, setState ] = useState(false)


  const btn = () => {
    const hexagons = document.querySelectorAll(".hexagon");

      hexagons.forEach((hexagon) => {
        hexagon.style.background = state ? "rgba(15, 15, 15, 1)" : "white";
      });

      const formInput = document.querySelector(".form-control input");
      formInput.style.borderBottom = state ? "2px white solid" : "2px black solid"
      formInput.style.color = state ? "white" : "black";
      formInput.style.caretColor = state ? "white" : "black";

      const formInputLabelSpans = document.querySelectorAll(".form-control label span")
      formInputLabelSpans.forEach((letter) => {
        letter.style.color = state ? "white" : "black";
      })

      setState(state ? false : true);
  };

  return (
    <header>
      <input type="checkbox" id="checkbox" onClick={btn} />
      <label htmlFor="checkbox" className="switch">
        <div className="powersign"></div>
      </label>
    </header>
  );
}

export default App;
