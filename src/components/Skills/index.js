import diploma from "../../assets/images/diploma.png";
import "./index.css";

const Skills = () => {
  return (
    <section className="skills-bg">
      <header>
        <h2 className="skills-title" id="skills">
          My Skills
        </h2>
      </header>

      <ul className="skill-list-bg">
        <li className="skill-list">HTML5 | CSS3 | SASS</li>
        <li className="skill-list">JavaScript | jQuery | React | Bootstrap</li>
        <li className="skill-list">Materialize | Balsamiq Wireframes | Git</li>
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
    </section>
  );
};
export default Skills;
