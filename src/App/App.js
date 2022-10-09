import { Routes, Route } from "react-router-dom";

import { Home, ProjectsPage, SkillsPage } from "../pages";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/my-website" element={<Home />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/skills" element={<SkillsPage />}></Route>
        <Route path="*" element={<h1>Page Not Found 404!😭</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
