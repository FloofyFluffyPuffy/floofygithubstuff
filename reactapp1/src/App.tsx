import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if (todo)
    {
      setTodos([...todos, {id: Date.now(), todo:todo, isDone:false}])
      setTodo("");
    }
  }
  console.log(todos)
  return (
    <div className="App">
      <div className="heading">Taskify</div>
      <InputField todo= {todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
