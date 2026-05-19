import React, { useState } from "react";

import "./App.css";

function App() {

  const [input, setInput] =
    useState("");

  const [result, setResult] =
    useState("");

  // BUTTON CLICK

  const handleClick = (value) => {

    setInput(input + value);
  };

  // CLEAR

  const clearInput = () => {

    setInput("");
    setResult("");
  };

  // CALCULATE

  const calculateResult = () => {

    try {

      // EMPTY INPUT

      if (input === "") {

        setResult("Error");
        return;
      }

      // INVALID EXPRESSION

      const lastChar =
        input[input.length - 1];

      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "*" ||
        lastChar === "/"
      ) {

        setResult("Error");
        return;
      }

      // SAFE CALCULATION

      const answer =
        eval(input);

      // DIVISION EDGE CASES

      if (
        answer === Infinity ||
        Number.isNaN(answer)
      ) {

        setResult("NaN");
      }

      else {

        setResult(answer);
      }

    }

    catch {

      setResult("Error");
    }
  };

  return (

    <div className="calculator-container">

      <h1>
        React Calculator
      </h1>

      <input
        type="text"
        value={input}
        readOnly
      />

      <h2>
        {result}
      </h2>

      <div className="button-grid">

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={clearInput}>C</button>

        <button onClick={() => handleClick("0")}>0</button>

        <button onClick={calculateResult}>=</button>

        <button onClick={() => handleClick("/")}>/</button>

      </div>

    </div>
  );
}

export default App;