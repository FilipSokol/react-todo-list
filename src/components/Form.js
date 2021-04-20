import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        placeholder="New Task"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button type="submit" className="todo-button" onClick={submitTodoHandler}>
        Add
      </button>
    </form>
  );
};

export default Form;
