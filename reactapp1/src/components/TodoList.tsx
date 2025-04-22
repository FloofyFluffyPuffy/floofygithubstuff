import React from 'react'
import "./style.css";
import { Todo } from './model';
import SingleTodo from './singleTodo';
interface Props{
    todos3:Todo[]
    setTodos3: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<Props> = ({todos3, setTodos3}) => {
  return (
    <div className='todos'>
        {todos3.map((todo) => (
            <SingleTodo 
            todo4={todo}
            key={todo.id}
            todos4={todos3}
            setTodos4={setTodos3}
            /> 
    ))}
        
    </div>
  )
}

export default TodoList
