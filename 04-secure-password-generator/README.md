✅ Secure Password Generator 🔐
This React app generates **strong and customizable passwords** based on user preferences like **length**, **numbers**, and **special characters**. It also includes a **copy-to-clipboard** feature with a live **toast alert** for better UX.

🚀 Live Preview
To run the app locally:

```bash
git clone https://github.com/hitaishi18-coder/react-password-generator.git  
cd react-password-generator  
npm install  
npm run dev  
```

🧠 About the Project
This project demonstrates:

⚡ Real-time password generation using **React hooks**

🔢 Custom password length selection with a range slider

🔠 Option to include **numbers** and **special characters**

📋 One-click **copy-to-clipboard** functionality

💬 Auto-disappearing **toast alert** when password is copied

🛠 Tech Stack
⚛️ React (Vite)
🎯 Functional Components
🧠 useState, useEffect, useCallback & useRef Hooks
💅 Tailwind CSS + shadcn/ui for modern styling

📂 Folder Structure

```arduino
react-password-generator/
├── src/
│   ├── App.jsx             // Main logic for password generation
│   ├── App.css             // Styling for UI components
│   ├── main.jsx            // Entry point rendering <App />
│   └── components/ui/      // UI elements from shadcn (Button, Input)
├── index.html
├── package.json
└── vite.config.js
```

📸 Features
✅ Generate secure passwords instantly
✅ Adjustable length (6–100 characters)
✅ Include/exclude numbers and special characters
✅ One-click copy to clipboard
✅ Subtle toast notification after copy
✅ Clean, minimal, responsive UI

💡 How It Works

**In App.jsx**

* Uses `useState` to manage password settings: `length`, `number`, `charAllowed`, and generated `password`.
* `useCallback` ensures performance optimization for password generation and clipboard copying.
* Passwords are built dynamically from strings containing **letters, numbers, and symbols**.
* A `useRef` reference allows copying password text directly.
* When a user clicks **Copy**, a temporary “Password copied!” alert appears.

**Password Generation Logic**
1️⃣ User selects length (6–100).
2️⃣ Chooses whether to include numbers or special characters.
3️⃣ The app creates a random password and displays it instantly.
4️⃣ Clicking **Copy** saves it to clipboard with a confirmation toast.

🔍 Example Usage

* Move the range slider → password length updates in real time.
* Toggle checkboxes for Numbers / Characters.
* Click **Copy** to save the generated password.

🧑‍💻 Author
Built with 💚 by [@hitaishi18-coder](https://github.com/hitaishi18-coder)
