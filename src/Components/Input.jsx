// import React from 'react';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function Input() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

  return (
    <div className='mt-10 bg-gray-300' >
    <h1>Input Field</h1>
        <input className=' bg-gray-200 border border-solid border-[#000]' type="text" value={inputValue} onChange={handleChange} placeholder='type here' />
        <p>Typed value: {inputValue} </p>
    </div>
  )
}

export default Input;

