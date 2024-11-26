import { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Select all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section when it intersects
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // Cleanup observer
    };
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Box as="header">
        <Header activeSection={activeSection} />
      </Box>
      <Box as="main" flex="1" overflowX="auto" scrollBehavior="smooth">
        <Box as="section" id="home" h="100vh">
          <Home />
        </Box>
        <Box as="section" id="projects" h="100vh">
          <Projects />
        </Box>
        <Box as="section" id="skills" h="100vh">
          <Skills />
        </Box>
        <Box as="section" id="contact" h="100vh">
          <Contact />
        </Box>
      </Box>
    </Flex>
  );
};

export default App;
