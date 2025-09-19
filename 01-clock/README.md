✅ Digital Clock with Live Color Change
This React app displays a live digital clock that updates every second and allows users to dynamically change the clock text color using a dropdown.

🚀 Live Preview
To run the app locally:

bash
Copy code
git clone https://github.com/hitaishi18-coder/react-digital-clock.git
cd react-digital-clock
npm install
npm run dev
🧠 About the Project
This project demonstrates:

🕒 Real-time digital clock using setInterval

🎨 Dynamic style updates using React state

📤 Props used to pass selected color to the child component

⚛️ useEffect hook for setting up the interval on mount

🛠 Tech Stack
⚛️ React (Vite)

🎯 Functional Components

🧠 useEffect & useState Hooks

💅 Inline CSS for styling

📂 Folder Structure
arduino
Copy code
react-digital-clock/
├── src/
│   ├── App.jsx        // Main component with color selector and Clock
│   ├── Clock.jsx      // Clock logic and UI
│   ├── App.css        // Styling
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
📸 Features
✅ Live digital clock updates every second
✅ Dropdown to change clock color in real time
✅ Clean, minimal UI with inline styling
✅ Separation of concerns using reusable components

💡 How It Works
In App.jsx
color state manages the selected color.

A dropdown <select> lets users pick from red, yellow, pink, and white.

The selected color is passed to <Clock /> via props.

In Clock.jsx
Uses useState to store the current time.

A setInterval inside useEffect updates the time every second.

The time is styled using the color prop received from the parent.

🔍 Example Usage

Clock styled dynamically with selected color

🧑‍💻 Author
Built with 💚 by @hitaishi18-coder