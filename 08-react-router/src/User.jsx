

import React from "react";
import { Link } from "react-router-dom";

export default function User() {
  // 🔹 Static user data (normally ye backend/API se aata hai, yaha demo ke liye hardcoded hai)
  const users = [
    { id: 1, name: "Hitaishi", age: 22 },
    { id: 2, name: "ABC", age: 21 },
    { id: 3, name: "XYZ", age: 23 },
    { id: 4, name: "FGH", age: 20 },
  ];

  return (
    // Page container with max width aur left aligned text
    <div
      className="page"
      style={{ textAlign: "left", maxWidth: 800, margin: "0 auto" }}
    >
      {/* Page heading */}
      <h2 style={{ marginBottom: 10 }}>👥 User List</h2>
      <p style={{ color: "#b9c0c7" }}>
        Click a user to view details (demo only).
      </p>

      {/* 🔹 Pehla section: User list jisme sirf ID ke basis par link banta hai */}
      <div style={{ marginTop: 18 }}>
        {users.map((u) => (
          <div
            key={u.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 12px",
              background: "#0f1720",
              border: "1px solid #23272b",
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            {/* User name par click karne se route `/users/:id` par le jata hai */}
            <Link
              to={`/users/${u.id}`}
              style={{
                color: "#58a6ff",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              {u.name}
            </Link>

            {/* User ki age side me show ho rahi hai */}
            <span style={{ color: "#8b949e", fontSize: 14 }}>{u.age} yrs</span>
          </div>
        ))}
      </div>

      {/* 🔹 Dusra section: same users but URL me ID ke sath name bhi add ho raha hai */}
      <h3 style={{ marginTop: 22 }}>🔗 Links with name in URL</h3>
      <div style={{ marginTop: 12 }}>
        {users.map((u) => (
          <div key={u.id} style={{ marginBottom: 8 }}>
            {/* Link with ID + Name => Example: /users/1/Hitaishi */}
            <Link
              to={`/users/${u.id}/${encodeURIComponent(u.name)}`}
              style={{ color: "#2ee6a7", textDecoration: "none" }}
            >
              {u.name} — view with name in URL
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
