import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";


const ToDoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleSave = () => {
    if (updatedText.trim() === "") return;
    onEdit(todo.id, updatedText);
    setEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "Done" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {!editing ? (
        <span
          className="todo-text"
          onDoubleClick={() => setEditing(true)}
        >
          {todo.text}
        </span>
      ) : (
        <input
          type="text"
          className="edit-input"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") setEditing(false);
          }}
          autoFocus
        />
      )}

      <div className="actions">
        {!editing && (
          <button
            className="btn small edit"
            onClick={() => setEditing(true)}
          >
            <MdEdit />
          </button>
        )}
        <button
          className="btn small delete"
          onClick={() => onDelete(todo.id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;