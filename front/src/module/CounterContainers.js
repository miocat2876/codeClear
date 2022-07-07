import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./counter";
import Counter11 from "./Counter11";

const CounterContainers = () => {
  const number = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  return (
    <Counter11
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    ></Counter11>
  );
};

export default CounterContainers;