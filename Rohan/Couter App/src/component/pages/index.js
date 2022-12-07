import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import {  } from "";
// import increment from '././CounterSlice.js'
function Counter() {
  const state=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>counter {state}</h1>
      <button onClick={()=>dispatch(increment()  )}>Incriment</button>
      <button onClick={()=>dispatch(decrement() )}>decrimnet</button>
      
    </div>
  )
}

export default Counter;
