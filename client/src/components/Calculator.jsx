import React, { useState } from "react";
import axios from "axios";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (val) => {
    setDisplay(prev => prev + val);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleDelete = () => {
    setDisplay(prev => prev.slice(0, -1));
  };

  const handleResult = async () => {
    if (!display) return;

    try {
      const response = await axios.post(import.meta.env.VITE_CALC,
        { expression: display }
      );
      setDisplay(response.data.result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" value={display} readOnly />

      <div>
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+"].
          map(val => (
            <button key={val} onClick={() => handleClick(val)}>
              {val}
            </button>
          ))}
      </div>

      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleResult}>=</button>
    </div>
  );
}
