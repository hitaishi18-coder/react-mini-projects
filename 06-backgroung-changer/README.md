✅ Background Color Changer 🎨
This React app allows users to **change the background color** of the screen dynamically with just one click. It provides multiple color buttons — each instantly updates the background, creating a smooth and interactive experience.

🚀 Live Preview
To run the app locally:

```bash
git clone https://github.com/hitaishi18-coder/react-background-color-changer.git  
cd react-background-color-changer  
npm install  
npm run dev  
```

🧠 About the Project
This project demonstrates:

🎨 Real-time **background color change** using React state

⚛️ **Event handling** with button clicks

🧩 **Reusable button components** using `shadcn/ui`

💅 **Responsive design** with Tailwind CSS

🛠 Tech Stack
⚛️ React (Vite)
🎯 Functional Components
🧠 useState Hook
💅 Tailwind CSS + shadcn/ui for styling

📂 Folder Structure

```arduino
react-background-color-changer/
├── src/
│   ├── App.jsx               // Main component handling color change logic
│   ├── App.css               // Custom styles (if any)
│   ├── main.jsx              // Entry point rendering <App />
│   └── components/ui/button  // Reusable Button component from shadcn/ui
├── index.html
├── package.json
└── vite.config.js
```

📸 Features
✅ Instantly change background color with a single click
✅ 10 predefined color options (Red, Green, Blue, Black, Pink, Purple, Gray, Yellow, White, Lavender)
✅ Smooth transitions with Tailwind styling
✅ Fixed floating color palette for easy access
✅ Responsive and minimal design

💡 How It Works

**In App.jsx**

* The background color is controlled using `useState("white")`.
* Each color button updates the state via `onClick`, which changes the page background.
* Buttons are created using the **shadcn/ui Button** component with inline background colors.
* The color buttons are wrapped in a fixed container at the bottom center of the screen for easy use.

🔍 Example Usage
1️⃣ Launch the app — background starts as **white**.
2️⃣ Click any color button — the background updates instantly.
3️⃣ Try different combinations to preview your favorite shade.

🧑‍💻 Author
Built with 💚 by [@hitaishi18-coder](https://github.com/hitaishi18-coder)
