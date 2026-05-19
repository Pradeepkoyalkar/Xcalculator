import React, { useState } from "react";

import "./App.css";

function App() {

  // INPUT STATE

  const [input, setInput] =
    useState("");

  // RESULT STATE

  const [result, setResult] =
    useState("");

  // HANDLE BUTTON CLICK

  const handleClick = (value) => {

    setInput(input + value);
  };

  // CLEAR INPUT

  const clearInput = () => {

    setInput("");
    setResult("");
  };

  // CALCULATE RESULT

  const calculateResult = () => {

    try {

      // INVALID EXPRESSION

      if (
        input.endsWith("+") ||
        input.endsWith("-") ||
        input.endsWith("*") ||
        input.endsWith("/")
      ) {

        setResult("Error");
        return;
      }

      // SPLIT NUMBERS

      let numbers =
        input.split(/[+\-*/]/);

      // GET OPERATORS

      let operators =
        input.match(/[+\-*/]/g);

      // FIRST NUMBER

      let resultValue =
        Number(numbers[0]);

      // IF ONLY ONE NUMBER

      if (!operators) {

        setResult(resultValue);
        return;
      }

      // CALCULATIONS

      for (
        let i = 0;
        i < operators.length;
        i++
      ) {

        let nextNumber =
          Number(numbers[i + 1]);

        switch (operators[i]) {

          case "+":
            resultValue =
              resultValue +
              nextNumber;
            break;

          case "-":
            resultValue =
              resultValue -
              nextNumber;
            break;

          case "*":
            resultValue =
              resultValue *
              nextNumber;
            break;

          case "/":
            resultValue =
              resultValue /
              nextNumber;
            break;

          default:
            break;
        }
      }

      // SET RESULT

      setResult(resultValue);

    } catch {

      setResult("Error");
    }
  };

  return (

    <div className="calculator-container">

      {/* TITLE */}

      <h1>
        React Calculator
      </h1>

      {/* INPUT */}

      <input
        type="text"
        value={input}
        readOnly
      />

      {/* RESULT */}

      <h2>
        {result}
      </h2>

      {/* BUTTON GRID */}

      <div className="button-grid">

        {/* ROW 1 */}

        <button
          onClick={() =>
            handleClick("7")
          }
        >
          7
        </button>

        <button
          onClick={() =>
            handleClick("8")
          }
        >
          8
        </button>

        <button
          onClick={() =>
            handleClick("9")
          }
        >
          9
        </button>

        <button
          onClick={() =>
            handleClick("+")
          }
        >
          +
        </button>

        {/* ROW 2 */}

        <button
          onClick={() =>
            handleClick("4")
          }
        >
          4
        </button>

        <button
          onClick={() =>
            handleClick("5")
          }
        >
          5
        </button>

        <button
          onClick={() =>
            handleClick("6")
          }
        >
          6
        </button>

        <button
          onClick={() =>
            handleClick("-")
          }
        >
          -
        </button>

        {/* ROW 3 */}

        <button
          onClick={() =>
            handleClick("1")
          }
        >
          1
        </button>

        <button
          onClick={() =>
            handleClick("2")
          }
        >
          2
        </button>

        <button
          onClick={() =>
            handleClick("3")
          }
        >
          3
        </button>

        <button
          onClick={() =>
            handleClick("*")
          }
        >
          *
        </button>

        {/* ROW 4 */}

        <button
          onClick={clearInput}
        >
          C
        </button>

        <button
          onClick={() =>
            handleClick("0")
          }
        >
          0
        </button>

        <button
          onClick={calculateResult}
        >
          =
        </button>

        <button
          onClick={() =>
            handleClick("/")
          }
        >
          /
        </button>

      </div>

    </div>
  );
}

export default App;