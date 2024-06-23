import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const navStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#f8f9fa",
  borderBottom: "1px solid #e7e7e7",
};

const logoContainerStyles = {
  flex: "1",
};

const ulStyles = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  gap: "20px",
};

const liStyles = {
  display: "inline",
};

const navLinkStyles = {
  textDecoration: "none",
  color: "#007BFF",
  fontSize: "1.2em",
};

function NavBar() {
  return (
    <nav style={navStyles}>
      <div style={logoContainerStyles}>
        <Logo />
      </div>
      <div>
        <ul style={ulStyles}>
          <li style={liStyles}>
            <NavLink to="/product" style={navLinkStyles}>
              Products
            </NavLink>
          </li>
          <li style={liStyles}>
            <NavLink to="/login" style={navLinkStyles}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
