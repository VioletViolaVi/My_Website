import { Data, Footer, NavBar, Projects, ScrollUpBtn } from "../../components/index";

const ProjectsPage = () => {
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
    <>
      <NavBar />
      <ScrollUpBtn />
      <header>
        <h2 className="projects-title" id="projects">
          My Projects
        </h2>
      </header>
      {allProjects}
      <Footer />
    </>
  );
};
export default ProjectsPage;
