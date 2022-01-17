import diploma from "./images/diploma.png";

const Skills = () => {
  return (
    <section>
      <ul>
        <li>HTML5 | CSS3 | SASS</li>
        <li>JavaScript | jQuery | React | Bootstrap</li>
        <li>Materialize | Balsamiq Wireframes | Git</li>
        <li>VS Code | Gitpod | GitHub</li>
      </ul>
      <figure>
        <img src={diploma} alt="Software Development Diploma." />
        <figcaption>My Software Development Diploma</figcaption>
      </figure>
    </section>
  );
};
export default Skills;
