import avatar from "../../assets/images/avatar.png";
import { ScrollUpBtn } from "../index";
import "./index.css";

const AboutMe = () => {
  return (
    <main>
      <ScrollUpBtn />
      <section className="about-me-container">
        <header>
          <h1 className="about-me-title">Software Developer</h1>
        </header>

        <p className="greeting">
          Hello!{" "}
          <span>
            <i className="fas fa-hand-sparkles"></i>
          </span>
        </p>

        <p className="intro">I'm a Software Developer</p>

        <p className="intro-para">
          I write clean, maintainable and reusable code to create awesome user
          interfaces
        </p>

        <figure>
          <img src={avatar} alt="Cartoon version of me." className="avatar" />
          <figcaption className="avatar-caption">
            Hello Again!{" "}
            <span>
              <i className="fas fa-hand-sparkles"></i>
            </span>
          </figcaption>
        </figure>
      </section>
    </main>
  );
};
export default AboutMe;
