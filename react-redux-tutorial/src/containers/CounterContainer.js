import React, {useCallback} from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((status) => status.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()),[dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()),[dispatch]);
  return (
    <Counter
      number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
  );
};

export default CounterContainer;
