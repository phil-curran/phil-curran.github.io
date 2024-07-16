import {
  Heading,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import SkillCard from "../../components/SkillCard";
import "./skills.css";

const frontend = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Recoil",
  "Bootstrap",
  "MaterialUI",
  "SemanticUI",
  "SASS",
  "LESS",
];

const backend = [
  "Python",
  "C",
  "Node",
  "Express",
  "dotnet",
  "Flask",
  "Django",
  "MongoDB",
  "Firebase",
  "MySQL",
  "Supabase",
  "REST",
];

const tools = ["Git", "GitHub", "VSCode", "JetBrains"];

const environments = ["Windows", "Mac", "Linux"];

const others = ["Bash", "Figma", "AdobeCC", "JSON", "Markdown"];

const Skills = () => {
  return (
    <div className="skills-content">
      <div className="heading">
        <Center>
          <Heading as="h1" size="xl">
            Things I use
          </Heading>
        </Center>
      </div>
      <div className="skills-table">
        <Tabs isFitted>
          <TabList>
            <Tab>Frontend</Tab>
            <Tab>Backend</Tab>
            <Tab>Tools</Tab>
            <Tab>Environments</Tab>
            <Tab>Other</Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="tab-panel">
              <div className="skill-block">
                {frontend.map((skill) => {
                  return (
                    <SkillCard
                      key={skill}
                      image={`src/assets/${skill}.svg`}
                      alt={skill}
                      title={skill}
                    />
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel className="tab-panel">
              <div className="skill-block">
                {backend.map((skill) => {
                  return (
                    <SkillCard
                      key={skill}
                      image={`src/assets/${skill}.svg`}
                      alt={skill}
                      title={skill}
                    />
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel className="tab-panel">
              <div className="skill-block">
                {tools.map((skill) => {
                  return (
                    <SkillCard
                      key={skill}
                      image={`src/assets/${skill}.svg`}
                      alt={skill}
                      title={skill}
                    />
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel className="tab-panel">
              <div className="skill-block">
                {environments.map((skill) => {
                  return (
                    <SkillCard
                      key={skill}
                      image={`src/assets/${skill}.svg`}
                      alt={skill}
                      title={skill}
                    />
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel className="tab-panel">
              <div className="skill-block">
                {others.map((skill) => {
                  return (
                    <SkillCard
                      key={skill}
                      image={`src/assets/${skill}.svg`}
                      alt={skill}
                      title={skill}
                    />
                  );
                })}
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Skills;
