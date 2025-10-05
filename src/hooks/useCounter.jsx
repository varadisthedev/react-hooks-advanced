import {useState} from 'react'
// no need to import react, since code doesnt have any JSX
function useCounter(initialCount=0,value) {
    const[count,setCount]=useState(initialCount)

    const increment=()=>{
        setCount(prevCount=>prevCount+value)
    }
    const decrement=()=>{
        setCount(prevCount=>prevCount-value)
    }
    const reset=()=>{
        setCount(initialCount)
    }

    return [count,increment,decrement,reset]
}

export default useCounter