import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.count);

  return (
    <div className="App">
      <h1>Persist counter with eggs</h1>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "counter/plus",
            })
          }>
          Plus
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "counter/minus",
            })
          }>
          Minus
        </button>
        <p>{count}</p>
      </div>
    </div>
  );
}
