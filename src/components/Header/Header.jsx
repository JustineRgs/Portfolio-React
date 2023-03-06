import { useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  let headerTitle;
  let headerSpan;
  if (location.pathname === "/") {
    headerTitle = "présentation";
    headerSpan = "à propos";
  }
  if (location.pathname === "/projets") {
    headerTitle = "Mes projets";
    headerSpan = "portfolio";
  }
  if (location.pathname === "/contact") {
    headerTitle = "Contactez moi !";
    headerSpan = "Contact";
  }

  return (
    <>
      <div className="header">
        <h1>
          {headerTitle}
          <span>{headerSpan}</span>
        </h1>
      </div>
      <hr noshade="noshade" width="80" />
    </>
  );
}

export default Header;
