import { useState } from 'react';
import './TodoItem.css';

export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [removing, setRemoving] = useState(false);

  const handleDelete = () => {
    setRemoving(true);
    setTimeout(() => {
      onDelete(todo._id);
    }, 280);
  };

  return (
    <div className={`todo-item ${todo.done ? 'done' : ''} ${removing ? 'removing' : ''}`}>
      <h3 className="todo-title">{todo.title}</h3>
      {todo.description && (
        <p className="todo-description">{todo.description}</p>
      )}
      <div className="todo-actions">
        <button
          className={todo.done ? 'btn-undo' : 'btn-done'}
          onClick={() => onToggle(todo._id)}
        >
          {todo.done ? 'Undo' : 'Done'}
        </button>
        <button className="btn-edit" onClick={() => onEdit(todo)}>
          Edit
        </button>
        <button className="btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}