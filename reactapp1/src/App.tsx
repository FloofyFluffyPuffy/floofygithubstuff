import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
const App: React.FC = () => {
  const [todo1, setTodo1] = useState<string>("");
  const [todos1, setTodos1] = useState<Todo[]>([]);
  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if (todo1)
    {
      setTodos1([...todos1, {id: Date.now(), todo:todo1, isDone:false}])
      setTodo1("");
    }
  }
  console.log(todos1)
  return (
    <div className="App">
      <div className="heading">Taskify</div>
      <InputField todo2= {todo1} setTodo2={setTodo1} handleAdd={handleAdd} />
      <TodoList todos3={todos1} setTodos3={setTodos1}/>
    </div>
  );
};

export default App;
