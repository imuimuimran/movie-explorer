import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">

        <Link to="/" className="brand">
          MovieExplorer
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/movies">
            Movies
          </NavLink>
        </nav>

        <Link to="/movies" className="nav-cta">
          Explore Movies
        </Link>

      </div>
    </header>
  );
}

export default Navbar;