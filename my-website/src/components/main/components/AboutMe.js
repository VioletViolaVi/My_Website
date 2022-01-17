import portrait from "./images/avatar.png";

const AboutMe = () => {
  return (
    <section>
      <header>
        <h1>Front End Developer</h1>
      </header>

      <p>
        Hello!{" "}
        <span>
          <i className="fas fa-hand-sparkles"></i>
        </span>
      </p>

      <p>I'm a Front End Developer.</p>

      <p>
        I write clean, maintainable and reusable code to create beautiful user
        interfaces.
      </p>

      <figure>
        <img src={portrait} alt="Cartoon version of me." />
        <figcaption>
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
