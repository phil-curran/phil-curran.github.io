import {
  Image,
  Heading,
  Text,
  Tooltip,
  Link,
  IconButton,
} from "@chakra-ui/react";
import {
  RiFilePdf2Line,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";

import Phil from "../../assets/phil.png";
import "./home.css";

const Home = () => {
  return (
    <div className="home-content">
      <div className="greeting">
        <Heading as="h1" size="xl" noOfLines={1}>
          Hello!
        </Heading>
      </div>
      <div className="card">
        <div className="left-box">
          <div className="picture">
            <Image
              className="pic"
              borderRadius="full"
              boxSize="150px"
              src={Phil}
              alt="Phil Curran"
            />
          </div>
          <div className="links">
            <div className="resume-link">
              <Tooltip label={"Resume"} placement="bottom">
                <Link
                  href="https://drive.google.com/file/d/1amW1HX_-SQ-sjmKCUlvKRE_sqf1e-Gpi/view?usp=sharing"
                  isExternal
                >
                  <IconButton
                    aria-label="resume link"
                    variant="ghost"
                    icon={<RiFilePdf2Line color="#e84118" size={24} />}
                    border={"1px solid #444c52"}
                  />
                </Link>
              </Tooltip>
            </div>
            <div className="linkedin">
              <Tooltip label={"LinkedIn"} placement="bottom">
                <Link href="https://www.linkedin.com/in/philcurran/" isExternal>
                  <IconButton
                    aria-label="LinkedIn link"
                    variant="ghost"
                    icon={<RiLinkedinBoxFill color="#0a66c2" size={24} />}
                    border={"1px solid #444c52"}
                  />
                </Link>
              </Tooltip>
            </div>
            <div className="github">
              <Tooltip label={"GitHub"} placement="bottom">
                <Link href="https://github.com/phil-curran" isExternal>
                  <IconButton
                    aria-label="LinkedIn link"
                    variant="ghost"
                    icon={<RiGithubFill color="#6e5494" size={24} />}
                    border={"1px solid #444c52"}
                  />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="description">
          <Text mb={4}>
            I’m a Seattle-based Front-end Developer and Javascript enthusiast
            with 10 years experience doing front-end work in the online
            education space as an instructional designer.
          </Text>
          <Text mb={4}>
            I’m passionate about well-documented, performant, and maintainable
            code, beautiful user experiences, and building community within and
            across teams.
          </Text>
          <Text>
            Currently open to new opportunities. Get in touch & let&apos;s make
            something awesome.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Home;
