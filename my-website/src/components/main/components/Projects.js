import busybakesImg from "./project-images/busybakes.png";

const Projects = () => {
  return (
    <section>
      <figure>
        <a
          href="https://violetviolavi.github.io/Milestone-Project-1/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={busybakesImg} alt="BusyBakes website link" />
          <figcaption>BusyBakes</figcaption>
        </a>
      </figure>
      <p>
        A baking club website for users to browse and select baking lessons they
        wish to take.
      </p>
      <p>
        <b>Technologies:</b> HTML5, CSS3, SASS, jQuery, JavaScript, Bootstrap,
        Git, Gitpod, Github, Balsamiq Wireframes
      </p>
    </section>
  );
};
export default Projects;
