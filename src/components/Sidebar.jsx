import { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Tooltip } from "@chakra-ui/react";

import {
  RiHomeHeartFill,
  RiCodeBoxFill,
  RiToolsFill,
  RiMailAddFill,
} from "react-icons/ri";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <Tooltip label="Home" placement="right">
        <Link
          className={"home"}
          to={"/home"}
          onClick={() => handleLinkClick("home")}
        >
          <IconButton
            aria-label="Home"
            variant="ghost"
            icon={
              activeLink === "home" ? (
                <RiHomeHeartFill color="#e84118" size={24} />
              ) : (
                <RiHomeHeartFill color="white" size={24} />
              )
            }
            border={"1px solid #444c52"}
            _hover={{ backgroundColor: "#444c52" }}
          />
        </Link>
      </Tooltip>

      <Tooltip label="Skills" placement="right">
        <Link
          className="skills"
          to="/skills"
          onClick={() => handleLinkClick("skills")}
        >
          <IconButton
            aria-label="Skills"
            variant="ghost"
            icon={
              activeLink === "skills" ? (
                <RiToolsFill color="#fbc531" size={24} />
              ) : (
                <RiToolsFill color="white" size={24} />
              )
            }
            border={"1px solid #444c52"}
            _hover={{ backgroundColor: "#444c52" }}
          />
        </Link>
      </Tooltip>

      <Tooltip label="Projects" placement="right">
        <Link
          className="projects"
          to={"/projects"}
          onClick={() => handleLinkClick("projects")}
        >
          <IconButton
            aria-label="Projects"
            variant="ghost"
            icon={
              activeLink === "projects" ? (
                <RiCodeBoxFill color="#00a8ff" size={24} />
              ) : (
                <RiCodeBoxFill color="white" size={24} />
              )
            }
            border={"1px solid #444c52"}
            _hover={{ backgroundColor: "#444c52" }}
          />
        </Link>
      </Tooltip>

      <Tooltip label="Contact" placement="right">
        <Link
          className="contact"
          to={"/contact"}
          onClick={() => handleLinkClick("contact")}
        >
          <IconButton
            aria-label="contact"
            variant="ghost"
            icon={
              activeLink === "contact" ? (
                <RiMailAddFill color="#9c88ff" size={24} />
              ) : (
                <RiMailAddFill color="white" size={24} />
              )
            }
            border={"1px solid #444c52"}
            _hover={{ backgroundColor: "#444c52" }}
          />
        </Link>
      </Tooltip>
    </div>
  );
}
