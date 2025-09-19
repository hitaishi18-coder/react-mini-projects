

export default function Home() {
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
      <h2>🏠 Welcome Home</h2>

      {/* Short description */}
      <p>This is the homepage of your dark-themed site.</p>
    </div>
  );
}
