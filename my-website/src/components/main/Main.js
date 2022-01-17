import AboutMe from "./components/AboutMe";
import Data from "./components/data/Data";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Main = () => {
  const allProjects = Data.map((singleDataObj) => {
    return (
      <Projects
        customId={singleDataObj.id}
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
      <AboutMe />
      {allProjects}
      <Skills />
    </main>
  );
};
export default Main;
