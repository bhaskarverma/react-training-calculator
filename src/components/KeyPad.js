import React, { useEffect, useState } from "react";

function KeyPad({ setResult }) {
  const keyPadStructure = [
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "x"],
    ["0", ".", "=", "/"],
  ];

  const [value, setValue] = useState(0);

  useEffect(() => {
    setResult(value);
  }, [value, setResult]);

  const isOperator = (key) => {
    return ["+", "-", "x", "/", "="].includes(key);
  };

  const appendToValue = (key) => {
    setValue(10 * parseInt(value) + parseInt(key));
  };

  const handleClick = (index1, index2) => {
    const pressedKey = keyPadStructure[index1][index2];

    const isOperatorKey = isOperator(pressedKey);

    if (!isOperatorKey) {
      appendToValue(pressedKey);
    }
  };

  return (
    <div>
      {keyPadStructure.map((row, index) => (
        <div key={index}>
          {row.map((key, index2) => (
            <button
              onClick={() => handleClick(index, index2)}
              style={{
                width: "50px",
                height: "50px",
              }}
              type="button"
              key={key}
            >
              <span style={{ fontSize: 20 }}>{key}</span>
            </button>
          ))}
        </div>
      ))}
      <div></div>
    </div>
  );
}

export default KeyPad;
