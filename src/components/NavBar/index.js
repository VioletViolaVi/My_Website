import { NavLink } from "react-router-dom";

import "./index.css";

const NavBar = () => {
  const activeLink = { color: "#f0f0f0" };

  function toggleActive({ isActive }) {
    if (isActive) {
      return activeLink;
    } else {
      return undefined;
    }
  }

  return (
    <>
      <nav className="header-bg">
        <ul className="list-container">
          <li>
            <NavLink className="link" to="my_website" style={toggleActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="projects" style={toggleActive}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="skills" style={toggleActive}>
              Skills
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
