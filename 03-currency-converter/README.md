✅ Currency Converter with Live Exchange Rates
This React app allows users to **convert currencies in real time** by selecting “From” and “To” currencies, entering an amount, and getting the **converted value instantly**. It also includes a **swap feature** to interchange currencies effortlessly.

🚀 Live Preview
To run the app locally:

```bash
git clone https://github.com/hitaishi18-coder/react-currency-converter.git  
cd react-currency-converter  
npm install  
npm run dev  
```

🧠 About the Project
This project demonstrates:

💱 Currency conversion using **live exchange rate data**

🔄 Real-time **swap functionality** between selected currencies

⚛️ **Custom hook (`useCurrencyInfo`)** to fetch and manage API data

🧩 Reusable and clean component design

🛠 Tech Stack
⚛️ React (Vite)
🎯 Functional Components
🧠 useState & useId Hooks
📡 Custom Hook (useCurrencyInfo)
💅 Custom CSS Styling

📂 Folder Structure

```arduino
react-currency-converter/
├── src/
│   ├── components/
│   │   └── Input.tsx        // Main currency converter component
│   ├── hooks/
│   │   └── useCurrencyInfo.js // Custom hook fetching exchange rates
│   ├── App.tsx              // Root component rendering Input
│   ├── App.css              // Styling for converter UI
│   ├── main.jsx             // Entry point rendering <App />
│   └── index.css            // Global styles
├── index.html
├── package.json
└── vite.config.js
```

📸 Features
✅ Convert between multiple currencies
✅ Swap “From” and “To” currencies with one click
✅ Live fetching of exchange rate data
✅ Real-time conversion results
✅ User-friendly and minimal UI

💡 How It Works

**In Input.tsx**

* Manages state for `amount`, `from`, `to`, and `convertedAmount`.
* Uses the **custom hook** `useCurrencyInfo()` to get exchange rates.
* **Convert button** multiplies the amount by the rate of the selected “To” currency.
* **Swap button** exchanges the “From” and “To” currency selections.

**In App.tsx**

* Simply imports and renders the `Input` component inside a container.

🔍 Example Usage
1️⃣ Enter amount → Select “From” currency → Select “To” currency → Click **Convert**
2️⃣ Click **Swap Currency** to instantly interchange the two selected currencies

🧑‍💻 Author
Built with 💚 by [@hitaishi18-coder](https://github.com/hitaishi18-coder)
