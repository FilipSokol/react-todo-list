import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    saveLocalTodos();
  }, [todos]);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <div className="container">
        <div className="form-container">
          <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
          />
          <hr />
        </div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
