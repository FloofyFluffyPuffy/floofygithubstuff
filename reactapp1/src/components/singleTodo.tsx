import React from 'react'
import { Todo } from './model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./style.css";

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className='todos__single'>
        <span className="todos__single--text">{todo.todo}</span>

        <div>
          <span className="icon">
            {/* @ts-ignore */}
            <AiFillEdit />
          </span>
          
          <span className="icon">
            {/* @ts-ignore */}
            <AiFillDelete />
          </span>

          <span className="icon">
            {/* @ts-ignore */}
            <MdDone />
          </span>
        </div>
    </form>
  )
}

export default SingleTodo