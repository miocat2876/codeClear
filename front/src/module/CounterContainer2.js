import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase } from "./counter2";
import Counter22 from "./Counter22";

const CounterContainer2 = () => {
  const number2 = useSelector((state) => state.counter2);

  const dispatch = useDispatch();

  const onIncrease2 = (num) => {
    dispatch(increase(num));
  };
  return <Counter22 number2={number2.value} onIncrease2={onIncrease2} />;
};

export default CounterContainer2;