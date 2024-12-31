import Button from "../Components/Button";
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(10);
  const [valueToAdd, setvalueToAdd] = useState('');

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const addValue = (event) => {
    event.preventDefault();
    setCount(count + valueToAdd);
    setvalueToAdd('');
  }

  const setNumber = (event) => {
    const { value } = event.target;
    console.log('value', value);
    setvalueToAdd(+value);
  }

  return (
    <div className="border px-3 py-3">
      <div className="mb-5">The value of count is: {count}</div>
      <div className="flex mb-5">
        <Button onClick={incrementCount}> Increment</Button>
        <Button onClick={decrementCount}> Decrement</Button>
      </div>
      <div>
        <form onSubmit={addValue}>
          <input
            onChange={setNumber}
            value={valueToAdd}
            className="border px-2 mb-5"
            type="number"
            placeholder="enter a number"
          ></input>
          <Button primary>Add it!</Button>{" "}
        </form>
      </div>
    </div>
  );
}
