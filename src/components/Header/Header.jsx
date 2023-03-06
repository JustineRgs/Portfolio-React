import { useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  let headerTitle;
  let headerSpan;
  if (location.pathname === "/Portfolio-React/projets") {
    headerTitle = "Mes projets";
    headerSpan = "portfolio";
  } else if (location.pathname === "/Portfolio-React/contact") {
    headerTitle = "Contactez moi !";
    headerSpan = "Contact";
  } else {
    headerTitle = "présentation";
    headerSpan = "à propos";
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
