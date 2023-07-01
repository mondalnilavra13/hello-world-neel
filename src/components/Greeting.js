import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');
  
  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input 
        type="text" 
        id="nameInput" 
        value={name} 
        onChange={handleChange} 
      />
      {name && <h2>Hello, {name}!</h2>}
    </div>
  );
}

export default Greeting;
