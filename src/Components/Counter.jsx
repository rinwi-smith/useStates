import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';

function Counter() {
    const [counter, setCounter] = useState(0)
  
    const increment = () => {
      setCounter(counter + 1);
    }
    const decrement = () => {
      setCounter(counter - 1);
    }
    
    return (
      <>
      <div className='bg-gray-500'>
       <h1>Simple Counter</h1>
        <div className='flex justify-center items-center text-white'>
          <button className='mr-5  p-2 border border-black rounded-lg font-bold' onClick={increment}>+</button>
          <p>{counter}</p>
          <button className='ml-5  p-2 border border-black rounded-lg font-bold '  onClick={decrement}>-</button>
        </div>
      </div>
      </>
    )
  }
export default Counter;