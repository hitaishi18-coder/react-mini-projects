

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",   
        justifyContent: "center", 
        alignItems: "center",     
        height: "100vh",           
        textAlign: "center",       
        color: "white",            
      }}
    >
      {/* Page heading */}
      <h2>🔑 Login</h2>

      {/* Login form */}
      <form
        className="login-form"
        style={{
          display: "flex",
          flexDirection: "column", 
          gap: "12px",            
          marginTop: "20px",
          width: "250px",          
        }}
      >
        {/* Username input */}
        <input
          type="text"
          placeholder="Username"
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #444",
            outline: "none",
          }}
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #444",
            outline: "none",
          }}
        />

        {/* Submit button */}
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#2ee6a7", 
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
