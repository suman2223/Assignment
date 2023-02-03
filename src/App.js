
import React, { useState, useRef } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    setTodos([...todos, inputRef.current.value]);
    inputRef.current.value = "";
  };

  const handleRemove = index => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleComplete = index => {
    setCompletedTodos([...completedTodos, todos[index]]);
    handleRemove(index);
  };

  return (
    <div style={{ padding: 20 }}>
      <nav style={{ display: "flex", justifyContent: "center" }}>
        
        <h3 style={{ margin: 0, padding: 20 }}>Todo App</h3>
      </nav>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          ref={inputRef}
          style={{ padding: 10, fontSize: 16 }}
        />
        <button
          type="submit"
          style={{ padding: 10, marginLeft: 10, fontSize: 16 }}
        >
          Add Todo
        </button>
      </form>
      <h4 style={{ marginBottom: 10 }}>Pending Todos:</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
              padding: 10,
              backgroundColor: "#eee"
            }}
          >
            {todo}
            <div>
              <button
                onClick={() => handleComplete(index)}
                style={{
                  padding: 10,
                  backgroundColor: "#4caf50",
                  color: "white",
                  marginRight: 10
                }}
              >
                Complete
              </button>
              <button
                onClick={() => handleRemove(index)}
                style={{ padding: 10, backgroundColor: "#f44336", color: "white" }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h4 style={{ marginBottom: 10 }}>Completed Todos:</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {completedTodos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
              padding: 10,
              backgroundColor: "#eee"
            }}
            >
            {todo}
            <div>
              <button
                onClick={() => handleRemove(index)}
                style={{ padding: 10, backgroundColor: "#f44336", color: "white" }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;






