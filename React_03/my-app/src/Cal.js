import React, { useState } from "react";

function MyCal() {
  const [calculate, calculating] = useState(0);
  const [calculateSub, calculatingSub] = useState(0);

  function handleClick() {
    calculating(calculate + 1);
  }

  function handleCal() {
    calculatingSub(calculateSub - 1);
  }

  return (
    <div className="my-cal-container">
      
      <button onClick={handleClick}>
        clicked  {calculate} times
        </button>
      <h1>Count</h1>
      <span>
        <button onClick={handleCal}>
        clicked  {calculateSub} times
        </button>
        </span>
     
    </div>
  );
}

export default MyCal;
