import { AboutMe, Projects, Skills, Data, ScrollUpBtn } from "../../components/index";

const Home = () => {
  const allProjects = Data.map((singleDataObj) => {
    return (
      <Projects
        key={singleDataObj.id}
        customTitle={singleDataObj.title}
        customLink={singleDataObj.link}
        customImg={singleDataObj.image}
        customAlt={singleDataObj.alt}
        customDescription={singleDataObj.description}
        customTechnologies={singleDataObj.technologies}
      />
    );
  });

  return (
    <main>
      <ScrollUpBtn />
      <AboutMe />
      <header>
        <h2 className="projects-title" id="projects">
          My Projects
        </h2>
      </header>
      {allProjects}
      <Skills />
    </main>
  );
};
export default Home;
