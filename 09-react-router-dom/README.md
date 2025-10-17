# 🌐 React Router Project

This project demonstrates routing in a React application using **React Router v6**, including dynamic routes, data loading with loaders, and Tailwind CSS-based UI components.

---

## 🚀 Features

* ⚛️ Built with **React 18**
* 🧭 Navigation using **React Router DOM v6**
* 🌈 Styled with **Tailwind CSS**
* 🧩 Dynamic Routing (e.g., `/user/:id`)
* 📦 Data fetching via `loader` (GitHub API integration)
* 🧠 Organized component-based structure
* 📱 Fully responsive design

---

## 📁 Folder Structure

```
react-router-project/
├── src/
│   ├── Components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Github.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Layout.jsx
│   │   └── User.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css (if used)
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

---

## 🧰 Technologies Used

| Technology              | Purpose                                         |
| ----------------------- | ----------------------------------------------- |
| **React 18**            | UI Framework                                    |
| **React Router DOM v6** | Navigation & Routing                            |
| **Tailwind CSS**        | Styling                                         |
| **Vite**                | Fast bundler & dev server                       |
| **GitHub API**          | Dynamic data fetching (followers, avatar, etc.) |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/react-router-project.git

# 2️⃣ Navigate into the project directory
cd react-router-project

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev
```

---

## 🗺️ Routes Overview

| Route       | Component | Description                          |
| ----------- | --------- | ------------------------------------ |
| `/`         | `Home`    | Landing page with a download section |
| `/about`    | `About`   | Information about React development  |
| `/contact`  | `Contact` | Contact form with details            |
| `/github`   | `Github`  | Fetches live data from GitHub API    |
| `/user/:id` | `User`    | Dynamic user route example           |

---

## 🔗 GitHub Data Loader

The **Github** page uses a `loader` function to fetch live data from the GitHub API:

```jsx
export const GithubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hitaishi18-coder');
  return response.json();
};
```

The data (followers, avatar, etc.) is displayed dynamically using `useLoaderData()`.

---

## 🧱 Component Highlights

* **`Header.jsx`** → Sticky navigation with active link highlighting (`NavLink`)
* **`Footer.jsx`** → Multi-column responsive footer
* **`Home.jsx`** → Hero section with CTA
* **`Contact.jsx`** → Form layout with Tailwind styling
* **`Github.jsx`** → API data rendering using React Router loader

---

## 🖼️ Preview

![Home Page Preview](https://i.ibb.co/5BCcDYB/Remote2.png)

---

## 💡 Learning Objectives

* Learn to use **React Router DOM v6** effectively
* Understand **layout routing** with nested components
* Use **data loaders** for prefetching API data
* Practice **responsive design** with Tailwind CSS

---

## 🧑‍💻 Author

**👩‍💻 Hitaishi Lohtia**
🔗 [GitHub Profile](https://github.com/hitaishi18-coder)

---

## 🪪 License

This project is open source and available under the [MIT License](LICENSE).

