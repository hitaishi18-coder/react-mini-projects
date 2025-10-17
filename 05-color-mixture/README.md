✅ RGB Color Mixer with Local Storage 🎨
This React app lets users **create custom colors** by adjusting RGB sliders in real time. The chosen color can be **saved to local storage**, so it remains available even after the page reloads.

🚀 Live Preview
To run the app locally:

```bash
git clone https://github.com/hitaishi18-coder/react-color-mixer.git  
cd react-color-mixer  
npm install  
npm run dev  
```

🧠 About the Project
This project demonstrates:

🌈 Real-time **color blending** using RGB values

💾 **Local Storage** persistence for saving user preferences

⚛️ **React useState Hook** for managing color states

🎨 Dynamic inline styling to reflect the chosen color instantly

🛠 Tech Stack
⚛️ React (Vite)
🎯 Functional Components
🧠 useState Hook
💾 Local Storage for data persistence
💅 Custom CSS Styling

📂 Folder Structure

```arduino
react-color-mixer/
├── src/
│   ├── App.jsx          // Main component handling RGB color mixing logic
│   ├── App.css          // Styling for sliders and color preview
│   ├── main.jsx         // Entry point rendering <App />
│   └── index.css        // Global styles
├── index.html
├── package.json
└── vite.config.js
```

📸 Features
✅ Adjust Red, Green, and Blue values with sliders
✅ Live color preview updates instantly
✅ Save custom color combinations to Local Storage
✅ Automatically loads saved colors on reload
✅ Simple, minimal UI for easy color experimentation

💡 How It Works

**In App.jsx**

* Retrieves saved color values (`r`, `g`, `b`) from **localStorage**.
* Uses `useState` to manage RGB values individually.
* Each slider controls one color channel (0–255).
* The background of the color box updates dynamically with `rgb(r, g, b)`.
* The **Save button** stores the current RGB values in localStorage.

🔍 Example Usage
1️⃣ Move sliders to create your desired color.
2️⃣ Watch the color box update live.
3️⃣ Click **Save Color Combination** to store it locally.
4️⃣ Refresh — your saved color will reload automatically.

🧑‍💻 Author
Built with 💚 by [@hitaishi18-coder](https://github.com/hitaishi18-coder)
