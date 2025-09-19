
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function UserDetails() {
  //  useParams hook se route ke dynamic params nikal rahe hain
  // Example: /users/1/Hitaishi => { id: "1", name: "Hitaishi" }
  const { id, name } = useParams();

  return (
    <div
      className="page"
      style={{
        textAlign: "center",
        padding: "40px",
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      {/* Page heading */}
      <h2 style={{ marginBottom: 20 }}>📄 User Details</h2>

      {/* User Information card */}
      <div
        style={{
          background: "#0f1720",
          border: "1px solid #23272b",
          borderRadius: 10,
          padding: "20px 25px",
          marginBottom: 25,
        }}
      >
        {/* User ID hamesha required hai (route me id fix hai) */}
        <h3 style={{ marginBottom: 12, color: "#58a6ff" }}>User ID: {id}</h3>

        {/* Agar URL me name diya gaya hai to show karega warna fallback message */}
        {name ? (
          <h4 style={{ color: "#2ee6a7" }}>User Name: {name}</h4>
        ) : (
          <h4 style={{ color: "#8b949e" }}>No name provided in URL</h4>
        )}
      </div>

      {/* Back link: Users list page par le jaata hai */}
      <Link
        to="/users"
        style={{
          color: "#58a6ff",
          textDecoration: "none",
          fontWeight: 600,
          border: "1px solid #23272b",
          padding: "8px 14px",
          borderRadius: 6,
        }}
      >
        ⬅ Back to User List
      </Link>
    </div>
  );
}
