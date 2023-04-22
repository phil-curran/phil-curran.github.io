import "./home.css";

import phil from "../../assets/phil.png";
import pdf from "../../assets/pdf.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const Home = () => {
  return (
    <section className="homeContainer">
      <div className="homeContent">
        <h1>Hello!</h1>
        <div className="businessCard">
          <div className="pic">
            <img className="photo" src={phil} alt="" />
          </div>
          <div className="intro">
            <p>
              I’m a Seattle-based Front-end Developer and Javascript enthusiast
              with 10 years experience doing front-end work in the online
              education space as an instructional designer.
            </p>
            <p>
              I’m passionate about well-documented, performant, and maintainable
              code, beautiful user experiences, and building community within
              and across teams.
            </p>
            <p>
              Currently open to new opportunities. Get in touch & let's make
              something awesome.
            </p>
          </div>
          <div className="contacts">
            <div className="resume">
              <a
                href="../../assets/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img className="contactIcon" src={pdf} alt="" />
              </a>
            </div>
            <div className="emailAddress">
              <a href="mailto: pecurran@outlook.com">
                <img className="contactIcon" src={mail} alt="" />
              </a>
            </div>

            <div className="phone">
              <a href="tel:4252176073">
                {" "}
                <img className="contactIcon phoneSize" src={phone} alt="" />
              </a>
            </div>

            <div className="location">
              <img className="contactIcon" src={location} alt="" />
            </div>

            <div className="linkedInLink">
              <a
                href="https://www.linkedin.com/in/philcurran/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img className="contactIcon" src={linkedin} alt="" />
              </a>
            </div>

            <div className="ghLink">
              <a
                href="https://github.com/phil-curran"
                target="_blank"
                rel="noreferrer"
              >
                <img className="contactIcon" src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
