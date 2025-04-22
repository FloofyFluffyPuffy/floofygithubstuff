import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./style.css";

type Props = {
    todo4: Todo,
    todos4: Todo[],
    setTodos4: React.Dispatch<React.SetStateAction<Todo[]>>}
    
const SingleTodo: React.FC<Props> = ({ todo4, todos4, setTodos4 }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo4.todo)
  const handleDone = (id: number) => {
    setTodos4(todos4.map(todo => 
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
    )};

  const handleDelete = (id:number) => {
    setTodos4(todos4.filter((todo) => todo.id !== id))
  }
  
  const handleEdit = (e:React.FormEvent, id:number) => {
    e.preventDefault();
    setTodos4(
      todos4.map((todo) => 
        ( todo.id === id ?  {...todo, todo:editTodo} : todo 
       )))
       setEdit(false);
  }
  
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()}, [edit])

  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e,todo4.id)}>
      {
        edit?  (<input value={editTodo} 
          ref={inputRef}
          onChange={(e) => {setEditTodo(e.target.value)}} 
          className="todos__single--text"/>) : (todo4.isDone ? (
          <s className="todos__single--text">{todo4.todo}</s>
       )
       : (
         <span className="todos__single--text">{todo4.todo}</span>
       ))
      }
        <div>
          <span className="icon" onClick={ () => {
            if(!edit && !todo4.isDone)
            {
              setEdit(!edit)
            }}
          }>
            {/* @ts-ignore */}
            <AiFillEdit />
          </span>
          
          <span className="icon" onClick={() => handleDelete(todo4.id)}>
            {/* @ts-ignore */}
            <AiFillDelete />
          </span>

          <span className="icon" onClick={() => handleDone(todo4.id)}>
            {/* @ts-ignore */}
            <MdDone />
          </span>
        </div>
    </form>
  )
}


export default SingleTodo