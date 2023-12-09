import React from "react";

const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Episode - 1</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 2} key={index}>
              {name} - {x + 2}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;