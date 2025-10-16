export default function Contact() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",   // elements ek column me
        justifyContent: "center",  // vertical center
        alignItems: "center",      // horizontal center
        height: "100vh",           // full screen height
        textAlign: "center",       // text bhi center aligned
        color: "#c9d1d9",          // light gray text for readability
        backgroundColor: "#0d1117" // same dark bg as navbar
      }}
    >
      {/* Page heading */}
      <h1 style={{ color: "#58a6ff" }}>📩 Contact Page</h1>

      {/* Email address for support */}
      <p>
        You can reach us at{" "}
        <strong style={{ color: "#58a6ff" }}>support@example.com</strong>
      </p>
    </div>
  );
}
