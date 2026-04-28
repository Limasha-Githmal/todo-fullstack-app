import { useState } from 'react';
import './TodoItem.css';

// Helper function to format date nicely
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

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

      {/* Timestamps */}
      <div className="todo-timestamps">
        <span>Created: {formatDate(todo.createdAt)}</span>
        {todo.createdAt !== todo.updatedAt && (
          <span>Updated: {formatDate(todo.updatedAt)}</span>
        )}
      </div>

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