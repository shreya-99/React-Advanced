import { useState } from "react";

const UseStateGotcha = () => {

  // let count=0;

  let [count, inc] = useState(0);

  // let setFunc = () => {
  //   inc(value => {
  //     value += 1;
  //     console.log(value);
  //     return value;
  //   })
  //   // this way of writing functions make it synchronous as value is updated simultaneously
  // }

  let setFunc=()=>{
    setTimeout(() => {
      console.log("count");
      inc((curr)=>curr+1)
    }, 3000);
  }

  return <>
    <h2>{count}</h2>
    <button className="btn" onClick={setFunc}>Increase</button>
  </>;
};

export default UseStateGotcha;
