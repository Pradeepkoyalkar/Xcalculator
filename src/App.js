// App.js

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

    setInput((prev) =>
      prev + value
    );
  };

  // CLEAR INPUT

  const clearInput = () => {

    setInput("");
    setResult("");
  };

  // CALCULATE RESULT

  const calculateResult = () => {

    try {

      // EMPTY INPUT

      if (
        input.trim() === ""
      ) {

        setResult("Error");
        return;
      }

      // CHECK INVALID LAST CHARACTER

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

      // TOKENIZE INPUT

      const tokens =
        input.match(
          /\d+|\+|\-|\*|\//g
        );

      if (!tokens) {

        setResult("Error");
        return;
      }

      // FIRST NUMBER

      let total =
        Number(tokens[0]);

      // PROCESS OPERATORS

      for (
        let i = 1;
        i < tokens.length;
        i += 2
      ) {

        const operator =
          tokens[i];

        const nextNumber =
          Number(tokens[i + 1]);

        switch (operator) {

          case "+":

            total =
              total + nextNumber;

            break;

          case "-":

            total =
              total - nextNumber;

            break;

          case "*":

            total =
              total * nextNumber;

            break;

          case "/":

            total =
              total / nextNumber;

            break;

          default:

            setResult("Error");
            return;
        }
      }

      // HANDLE NaN

      if (
        Number.isNaN(total)
      ) {

        setResult("NaN");
      }

      else {

        setResult(total);
      }

    }

    catch {

      setResult("Error");
    }
  };

  return (

    <div className="calculator-container">

      {/* TITLE */}

      <h1>
        React Calculator
      </h1>

      {/* INPUT FIELD */}

      <input
        type="text"
        value={input}
        readOnly
      />

      {/* RESULT */}

      <h2>
        {result}
      </h2>

      {/* BUTTONS */}

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