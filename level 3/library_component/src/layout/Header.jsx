import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">

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
}

export default Header;