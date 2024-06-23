import React, { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const formContainerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const formStyles = {
  width: "300px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const labelStyles = {
  marginBottom: "8px",
  display: "block",
};

const inputStyles = {
  width: "100%",
  padding: "8px",
  marginBottom: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
  fontSize: "1em",
};

const buttonStyles = {
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  fontSize: "1em",
  cursor: "pointer",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main style={formContainerStyles}>
        <form style={formStyles} onSubmit={handleSubmit}>
          <label style={labelStyles}>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyles}
            required
          />
          <label style={labelStyles}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyles}
            required
          />
          <button
            type="submit"
            style={buttonStyles}
            onClick={(e) => {
              e.preventDefault();
              navigate("/main");
            }}
          >
            Join us
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
