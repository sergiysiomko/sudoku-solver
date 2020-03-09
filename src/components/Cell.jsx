import React from "react";
import { v4 as uuid } from "uuid";

export const Cell = ({
  value,
  candidates,
  row,
  coll,
  onCellCheck,
  isChecked = false,
  isHighlighted = false,
  isHighlightedNum = false
}) => {
  const onMouseDownHandler = () => {
    onCellCheck(row, coll, value);
  };
  return (
    <div
      className={`cell ${isChecked ? "checked" : ""} ${
        isHighlighted ? "highlighted" : ""
      } ${isHighlightedNum ? "highlightedNum" : ""}`}
      onMouseDown={onMouseDownHandler}
    >
      {value ||
        candidates.map(n => (
          <div key={uuid()} className={`candidate candidate-${n}`}>
            {n}
          </div>
        ))}
    </div>
  );
};
