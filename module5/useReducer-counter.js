import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather";

function reducer(count, action) {
  switch (action.type) {
    case "add-one": {
      return count + 1;
    }
    case "add-ten": {
      return count + 10;
    }
    case "reset": {
      return action.initialVal;
    }
    case "random": {
      return action.value;
    }
    case "decrease-one": {
      return count - 1;
    }
    case "decrease-ten": {
      return count - 10;
    }
  }
}

function Counter({ initialVal = 0 }) {
  const [count, dispatch] = React.useReducer(reducer, initialVal);

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={() => dispatch({ type: "add-one" })}>
          <ChevronUp />
          <span className="visually-hidden">Increase slightly</span>
        </button>
        <button onClick={() => dispatch({ type: "add-ten" })}>
          <ChevronsUp />
          <span className="visually-hidden">Increase a lot</span>
        </button>
        <button onClick={() => dispatch({ type: "reset", initialVal })}>
          <RotateCcw />
          <span className="visually-hidden">Reset</span>
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "random",
              value: clamp(Math.ceil(Math.random() * 100), 1, 100),
            })
          }
        >
          <Hash />
          <span className="visually-hidden">Set to random value</span>
        </button>
        <button onClick={() => dispatch({ type: "decrease-one", count })}>
          <ChevronsDown />
          <span className="visually-hidden">Decrease a lot</span>
        </button>
        <button onClick={() => dispatch({ type: "decrease-ten", count })}>
          <ChevronDown />
          <span className="visually-hidden">Decrease slightly</span>
        </button>
      </div>
    </div>
  );
}

const clamp = (val, min = 0, max = 1) => {
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.max(min, Math.min(max, val));
};

export default Counter;
