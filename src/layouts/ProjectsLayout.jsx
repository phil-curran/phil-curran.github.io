import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ProjectPage = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
      <div className="projects-menu">projects</div>
    </div>
  );
};

export default ProjectPage;
