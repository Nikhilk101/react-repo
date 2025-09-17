import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main>
      <h1>Todo App</h1>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? "completed" : ""}>
                {todo.text}
              </span>
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
