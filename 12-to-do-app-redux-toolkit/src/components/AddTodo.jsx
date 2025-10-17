import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="flex w-full max-w-md">
      <input
        type="text"
        placeholder="Add your new task..."
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-3 rounded-l-2xl border-none focus:outline-none placeholder-gray-500 bg-white/50 backdrop-blur-md text-gray-800 shadow-md"
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-r-2xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
