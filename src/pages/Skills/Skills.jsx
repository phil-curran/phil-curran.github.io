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

import {
  frontend,
  backend,
  tools,
  environments,
  others,
} from "./skill_imgs.js";

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
                {frontend.map((skill, index) => {
                  return (
                    <SkillCard
                      key={index}
                      image={skill.icon}
                      alt={skill.name}
                      title={skill.name}
                    />
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel className="tab-panel">
              <div className="skill-block">
                {backend.map((skill, index) => {
                  return (
                    <SkillCard
                      key={index}
                      image={skill.icon}
                      alt={skill.name}
                      title={skill.name}
                    />
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel className="tab-panel">
              <div className="skill-block">
                {tools.map((skill, index) => {
                  return (
                    <SkillCard
                      key={index}
                      image={skill.icon}
                      alt={skill.name}
                      title={skill.name}
                    />
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel className="tab-panel">
              <div className="skill-block">
                {environments.map((skill, index) => {
                  return (
                    <SkillCard
                      key={index}
                      image={skill.icon}
                      alt={skill.name}
                      title={skill.name}
                    />
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel className="tab-panel">
              <div className="skill-block">
                {others.map((skill, index) => {
                  return (
                    <SkillCard
                      key={index}
                      image={skill.icon}
                      alt={skill.name}
                      title={skill.name}
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
