import React from "react";
import NavBar from "./NavBar";

const mainStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontFamily: "Arial, sans-serif",
  fontSize: "1.5em",
  color: "#333",
  textAlign: "center",
  backgroundColor: "#f8f9fa",
};

function Product() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main style={mainStyles}>This is the Products Page</main>
    </>
  );
}

export default Product;
