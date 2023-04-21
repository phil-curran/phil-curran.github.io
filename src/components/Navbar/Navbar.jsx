import { Link } from "react-router-dom";

import { useState } from "react";

import "./style.css";
import Monogram from "./Monogram/Monogram";

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <aside className="navbar">
      <Monogram />
      <Link className="home" to="/">
        <span className="material-symbols-outlined">home</span>
      </Link>
      <Link className="projects" to="/projects">
        <span className="material-symbols-outlined">code_blocks</span>
      </Link>
      <Link className="skills" to="/skills">
        <span className="material-symbols-outlined">handyman</span>
      </Link>
      <Link className="contact" to="/contact">
        <span className="material-symbols-outlined">contact_mail</span>
      </Link>
    </aside>
  );
};

export default Navbar;
