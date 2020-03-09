import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Sudoku from "./Sudoku";
import { Board } from "./components/Board.jsx";

function App() {
  let sudoku = new Sudoku();

  let com = sudoku.getCompartments();

  const [compartments, setCompartments] = useState(com);

  const solveHandler = () => {
    //set data
    compartments.forEach(com => {
      com.forEach(cell => {
        let { row, coll, value } = cell;
        sudoku.setCellData(row, coll, value);
      });
    });

    sudoku.log();
    sudoku.solve();
    sudoku.log();
    let com = sudoku.getCompartments();
    setCompartments(com);
  };
  const onCellCheck = (row, coll, value) => {
    let compartmentIndex;
    let com = JSON.stringify(compartments);
    com = JSON.parse(com);
    for (let i = 0; i < com.length; i++) {
      for (let j = 0; j < com[i].length; j++) {
        let cell = com[i][j];
        cell.isChecked = cell.isHighlighted = cell.isHighlightedNum = false;

        // area highlight
        if (cell.row == row || cell.coll == coll) {
          cell.isHighlighted = true;
        }

        // num highlight
        if (cell.value && cell.value == value) {
          cell.isHighlightedNum = true;
        }

        // cell highlight
        if (cell.row == row && cell.coll == coll) {
          com[i][j].isChecked = true;
          compartmentIndex = i;
        }
      }
    }
    com[compartmentIndex] = com[compartmentIndex].map(c => {
      c.isHighlighted = true;
      return c;
    });

    setCompartments(com);
  };
  const onKeyHandler = e => {
    let { keyCode } = e;
    //compartments.forEach(c => c.forEach(cell => console.log(cell.isChecked)));

    // if not in 1...9 return
    if (keyCode < 49 || keyCode > 57) return;

    let num = keyCode - 48;

    let com = compartments.map(c =>
      c.map(cell => {
        if (cell.isChecked) {
          cell.value = num;
          // checkInput(cell)
          return { ...cell, value: num };
        }
        return cell;
      })
    );
    setCompartments(com);
  };

  useEffect(() => {
    document.addEventListener("keypress", onKeyHandler);

    return () => {
      document.removeEventListener("keypress", onKeyHandler);
    };
  });
  return (
    <Fragment>
      <h1>My sudoku solver</h1>
      <Board compartments={compartments} onCellCheck={onCellCheck} />
      <div className="solveButton" onClick={solveHandler}>
        Вирішити
      </div>
    </Fragment>
  );
}

export default App;
