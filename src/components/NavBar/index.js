import { NavLink } from "react-router-dom";

import "./index.css";

const NavBar = () => {
  const activeLink = { color: "#008080" };

  function toggleActive({ isActive }) {
    if (isActive) {
      return activeLink;
    } else {
      return undefined;
    }
  }

  return (
    <>
      <nav className="navbar-bg">
        <ul className="list-container">
          <li>
            <NavLink className="link" to="/my-website" style={toggleActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/projects" style={toggleActive}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/skills" style={toggleActive}>
              Skills
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
