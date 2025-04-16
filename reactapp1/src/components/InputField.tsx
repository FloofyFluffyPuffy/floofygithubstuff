// inputfield.tsx
import React from 'react';
import './style.css';

const InputField = () => {
  return (
    <form className='input'>
      <input type="text" placeholder='Enter a task' className='inputBox'/>
      <button className='inputSubmit' type='submit'> </button>
    </form>
  );
};

export default InputField;
