import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PageNotFound() {
  const navigate = useNavigate(); // navigate hook -> programmatically redirect karne ke liye
  const [countdown, setCountdown] = useState(3); // countdown state, default 3 sec

  useEffect(() => {
    // Timer har 1 second me countdown ko 1 ghata dega
    const timer = setInterval(() => setCountdown((c) => c - 1), 1000);

    // 3 second ke baad automatically Home ("/") page par redirect
    const redirect = setTimeout(() => navigate("/"), 3000);

    // Cleanup -> jab component unmount ho ya countdown complete ho
    // to unnecessary intervals/timeout remove ho jaye
    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div
      // inline styling se center aligned error page banaya
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",  // vertical center
        alignItems: "center",      // horizontal center
        height: "100vh",
        textAlign: "center",
        color: "white",
      }}
      className="page notfound"
    >
      {/* Heading */}
      <h2>❌ 404 - Page Not Found</h2>

      {/* Short message */}
      <p>The page you are looking for doesn’t exist.</p>

      {/* Countdown ke sath redirect message */}
      <p>Redirecting to Home in {countdown} seconds...</p>

      {/* Agar user wait nahi karna chahta to turant home ja sakta hai */}
      <Link to="/" style={{ color: "#2ee6a7", marginTop: "10px" }}>
        ⬅ Go Home Now
      </Link>
    </div>
  );
}
