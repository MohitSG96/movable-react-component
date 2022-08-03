import React, { useEffect, useState } from "react";
import "./MovableSquare.css";

interface Square {
  index: number;
  isSelected?: boolean;
  upPosition?: number;
  leftPosition?: number;
  onSelectBox?: () => void;
}

const MovableSquare = ({
  index,
  onSelectBox,
  upPosition = 10,
  leftPosition = 10,
  isSelected = false,
}: Square) => {
  const [up, setUp] = useState(upPosition);
  const [left, setLeft] = useState(leftPosition);

  const [keysPressed, setKeysPressed] = useState(() => ({
    KeyW: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
  }));

  useEffect(() => {
    console.log("Key Pressed", JSON.stringify(keysPressed));
    if (keysPressed.KeyW) {
      setUp((up) => up - 10);
    }

    if (keysPressed.KeyS) {
      setUp((up) => up + 10);
    }

    if (keysPressed.KeyA) {
      setLeft((left) => left - 10);
    }

    if (keysPressed.KeyD) {
      setLeft((left) => left + 10);
    }
  }, [keysPressed]);

  let style: any = { top: up, left: left };
  if (isSelected) {
    style = { ...style, border: "5px solid rgb(152, 255, 111)" };
  }

  // onKeyDown Handler Function
  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isSelected) {
      return;
    }

    // @ts-ignore
    setKeysPressed({ ...keysPressed, [event.code]: true });
  };

  // onKeyDown Handler Function
  const keyUpHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isSelected) {
      return;
    }

    // @ts-ignore
    setKeysPressed({ ...keysPressed, [event.code]: false });
  };

  return (
      <div
        className="box"
        tabIndex={index}
        onClick={onSelectBox}
        onKeyDown={keyDownHandler}
        onKeyUp={keyUpHandler}
        style={{...style, zIndex: index}}
      >
        <span>{index}</span>
      </div>
  );
};

export default MovableSquare;
