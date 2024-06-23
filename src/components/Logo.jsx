import { Link } from "react-router-dom";

const styles = {
  fontFamily: "Arial, sans-serif",
  fontSize: "3em",
  color: "#007BFF",
  textAlign: "center",
  margin: "20px 0",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  background: "-webkit-linear-gradient(#eee, #333)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  textDecoration: "none", // Remove underline from Link
  display: "inline-block", // Make it behave like a button
};

function Logo() {
  return (
    <Link to="/" style={styles}>
      LOGO
    </Link>
  );
}

export default Logo;
