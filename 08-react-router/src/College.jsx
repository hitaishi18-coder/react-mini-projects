

import { Link, NavLink, Outlet } from "react-router-dom";

export default function College() {
  const navStyle = (isActive) => ({
    padding: "8px 14px",
    borderRadius: 8,
    textDecoration: "none",
    color: isActive ? "#0d1117" : "#c9d1d9",
    background: isActive ? "#58a6ff" : "transparent",
    fontWeight: isActive ? 700 : 500,
  });

  return (
    <div style={{ padding: 40, color: "#e6edf3", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ color: "#58a6ff", marginBottom: 6 }}>🎓 College</h1>
      <p style={{ color: "#b9c0c7", marginBottom: 16 }}>
        Choose a section below — the content will render inside this page
        (using Outlet).
      </p>

      <nav style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 24 }}>
        <NavLink to="" end style={({ isActive }) => navStyle(isActive)}>
          Students
        </NavLink>
        <NavLink to="department" style={({ isActive }) => navStyle(isActive)}>
          Department
        </NavLink>
        <NavLink to="book" style={({ isActive }) => navStyle(isActive)}>
          Books
        </NavLink>
      </nav>

      {/* Nested routes will render here */}
      <div
        style={{
          background: "#0f1720",
          border: "1px solid #23272b",
          borderRadius: 12,
          padding: 20,
          minHeight: 140,
          boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
        }}
      >
        <Outlet />
      </div>

      <div style={{ marginTop: 20, textAlign: "center" }}>
        <Link to="/" style={{ color: "#58a6ff", textDecoration: "none" }}>
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}
