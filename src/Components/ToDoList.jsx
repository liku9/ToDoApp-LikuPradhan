import React from "react";
import TodoItem from "./ToDoItem";

const ToDoList = ({ todos, onDelete, onToggle, onEdit }) => {
  return (
    <section className="todo-section">
      {todos.length === 0 ? (
        <p className="no-task">No Task here !</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}  // unique id or key
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default ToDoList;