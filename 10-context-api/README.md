-

# 👤 React Login with Context API

This project demonstrates a simple **login system** using **React Context API** to manage global user state across components. Users can log in with a username and password, and the profile component displays their information after login.

---

## 🚀 Features

* ⚛️ Built with **React 18**
* 🌐 Global state management using **React Context API**
* 🧩 Simple login form with username and password
* 👤 Profile component displays logged-in user
* 🎨 Styled with **Tailwind CSS**
* 🏗️ Component-based structure for scalability

---

## 📁 Folder Structure

```
react-context-login/
├── src/
│   ├── Components/
│   │   ├── Login.jsx
│   │   └── Profile.jsx
│   ├── Context/
│   │   ├── UserContext.js
│   │   └── UserContextProvider.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

---

## 🧰 Technologies Used

| Technology       | Purpose                             |
| ---------------- | ----------------------------------- |
| **React 18**     | UI library                          |
| **Context API**  | State management for logged-in user |
| **Tailwind CSS** | Styling and layout                  |
| **Vite / CRA**   | Project bundling and dev server     |

---

## ⚙️ Installation & Setup

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/react-context-login.git

# 2️⃣ Navigate into the project
cd react-context-login

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

---

## 🗺️ Components Overview

| Component                 | Description                                                            |
| ------------------------- | ---------------------------------------------------------------------- |
| `Login.jsx`               | Login form that updates the global user state                          |
| `Profile.jsx`             | Displays user info after login; prompts login if user is not logged in |
| `UserContext.js`          | Creates a Context for user state                                       |
| `UserContextProvider.jsx` | Wraps the app and provides the Context value                           |

---

## 🧠 How It Works

1. **Context Setup**
   `UserContext` is created using `React.createContext()`.

2. **Provider**
   `UserContextProvider` wraps the app and provides `user` and `setUser` state.

3. **Login Form**

   * Users input a username and password
   * On submit, `setUser({ username, password })` updates the global state

4. **Profile Component**

   * Uses `useContext(UserContext)` to access `user`
   * Displays a welcome message if logged in, otherwise asks to login

```jsx
const { user } = useContext(UserContext);

if (!user) return <>Please login</>;
return <>Welcome {user.username}</>;
```

---

## 🖼️ Screenshots

**Login Form:**
![Login Form](https://i.ibb.co/2M7rtLk/Remote1.png)

**Profile View:**

```
Welcome Hitaishi
```

---

## 💡 Learning Objectives

* Understand **React Context API** for global state
* Learn how to **share state across components** without prop drilling
* Build a simple **login/profile flow** in React
* Practice **Tailwind CSS styling**

---

## 🧑‍💻 Author

**Hitaishi Lohtia**
🔗 [GitHub Profile](https://github.com/hitaishi18-coder)

---

## 🪪 License

This project is open source under the [MIT License](LICENSE).

