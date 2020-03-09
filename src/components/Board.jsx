import React from "react";
import { Cell } from "./Cell";
import { v4 as uuid } from "uuid";

export const Board = ({ compartments, onCellCheck }) => {
  return (
    <div className="board">
      {compartments.map(com => {
        return (
          <div className="compartment" key={uuid()}>
            {com.map(cell => (
              <Cell {...cell} key={uuid()} onCellCheck={onCellCheck} />
            ))}
          </div>
        );
      })}
    </div>
  );
};
