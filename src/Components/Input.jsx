// import React from 'react';
import React, { useState } from 'react'

function Input() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
  return (
    <div className='mt-10 bg-gray-300' >
        <input className=' bg-gray-200 border-solid border-[#000 !important' type="text" value={inputValue} onChange={handleChange} placeholder='type here' />
        <p>Typed value: {inputValue} </p>
    </div>
  )
}

export default Input

