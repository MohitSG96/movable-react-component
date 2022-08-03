import React, { useState } from "react";

import "./App.css";
import MovableSquare from "./components/MovableSquare";

function App() {
  const [boxes, setBoxes] = useState<number[]>([]);
  const [selectedBox, setSelectedBox] = useState(-1);

  const handleAddNewBoxClick = () => {
    const lastBox = boxes[boxes.length - 1] ?? 0;
    setBoxes([...boxes, lastBox + 1]);
  };

  const selectBox = (boxId: number) => {
    setSelectedBox(boxId);
  };

  return (
    <div className="App">
      <div className="header-button">
        <button id="add-box" className="add-box" onClick={handleAddNewBoxClick}>
          Add New Box
        </button>
      </div>

      {boxes.map((boxNumber) => (
        <MovableSquare
          index={boxNumber}
          isSelected={selectedBox === boxNumber}
          onSelectBox={() => {
            selectBox(boxNumber);
          }}
        />
      ))}
    </div>
  );
}

export default App;
