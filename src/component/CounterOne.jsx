import React,{useState} from 'react'
import useCounter from '../hooks/useCounter'
function CounterOne() {
    // using the custom hook useCounter
    const [count,increment,decrement,reset]=useCounter(10,2)

  return (
    <div>
        <h2>count-{count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        
    </div>
  )
}

export default CounterOne