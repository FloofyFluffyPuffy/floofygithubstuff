// inputfield.tsx
import React, { useRef, useState } from 'react';
import './style.css';
interface Props {
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
    }}>
      <input
      ref={inputRef} 
      type="input"
       value={todo}
       onChange={(e) => setTodo(e.target.value)}
       placeholder='Enter a task' className='inputBox'/>
      <button className='inputSubmit' type='submit'>Go</button>
    </form>
  );
};

export default InputField;
