✅ Counter App with Increment & Decrement Limits
This React app displays a counter that starts at **10** and allows users to **increment** or **decrement** the value using buttons — with limits set between **0 and 30**.

🚀 Live Preview
To run the app locally:

```bash
git clone https://github.com/hitaishi18-coder/react-counter-app.git  
cd react-counter-app  
npm install  
npm run dev  
```

🧠 About the Project
This project demonstrates:

🔢 Counter functionality using **React useState**

🚫 Value limiting using **conditional logic** (min = 0, max = 30)

⚛️ Component reusability with a separate **Header (Hitaishi component)**

🧩 Clean and structured component layout

🛠 Tech Stack
⚛️ React (Vite)
🎯 Functional Components
🧠 useState Hook
💅 Custom CSS styling

📂 Folder Structure

```arduino
react-counter-app/
├── src/
│   ├── App.jsx         // Main component handling counter logic
│   ├── Hitaishi.tsx    // Header component displaying the title
│   ├── App.css         // Styling for the counter UI
│   ├── index.css       // Global styles
│   └── main.jsx        // Entry point rendering <App />
├── index.html
├── package.json
└── vite.config.js
```

📸 Features
✅ Counter starts from **10**
✅ Increment button increases value up to **30**
✅ Decrement button decreases value down to **0**
✅ Clean, minimal, and centered UI
✅ Reusable header component

💡 How It Works

**In App.jsx**

* The counter state is initialized with `useState(10)`.
* `addValue()` increments the counter until **30**.
* `subtractValue()` decrements the counter until **0**.
* Both functions use the **functional update pattern** for reliable state changes.

**In Hitaishi.tsx**

* Displays a simple title header — “COUNTER”.

🔍 Example Usage
User clicks **+ Add** → counter increases by 1 (until 30)
User clicks **− Subtract** → counter decreases by 1 (until 0)

🧑‍💻 Author
Built with 💚 by [@hitaishi18-coder](https://github.com/hitaishi18-coder)
