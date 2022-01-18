import portrait from "./images/avatar.png";

const AboutMe = () => {
  return (
    <section className="about-me-container">
      <header>
        <h1 className="title">Front End Developer</h1>
      </header>

      <p className="greeting">
        Hello!{" "}
        <span>
          <i className="fas fa-hand-sparkles"></i>
        </span>
      </p>

      <p className="intro">I'm a Front End Developer</p>

      <p className="intro-para">
        I write clean, maintainable and reusable code to create awesome user
        interfaces
      </p>

      <figure>
        <img src={portrait} alt="Cartoon version of me." className="avatar" />
        <figcaption className="avatar-caption">
          Hello Again!{" "}
          <span>
            <i className="fas fa-hand-sparkles"></i>
          </span>
        </figcaption>
      </figure>
    </section>
  );
};
export default AboutMe;
