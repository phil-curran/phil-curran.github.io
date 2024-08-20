import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProjectsMenu from "../components/ProjectsMenu";

const ProjectPage = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
      <div className="projects-menu">
        <ProjectsMenu />
      </div>
    </div>
  );
};

export default ProjectPage;
