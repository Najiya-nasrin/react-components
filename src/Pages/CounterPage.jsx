import Button from "../Components/Button";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ACTION_TYPES.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ACTION_TYPES.SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ACTION_TYPES.ADD_VALUE:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return { ...state };
  }
};

const ACTION_TYPES = {
  INCREMENT_COUNT: "increment_count",
  DECREMENT_COUNT: "decrement_count",
  SET_VALUE_TO_ADD: "set_value_to_add",
  ADD_VALUE: "add_value",
};

export default function CounterPage() {
  const [state, dispatch] = useReducer(reducer, { count: 10, valueToAdd: 0 });

  const incrementCount = () => {
    dispatch({
      type: ACTION_TYPES.INCREMENT_COUNT,
    });
  };

  const decrementCount = () => {
    dispatch({
      type: ACTION_TYPES.DECREMENT_COUNT,
    });
  };

  const addValue = (event) => {
    event.preventDefault();
    dispatch({
      type: ACTION_TYPES.ADD_VALUE,
    });
  };

  const setNumber = (event) => {
    const { value } = event.target;
    dispatch({
      type: ACTION_TYPES.SET_VALUE_TO_ADD,
      payload: +value,
    });
  };

  return (
    <div className="border px-3 py-3">
      <div className="mb-5 text-lg text-emerald-600">The value of count is: {state.count}</div>
      <div className="flex mb-5">
        <Button onClick={incrementCount}> Increment</Button>
        <Button onClick={decrementCount}> Decrement</Button>
      </div>
      <div>
        <form onSubmit={addValue}>
          <input
            onChange={setNumber}
            value={state.valueToAdd || ''}
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
