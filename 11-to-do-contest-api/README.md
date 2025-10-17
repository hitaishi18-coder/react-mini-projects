

# 📝 React Todo App

A simple and interactive **Todo List** application built with **React**, utilizing **Context API** and **Local Storage** to manage tasks efficiently.

This project allows you to **add, edit, delete, and complete tasks** with a user-friendly interface.

---

## 🎯 Features

* **Add Todos:** Quickly add tasks with a single click.
* **Edit Todos:** Edit existing tasks inline.
* **Delete Todos:** Remove tasks permanently.
* **Mark Complete:** Toggle task completion with a checkbox.
* **Persistent Storage:** Todos are saved in `localStorage` so they stay on page reload.
* **Responsive Design:** Works perfectly on mobile and desktop.
* **Interactive UI:** Color-coded completed and pending tasks for better clarity.

---

## 🛠 Tech Stack

* **React.js** (Functional Components & Hooks)
* **Context API** (State Management)
* **Local Storage** (Persistent Todos)
* **Tailwind CSS** (Styling)

---

## 📸 Screenshot

![Todo App Screenshot](https://via.placeholder.com/600x400?text=Your+App+Screenshot)

---

## ⚡ Usage

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/react-todo-app.git
cd react-todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

* The app will run at `http://localhost:5173`

---

## 🧩 Folder Structure

```
src/
│
├─ assets/
│   └─ contest.jsx       # Context Provider
│
├─ components/
│   ├─ TodoForm.jsx      # Add new todos
│   └─ TodoItem.jsx      # Individual todo item
│
├─ App.jsx
└─ index.js
```

---

## 🔧 How It Works

* **Adding a Todo:** Enter a task in the input field and click **Add**.
* **Editing a Todo:** Click the ✏️ icon to edit, then 📁 to save. Completed tasks cannot be edited.
* **Deleting a Todo:** Click the ❌ icon.
* **Completing a Todo:** Click the checkbox to mark the task complete/incomplete.

Todos are saved automatically to the browser’s **local storage**, ensuring your tasks persist even after refreshing the page.

---

## 💡 Future Enhancements

* Add **categories** or **tags** for tasks.
* Implement **filtering and search** options.
* Add **drag-and-drop** to reorder tasks.
* Integrate **dark/light mode toggle**.

---

## 📦 License

This project is **open source** and available under the [MIT License](LICENSE).

