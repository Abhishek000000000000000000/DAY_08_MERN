import React, { useState, useRef } from 'react';
import { useTheme } from './ThemeContext';

const UserForm = () => {
  const [name, setName] = useState('');
  const emailRef = useRef(null);
  const [validationError, setValidationError] = useState('');

    const { theme } = useTheme();
  

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 3) {
      setValidationError('Name must be at least 3 characters long.');
    } else {
      setValidationError('');
    }
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ background: theme.background, color: theme.text }}> 
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        {validationError && <p>{validationError}</p>}
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          ref={emailRef}
        />
      </div>

      
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
