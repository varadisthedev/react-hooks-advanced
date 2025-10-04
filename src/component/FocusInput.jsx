import React,{useEffect,useRef} from 'react'

function FocusInput() {
    const inputRef=useRef(null);

    useEffect(()=>{
        // foucs on input 
        inputRef.current.focus() // current prop is a part of react
    },[]) // array empty for just one execution

  return (
    <div>
        <input ref={inputRef} type='text' className='border-2 border-amber-600'></input>
    </div>
  )
}

export default FocusInput