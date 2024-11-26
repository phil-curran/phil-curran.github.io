/* eslint-disable react/no-unescaped-entities */
import {
  Grid,
  Box,
  Image,
  Text,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import {
  RiFilePdf2Fill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import { motion } from "framer-motion";
import phil from "../../assets/img/phil.png";

/* Updated motion.create Components */
const MotionGrid = motion.create(Grid);
const MotionImage = motion.create(Image);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);

const Home = () => {
  return (
    <MotionGrid
      bg="gray"
      templateColumns="1fr 1fr"
      height="100vh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Section */}
      <Box
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <MotionImage
          borderRadius="full"
          boxSize="250px"
          src={phil}
          alt="Phil Curran"
          mb={8}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Buttons Section */}
        <HStack spacing={4}>
          <Button
            colorScheme="teal"
            variant="outline"
            as="a"
            href="https://drive.google.com/file/d/1wcIuIolFxh7GOwzquwt_FY4ZvVVV4y6_/view?usp=drive_link"
            target="_blank"
            px={2}
            py={6}
          >
            <RiFilePdf2Fill size={40} color="red" />
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            as="a"
            href="https://www.linkedin.com/in/philcurran/"
            target="_blank"
            px={2}
            py={6}
          >
            <RiLinkedinBoxFill size={40} color="blue" />
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            as="a"
            href="https://github.com/phil-curran"
            target="_blank"
            px={2}
            py={6}
          >
            <RiGithubFill size={40} color="purple" />
          </Button>
        </HStack>
      </Box>

      {/* Right Section */}
      <Box display="flex" flexDirection="column" justifyContent="center" p={8}>
        <MotionHeading
          as="h1"
          fontSize="2.5rem"
          mb={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi. I'm Phil Curran.
        </MotionHeading>
        <Box>
          <MotionText
            maxW="600px"
            lineHeight="1.5"
            mb={4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I’m a Seattle-based Instructional Designer, Curriculum Developer,
            and Front-end Engineer with 10+ years of experience creating
            innovative, tech-forward learning solutions in the online education
            space. I’m passionate about designing beautiful and user-centered
            learning experiences, and translating complex technical concepts
            into engaging, high-quality educational products.
          </MotionText>
          <MotionText
            maxW="600px"
            lineHeight="1.5"
            mb={4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I bring a unique blend of technical expertise and instructional
            design to cross-functional, interdisciplinary projects. Recognized
            for leadership, creativity, and collaboration, I’m committed to
            building community within and across teams to drive engagement and
            align with organizational goals.
          </MotionText>
          <MotionText
            maxW="600px"
            lineHeight="1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Currently open to new opportunities. Get in touch, and let’s create
            something awesome together.
          </MotionText>
        </Box>
      </Box>
    </MotionGrid>
  );
};

export default Home;
