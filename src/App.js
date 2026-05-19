import React, { useState } from "react";

import "./App.css";

function App() {

  const [input, setInput] =
    useState("");

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

  // APPLY OPERATION

  const applyOperation = (
    a,
    b,
    operator
  ) => {

    switch (operator) {

      case "+":
        return a + b;

      case "-":
        return a - b;

      case "*":
        return a * b;

      case "/":
        return a / b;

      default:
        return b;
    }
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

      // INVALID LAST CHARACTER

      const lastChar =
        input[input.length - 1];

      if (
        ["+", "-", "*", "/"]
          .includes(lastChar)
      ) {

        setResult("Error");
        return;
      }

      // TOKENIZE

      let tokens =
        input.match(
          /\d+|\+|\-|\*|\//g
        );

      if (!tokens) {

        setResult("Error");
        return;
      }

      // FIRST PASS (* and /)

      let stack = [
        Number(tokens[0])
      ];

      for (
        let i = 1;
        i < tokens.length;
        i += 2
      ) {

        let operator =
          tokens[i];

        let nextNumber =
          Number(tokens[i + 1]);

        if (
          operator === "*"
        ) {

          stack.push(
            stack.pop() *
            nextNumber
          );
        }

        else if (
          operator === "/"
        ) {

          stack.push(
            stack.pop() /
            nextNumber
          );
        }

        else {

          stack.push(operator);
          stack.push(nextNumber);
        }
      }

      // SECOND PASS (+ and -)

      let total =
        stack[0];

      for (
        let i = 1;
        i < stack.length;
        i += 2
      ) {

        total =
          applyOperation(
            total,
            stack[i + 1],
            stack[i]
          );
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