import { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        color: color,
        backgroundColor: "#ffffffcc", 
        padding: "15px 25px",
        borderRadius: "15px",
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "2px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1), inset 0 0 8px rgba(0,0,0,0.05)",
        display: "inline-block",
        textAlign: "center",
        fontFamily: "'Orbitron', sans-serif", 
        transition: "all 0.3s ease-in-out"
      }}
    >
      {time}
    </div>
  );
};

export default Clock;
