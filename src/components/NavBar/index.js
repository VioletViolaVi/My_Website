import "./index.css";

const NavBar = () => {
  return (
    <>
      <nav className="header-bg">
        <ul className="list-container">
          <li>
            <a href="#home" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="link">
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
