import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import { Todo } from './components/model';
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
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
