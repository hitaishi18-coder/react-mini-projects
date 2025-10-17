import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Local state for editing
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim() === "") return;
    dispatch(updateTodo({ id, newText: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6 drop-shadow-lg text-left">
        My Todos:
      </h2>

      <ul className="max-w-md mt-8 w-full space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white/40 backdrop-blur-md shadow-lg p-4 rounded-2xl hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl border-none focus:outline-none text-gray-800 shadow-inner bg-white/60"
              />
            ) : (
              <span className="text-gray-800 font-medium text-lg">{todo.text}</span>
            )}

            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="bg-green-400 text-white px-4 py-2 rounded-xl font-semibold shadow-md hover:bg-green-500 hover:scale-110 transition-all duration-300"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold shadow-md hover:bg-blue-500 hover:scale-110 transition-all duration-300"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-400 hover:scale-110 transition-all duration-300"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-400 mt-6 italic animate-pulse">
          No todos yet. Add one above!
        </p>
      )}
    </>
  );
}

export default Todo;
