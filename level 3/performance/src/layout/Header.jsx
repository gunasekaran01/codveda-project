import { memo } from "react";
import logo from "../assets/images/logo.webp";
import "./Header.css";

const Header = memo(function Header() {
  return (
    <header className="header">

      <div className="logo">

        <img
          src={logo}
          alt="Nova UI"
          className="brand-logo"
          loading="eager"
          width="50"
          height="50"
        />

        <h2>Nova UI</h2>

      </div>

      <div className="header-links">

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a href="#">
          Documentation
        </a>

      </div>

    </header>
  );
});

export default Header;