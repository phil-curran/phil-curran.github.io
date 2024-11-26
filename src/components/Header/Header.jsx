import { Box, Flex, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    // Sections to observe
    const sections = document.querySelectorAll("section");

    // Intersection Observer logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of a section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Utility function to dynamically set link color
  const getLinkColor = (href, hoverColor) =>
    activeLink === href ? hoverColor : "white";

  return (
    <Flex
      as="header"
      align="center"
      h="75px"
      bg="#1f1f1f"
      position="sticky"
      top="0"
      zIndex="1000"
      px={4}
    >
      {/* Logo */}
      <Box
        color="white"
        fontSize="20px"
        fontWeight="bold"
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="center"
        px={6}
      >
        Phil Curran, M.S.
      </Box>

      {/* Spacer */}
      <Box flex="1" display={{ base: "none", md: "block" }} />

      {/* Navigation */}
      <Flex
        as="nav"
        w={{ base: "100%", md: "auto" }}
        justify={{ base: "space-between", md: "flex-start" }}
      >
        <Link
          href="#home"
          px={6}
          py={2}
          fontSize="20px"
          fontWeight="bold"
          color={getLinkColor("#home", "#e84118")}
          _hover={{ textDecoration: "none", color: "#e84118" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Home
        </Link>
        <Link
          href="#projects"
          px={6}
          py={2}
          fontSize="20px"
          fontWeight="bold"
          color={getLinkColor("#projects", "#2980b9")}
          _hover={{ textDecoration: "none", color: "#2980b9" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          px={6}
          py={2}
          fontSize="20px"
          fontWeight="bold"
          color={getLinkColor("#skills", "#27ae60")}
          _hover={{ textDecoration: "none", color: "#27ae60" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Skills
        </Link>
        <Link
          href="#contact"
          px={6}
          py={2}
          fontSize="20px"
          fontWeight="bold"
          color={getLinkColor("#contact", "#8e44ad")}
          _hover={{ textDecoration: "none", color: "#8e44ad" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Contact
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
