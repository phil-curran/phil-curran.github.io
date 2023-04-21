import { Routes, Route } from "react-router-dom";

// styles
import "./App.css";

// pages
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

// components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home className="homeContainer" />} />

            <Route
              path="/projects"
              element={<Projects className="projectsContainer" />}
            />
            <Route
              path="/skills"
              element={<Skills className="skillsContainer" />}
            />
            <Route
              path="/contact"
              element={<Contact className="contactContainer" />}
            />
            <Route path="*" element={<Error />} />
          </Routes>

          <div className="footer">© Phil Curran, M.S. 2023</div>
        </div>
      </div>
    </div>
  );
}

export default App;
