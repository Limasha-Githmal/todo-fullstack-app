import { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, toggleDone, deleteTodo } from './api/todos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await getTodos();
      setTodos(res.data);
    } catch {
      setError('Failed to load todos. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCreate = async (data) => {
    try {
      setError('');
      const res = await createTodo(data);
      setTodos([res.data, ...todos]);
    } catch {
      setError('Failed to create todo. Please try again.');
    }
  };

  const handleUpdate = async (data) => {
    try {
      setError('');
      const res = await updateTodo(editingTodo._id, data);
      setTodos(todos.map(t => t._id === editingTodo._id ? res.data : t));
      setEditingTodo(null);
    } catch {
      setError('Failed to update todo. Please try again.');
    }
  };

  const handleToggle = async (id) => {
    setTodos(todos.map(t => t._id === id ? { ...t, done: !t.done } : t));
    try {
      await toggleDone(id);
    } catch {
      setError('Failed to toggle status.');
      fetchTodos();
    }
  };

  const handleDelete = async (id) => {
    setTodos(todos.filter(t => t._id !== id));
    try {
      await deleteTodo(id);
    } catch {
      setError('Failed to delete todo.');
      fetchTodos();
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      fontFamily: 'sans-serif',
      padding: '0 1rem'
    }}>
      <h1 style={{ textAlign: 'center' }}>TODO App</h1>

      {error && (
        <p style={{
          color: 'red',
          background: '#fee',
          padding: '0.75rem',
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
         {error}
        </p>
      )}

      <TodoForm
        onSubmit={editingTodo ? handleUpdate : handleCreate}
        editingTodo={editingTodo}
        onCancel={() => setEditingTodo(null)}
      />

      <hr style={{ margin: '1.5rem 0' }} />

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading todos...</p>
      ) : (
        <>
          <h2>Your Todos ({todos.length})</h2>
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onEdit={setEditingTodo}
            onDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
}