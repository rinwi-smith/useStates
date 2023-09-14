import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddItem = () => {
    if (text.trim() !== '') {
      setItems([...items, text]);
      setText('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className='mt-10 bg-gray-300'>
      <h2>Todo List</h2>
      <input type="text" value={text} onChange={handleInputChange} className=' bg-gray-200 border border-solid border-[#000]' />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;