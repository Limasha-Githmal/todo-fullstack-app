export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '0.75rem',
      opacity: todo.done ? 0.6 : 1,
      backgroundColor: todo.done ? '#f9f9f9' : '#fff',
    }}>
      <h3 style={{
        margin: '0 0 4px 0',
        textDecoration: todo.done ? 'line-through' : 'none',
        color: todo.done ? '#999' : '#000',
      }}>
        {todo.title}
      </h3>
      {todo.description && (
        <p style={{
          margin: '0 0 8px 0',
          color: '#666',
          textDecoration: todo.done ? 'line-through' : 'none',
        }}>
          {todo.description}
        </p>
      )}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => onToggle(todo._id)}>
          {todo.done ? 'Undo' : 'Done'}
        </button>
        <button onClick={() => onEdit(todo)}>
          Edit
        </button>
        <button
          onClick={() => onDelete(todo._id)}
          style={{ color: 'red' }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}