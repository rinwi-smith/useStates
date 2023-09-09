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
       <h1>Simple Counter</h1>

        <div className='flex justify-center items-center'>
          <button className='mr-5 bg-[#000] p-2 text-white' onClick={increment}>+</button>
          <p>{counter}</p>
          <button className='ml-5 bg-[#000] p-2 text-white'  onClick={decrement}>-</button>
        </div>
      </>
    )
  }
export default Counter;