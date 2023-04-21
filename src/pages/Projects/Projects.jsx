import "./projects.css";
import portfolioSite from "./images/portfolioSite.png";
import jscard2 from "./images/jscard2.png";
import mindMachine from "./images/mindMachine.png";
import planetaryHours from "./images/planetaryHours.png";

const Projects = () => {
  return (
    <section className="projectsContainer">
      <div className="projectsContent">
        <h1>Projects:</h1>

        <div id="portfolio-site" className="project">
          <div className="projectThumbnail">
            <img className="projectImage" src={portfolioSite} alt="" />
          </div>
          <h2 className="projectHeader">Portfolio Site</h2>
          <div className="projectDescription">
            <p>
              I wanted to create a React-based static site without relying on a
              pre-made css framework as a crutch. I also wanted to practice CSS
              Grid and mobile layouts.
            </p>
            <p>
              <strong>Tools:</strong>
            </p>
            <p>HTML5, CSS3, CSS Grid, React, React Router.</p>
          </div>

          <div className="projectLinks">
            <p>
              <a href="https://phil-curran.github.io/" target="_blank">
                Live
              </a>
            </p>
            <p>
              <a
                href="https://github.com/phil-curran/phil-curran.github.io"
                target="_blank"
              >
                Github
              </a>
            </p>
          </div>
        </div>

        <div id="js-flashcards" className="project">
          <div className="projectThumbnail">
            <div className="projectImage">
              <img className="projectImage" src={jscard2} alt="" />
            </div>
            {/* <p className="liveLink">
              <a href="" target="_blank">
                Live
              </a>
            </p> */}
            <p className="githubLink">
              <a
                href="https://github.com/phil-curran/js-flashcards"
                target="_blank"
              >
                Github
              </a>
            </p>
          </div>
          <h2 className="projectHeader">Javascript Flashcards</h2>
          <div className="projectDescription">
            <p>
              A full CRUD javascript flashcard app using React, Router, Hooks,
              Semantic UI Component Library, Supabase, and Highlight.js.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Full CRUD functionality</li>
              <li>Styled example code blocks using Highlight.js</li>
              <li>Button to copy example code for each flashcard</li>
              <li>Link to relevant MDN documentation for each flashcard</li>
            </ul>
            <p>
              <strong>Tools:</strong>
            </p>
            <p>
              HTML5, CSS3, Semantic UI Component Library, Javascript, React,
              React Router, React Hooks, Supabase, Highlight.js
            </p>
          </div>

          <div className="projectLinks"></div>
        </div>

        <div id="mind-machine" className="project">
          <div className="projectThumbnail">
            <div className="projectImage">
              <img className="projectImage" src={mindMachine} alt="" />
            </div>
            {/* <p className="liveLink">
              <a href="" target="_blank">
                Live
              </a>
            </p> */}
            <p className="githubLink">
              <a
                href="https://github.com/phil-curran/mind-machine"
                target="_blank"
              >
                Github
              </a>
            </p>
          </div>
          <h2 className="projectHeader">Mind Machine</h2>
          <div className="projectDescription">
            <p>
              I always wanted one of those 'mind machines' advertised in the
              90s, but they went out of fashion before I could afford one. So I
              built my own, using HTML5, CSS3, Pico.css, Javascript, and the Web
              Audio API.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Dropdown menu to choose base frequency</li>
              <li>Base frequency controls 3 oscillators: low, mid, and high</li>
              <li>
                Dropdown menu to choose wave state (Alpha, Beta, Theta, Delta)
              </li>
              <li>
                Beats Frequency slider adjusts beat frequency within wave state
                range
              </li>
            </ul>
            <p>
              <strong>Tools:</strong>
            </p>
            <p>
              HTML5, CSS3, Semantic UI Component Library, Javascript, React,
              React Router, React Hooks, Supabase, Highlight.js
            </p>
          </div>

          <div className="projectLinks"></div>
        </div>

        <div id="astro-page" className="project">
          <div className="projectThumbnail">
            <div className="projectImage">
              <img className="projectImage" src={planetaryHours} alt="" />
            </div>
            {/* <p className="liveLink">
              <a href="" target="_blank">
                Live
              </a>
            </p> */}
            <p className="githubLink">
              <a
                href="https://github.com/phil-curran/astro-page"
                target="_blank"
              >
                Github
              </a>
            </p>
          </div>

          <h2 className="projectHeader">Astro Page</h2>
          <div className="projectDescription">
            <p>
              I built this project in a weekend on a whim. This app provides the
              day's astronomical and astrological conditions. A Python & Flask
              backend scrapes data from several websites to provide data to the
              app's Frontend. The Frontend is built with React and React Router.
              The app is styled with Semantic UI Components.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Shows daily sun and moon rise / apex / set times</li>
              <li>Shows daily moon phase</li>
              <li>Shows daily 'planetary hours'</li>
              <li>Shows daily planetary ephemeris</li>
            </ul>
            <p>
              <strong>Tools:</strong>
            </p>
            <p>
              HTML5, Semantic UI Components, Javascript, React, React Router
              Python, Flask, BeautifulSoup
            </p>
          </div>

          <div className="projectLinks"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
