import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Justine Ragues
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <div className={click ? "burger-menu active" : "burger-menu"}></div>
          <div className={click ? "burger-menu active" : "burger-menu"}></div>
          <div className={click ? "burger-menu active" : "burger-menu"}></div>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/Portfolio-React"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio-React/projets"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Projets
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio-React/contact"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
