// inputfield.tsx
import React, { useRef, useState } from 'react';
import './style.css';
interface Props {
  todo2:string;
  setTodo2:React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({todo2, setTodo2, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
    }}>
<input
  ref={inputRef} 
  type="input"
  value={todo2}
  onChange={(e) => setTodo2(e.target.value)}
  placeholder='Enter a task' 
  className='input__box' 
/>
<button className='input_submit' type='submit'>Go</button>
    </form>
  );
};  

export default InputField;
