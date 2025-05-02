import { useReducer } from "react";

const intitialState = {
  count: 0,
};

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return intitialState;
    default:
      return state;
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, intitialState);
  return (
    <div>
      count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        decrement2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Counter;
