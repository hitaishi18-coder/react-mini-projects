
import { NavLink } from "react-router-dom";

export default function Header() {
  
  const navStyle = ({ isActive }) => ({
    padding: "8px 14px",
    borderRadius: 8,
    textDecoration: "none",
    color: isActive ? "#0d1117" : "#c9d1d9",
    background: isActive ? "#58a6ff" : "transparent",
    fontWeight: isActive ? 700 : 500,
  });

  return (
    <header
      style={{
        background: "#161b22",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        gap: "12px",
        borderBottom: "1px solid #23272b",
      }}
    >
      {/* LEFT: Project logo/title (clickable to home) */}
      <NavLink
        to="/"
        style={{
          color: "#58a6ff",
          fontSize: "20px",
          fontWeight: "700",
          textDecoration: "none",
        }}
      >
        Project
      </NavLink>

      {/* RIGHT: Navigation links */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "12px",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          <li>
            <NavLink to="/" end style={navStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" style={navStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" style={navStyle}>
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink to="/college" style={navStyle}>
              College
            </NavLink>
          </li>

          <li>
            <NavLink to="/users" style={navStyle}>
              Users
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" style={navStyle}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
