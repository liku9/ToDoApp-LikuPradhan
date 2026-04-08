import React, { useState, useRef } from "react";
import Header from "./Components/Header";
import TodoList from "./Components/ToDoList";
import { MdLibraryAdd } from "react-icons/md";

const App = () => {
  // Step 1: Main state of todos
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  // Step 2: Add Todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    if (!text) return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    inputRef.current.value = "";
  };

  // Step 3: Delete Todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Step 4: Toggle complete
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Step 5: Edit Todo
  const handleEdit = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  return (
    <div className="app">
      {/* Header Component */}
      <Header />

      {/* Add form */}
      <form className="todo-form" onSubmit={handleAddTodo}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Add Your Task..."
          className="input-box"
        />
        <button type="submit" className="btn">
          <MdLibraryAdd />
        </button>
      </form>

      {/* Todo List */}
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
