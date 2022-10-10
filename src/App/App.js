import { Routes, Route } from "react-router-dom";

import { Home, NotFound, ProjectsPage, SkillsPage } from "../pages";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/My_Website" element={<Home />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/skills" element={<SkillsPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
