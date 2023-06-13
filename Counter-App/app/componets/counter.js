import { useState } from "react";

const Counter = () => {
  const IncrementCounter = () => {
    setCount(count + 1);
  };

  const DecrementCounter = () => {
    setCount(count - 1);
  };

  const ResetCounter = () => {
    setCount(0);
  };

  const [count, setCount] = useState(0);

  const condition = count > 0 ? "greater-than-zero" : "smaller-than-zero";
  
  return (
    <div>
      <h1 className="componetheading">Counter</h1>
      <p className={"fancycount"}>Count:{count}</p>
      <button className="fancybutton" onClick={() => IncrementCounter()}>
        Increment
      </button>
      <button className="fancybutton" onClick={DecrementCounter}>
        Decrement
      </button>
      <button className="fancybutton" onClick={ResetCounter}>
        Reset
      </button>
    </div>
  );
};
export default Counter;
