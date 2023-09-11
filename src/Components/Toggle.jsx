// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Toggle() {
    const[isOn, setIsOn ] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn)
    }

  return (
    <div className='mt-10 bg-gray-500 text-white'>
    <h1>Toggle On and Off</h1>
        <button className='border border-gray-950 p-2 rounded-lg' onClick={handleClick}>
            {isOn ? 'ON' : 'OFF'}
        </button>
    </div>
  )
}

export default Toggle