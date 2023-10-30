import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/enquiries">Enquiries</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
