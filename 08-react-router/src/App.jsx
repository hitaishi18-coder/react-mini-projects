// App.jsx
// Main routing file with all routes, including nested routes for College.

import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Book from "./Book";
import User from "./User";
import UserDetails from "./UserDetails";
import Login from "./Login";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <div style={{ background: "#0d1117", minHeight: "100vh" }}>
      {/* Header always visible */}
      <Header />

      {/* All routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* College with nested routes */}
        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="book" element={<Book />} />
        </Route>

        {/* User routes */}
        <Route path="/users" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />

        {/* 404 fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
