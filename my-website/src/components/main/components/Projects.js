const Projects = (props) => {
  return (
    <section>
      <figure>
        <a href={props.customLink} target="_blank" rel="noreferrer">
          <img
            src={"./project-images/" + props.customImg}
            alt={props.customAlt}
          />
        </a>
        <figcaption>{props.customTitle}</figcaption>
      </figure>
      <p>{props.customDescription}</p>
      <p>
        <b>Technologies:</b> {props.customTechnologies}
      </p>
    </section>
  );
};
export default Projects;
