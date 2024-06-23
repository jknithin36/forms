import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const buttonStyles = {
  backgroundColor: "#007BFF", // Primary blue color
  color: "#fff", // White text color
  border: "none", // Remove default border
  borderRadius: "5px", // Rounded corners
  padding: "10px 20px", // Padding inside the button
  fontSize: "1em", // Font size
  cursor: "pointer", // Pointer cursor on hover
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  textDecoration: "none", // Remove underline from Link
  display: "inline-block", // Make it behave like a button
  transition: "background-color 0.3s ease", // Smooth background color transition
};

const linkHoverStyles = {
  backgroundColor: "#0056b3", // Darker blue for hover
};

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Link
          to="/main"
          style={buttonStyles}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = linkHoverStyles.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = buttonStyles.backgroundColor;
          }}
        >
          CLICK ME
        </Link>
      </main>
    </>
  );
}

export default Home;
