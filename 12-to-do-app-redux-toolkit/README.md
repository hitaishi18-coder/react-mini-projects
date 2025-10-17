
# 📝 Redux Toolkit Todo App

A simple **Todo App** built using **React** and **Redux Toolkit**, designed for beginners to understand global state management in a clean and easy way.

---

## 🚀 Features

✅ Add new todos  
✅ Delete existing todos  
✅ Update/Edit todos  
✅ Beautiful UI with Tailwind CSS  
✅ Uses Redux Toolkit for state management  

---

## 📁 Folder Structure

```
src/
 ┣ app/
 ┃ ┗ store.js
 ┣ features/
 ┃ ┗ todo/
 ┃    ┗ todoSlice.js
 ┣ components/
 ┃ ┣ AddTodo.jsx
 ┃ ┗ Todo.jsx
 ┗ App.jsx
```

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository or copy project files.  
```bash
git clone https://github.com/hitaishi18-coder/redux-todo-app.git
```

2️⃣ Navigate into the folder.  
```bash
cd redux-todo-app
```

3️⃣ Install dependencies.  
```bash
npm install
```

4️⃣ Run the app.  
```bash
npm run dev
```

The app will open at **http://localhost:5173/** (if using Vite).

---

## 🧠 Redux Toolkit Overview

| Function | Purpose |
|-----------|----------|
| `createSlice()` | Creates reducers + actions automatically |
| `configureStore()` | Creates the Redux store |
| `useDispatch()` | Sends actions to store |
| `useSelector()` | Reads data from store |

### Example Slice (`todoSlice.js`)
```js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }]
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find(t => t.id === id);
      if (todo) todo.text = newText;
    }
  }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

---

## 🧩 Code Flow

```
User enters text → dispatch(addTodo())
           ↓
Reducer updates todos state
           ↓
UI re-renders automatically
```

---

## 📦 Tech Stack

- ⚛️ React.js
- 🧰 Redux Toolkit
- 🎨 Tailwind CSS
- 🧑‍💻 Vite (for fast development server)

## 🏁 Summary

This project is a great starting point to understand **Redux Toolkit**, how to manage global state, and integrate it into React components easily.

