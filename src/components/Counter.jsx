import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";


const Counter = () => {

    const dispatch = useDispatch();

    const count = useSelector((state) => state.counterReducer.value);

    return (
        <>
        <h1>Count :{count}</h1>
        <button type="button" onClick={() => dispatch(increment())}>Increment</button>
        <button type="button" onClick={() => dispatch(decrement())}>Increment</button>
        <button type="button" onClick={() => dispatch(incrementByAmount(10))}>Increment</button>
        </>
    )
}

export default Counter;