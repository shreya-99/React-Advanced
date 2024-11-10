import { useState } from "react";


const UseStateBasics = () => {

  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count+1);
  }
console.log(count);
  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button type="button" className="btn" onClick={handleClick}> Increase</button>
    </div>
  );
};

export default UseStateBasics;
