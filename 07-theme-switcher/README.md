✅ Dark–Light Theme Toggle with Product Card 🌓
This React app allows users to **toggle between light and dark themes** using a custom Theme Context. It also displays a **responsive product card** styled with Tailwind CSS.

🚀 Live Preview
To run the app locally:

```bash
git clone https://github.com/hitaishi18-coder/react-theme-toggle-card.git  
cd react-theme-toggle-card  
npm install  
npm run dev  
```

🧠 About the Project
This project demonstrates:

🌗 Theme switching using **React Context API**

⚛️ **Custom Hooks** for theme management (`useTheme`)

💡 Persistent theme updates using the **useEffect hook**

🃏 **Reusable Product Card component** styled with Tailwind CSS

🛠 Tech Stack
⚛️ React (Vite)
🎯 Functional Components
🧠 Context API + useEffect + useState
💅 Tailwind CSS for responsive UI

📂 Folder Structure

```arduino
react-theme-toggle-card/
├── src/
│   ├── App.jsx                 // Wraps app with ThemeProvider and renders components
│   ├── App.css                 // App-level styles
│   ├── contexts/
│   │   └── theme.js            // Theme context and custom hook
│   ├── components/
│   │   ├── ThemeBtn.jsx        // Toggle switch for light/dark mode
│   │   └── Card.jsx            // Product display card
│   ├── main.jsx                // Entry point rendering <App />
│   └── index.css               // Tailwind configuration styles
├── index.html
├── package.json
└── vite.config.js
```

📸 Features
✅ Toggle between **Light and Dark Mode** instantly
✅ Dynamic theme switcher using Context API
✅ Fully responsive product card with ratings, price, and “Add to Cart” button
✅ Modern Tailwind CSS design
✅ Clean, minimal layout

💡 How It Works

**In `theme.js`**

* Creates a `ThemeContext` with default values (`themeMode`, `lightTheme`, `darkTheme`).
* Exports a custom hook `useTheme()` for easy access in components.

**In `App.jsx`**

* Manages `themeMode` using `useState`.
* Applies theme class (`light` or `dark`) to the `<html>` element via `useEffect`.
* Wraps components inside `ThemeProvider` for context sharing.

**In `ThemeBtn.jsx`**

* Uses the custom `useTheme()` hook.
* Toggles theme on checkbox change using Tailwind-styled toggle button.

**In `Card.jsx`**

* Displays a product card with an image, title, rating, price, and “Add to Cart” button.
* Automatically adapts to the selected theme (light or dark).

🔍 Example Usage
1️⃣ Launch the app — starts in **Light Mode**.
2️⃣ Click the toggle switch to change between **Light** and **Dark** themes.
3️⃣ Watch the product card adapt beautifully to the theme.

🧑‍💻 Author
Built with 💚 by [@hitaishi18-coder](https://github.com/hitaishi18-coder)
