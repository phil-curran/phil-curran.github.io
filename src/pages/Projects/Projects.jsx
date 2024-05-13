import { Heading, Center, Box, Text, Link } from "@chakra-ui/react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="portfolio-content">
      <div className="heading">
        <Center>
          <Heading as="h1" size="xl" noOfLines={1}>
            Projects
          </Heading>
        </Center>
      </div>
      <div className="projects-content">
        <Box>
          <Center>
            <p>
              More info to follow! Check out my github profile in the interim.
            </p>
          </Center>
        </Box>
      </div>
    </div>
  );
};

export default Projects;
