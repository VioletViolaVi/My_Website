import diploma from "../../assets/images/diploma.png";
import { ScrollUpBtn } from "../index";
import "./index.css";

const Skills = () => {
  return (
    <main>
      <ScrollUpBtn />
      <section className="skills-bg">
        <header>
          <h1 className="skills-title">My Skills</h1>
        </header>

        <div className="skills-container-for-grid">
          <ul className="skill-list-bg">
            <li className="skill-list">HTML5 | CSS3 | SASS</li>
            <li className="skill-list">
              JavaScript | jQuery | React | Bootstrap
            </li>
            <li className="skill-list">
              Materialize | Balsamiq Wireframes | Git
            </li>
            <li className="skill-list">VS Code | Gitpod | GitHub</li>
          </ul>

          <figure>
            <img
              src={diploma}
              alt="Software Development Diploma."
              className="diploma-img"
            />
            <figcaption className="diploma-caption">
              My Software Development Diploma
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};
export default Skills;
