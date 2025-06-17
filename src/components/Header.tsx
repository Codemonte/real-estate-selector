import { Link } from "react-router-dom";

const Header = () => (
  <header style={{
    background: "#d5d7d8",
    padding: "1rem 2rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    marginBottom: "2rem",
    borderRadius: "10px",
  }}>
    <Link to="/" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
      🏙️ Real Estate Selector
    </Link>
  </header>
);

export default Header;
