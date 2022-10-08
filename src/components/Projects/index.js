const Projects = (props) => {
  return (
    <section className="projects-bg">
      <figure>
        <a href={props.customLink} target="_blank" rel="noreferrer">
          <img
            src={props.customImg}
            alt={props.customAlt}
            className="project-img"
          />
        </a>
        <figcaption className="project-caption">{props.customTitle}</figcaption>
      </figure>

      <p className="project-description">{props.customDescription}</p>

      <p className="project-tech">
        <b>Technologies:</b> {props.customTechnologies}
      </p>
    </section>
  );
};
export default Projects;
