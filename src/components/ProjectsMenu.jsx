import "./projects.css";

const projectOne = {
  id: "project1",
  title: "Project One",
  description:
    "This is a description of Project One. It includes details about what was done and the technologies used.",
  technologies: ["React", "Chakra UI", "JavaScript"],
  link: "https://github.com/username/project1",
};

const projectTwo = {
  id: "project2",
  title: "Project Two",
  description:
    "This is a description of Project Two. It focuses on backend development and database management.",
  technologies: ["Node.js", "Express", "MongoDB"],
  link: "https://github.com/username/project2",
};

const projectThree = {
  id: "project3",
  title: "Project Three",
  description:
    "An overview of Project Three, which is a full-stack application utilizing cloud services.",
  technologies: ["React", "AWS", "GraphQL"],
  link: "https://github.com/username/project3",
};

const ProjectsMenu = () => {
  return (
    <div className="project-menu">
      <div className="project-list">
        <p>I AM PROJECTS.</p>
        <p>I AM PROJECTS.</p>
      </div>
    </div>
  );
};

export default ProjectsMenu;
