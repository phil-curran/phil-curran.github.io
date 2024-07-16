import { Heading, Center, VStack, Box, Link, Text } from "@chakra-ui/react";

import {
  BsLinkedin,
  BsCalendar2HeartFill,
  BsMailbox2Flag,
} from "react-icons/bs";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-content">
      <div className="heading">
        <Center className="header">
          <Heading as="h1" size="xl" noOfLines={1}>
            Contact
          </Heading>
        </Center>
      </div>
      <div className="contact-card">
        <div className="emailBtn">
          <Link href="mailto:pecurran@outlook.com" isExternal>
            <Box
              width={"110px"}
              height={"120px"}
              border={"1px solid #444c52"}
              borderRadius={6}
              _hover={{ bg: "#444c52" }}
              className="emailBtn"
            >
              <Center>
                <VStack>
                  <div className="contactIcon">
                    <BsMailbox2Flag size={48} color={"#e74c3c"} />
                  </div>
                  <div className="contactSubheader">
                    <Text>Email Me</Text>
                  </div>
                </VStack>
              </Center>
            </Box>
          </Link>
        </div>
        <div className="calendlyBtn">
          <Link href="https://calendly.com/pecurran/30min" isExternal>
            <Box
              width={"110px"}
              height={"120px"}
              border={"1px solid #444c52"}
              borderRadius={6}
              _hover={{ bg: "#444c52" }}
              className="emailBtn"
            >
              <Center>
                <VStack>
                  <Box>
                    <BsCalendar2HeartFill size={48} color={"#1abc9c"} />
                  </Box>
                  <Box>
                    <Text>Book Time</Text>
                  </Box>
                </VStack>
              </Center>
            </Box>
          </Link>
        </div>
        <div className="linkedinBtn">
          <Link href="https://www.linkedin.com/in/philcurran/" isExternal>
            <Box
              width={"110px"}
              height={"120px"}
              border={"1px solid #444c52"}
              borderRadius={6}
              _hover={{ bg: "#444c52" }}
              className="emailBtn"
            >
              <Center>
                <VStack>
                  <Box>
                    <BsLinkedin size={48} color={"blue"} />
                  </Box>
                  <Box>
                    <Text>Link Me!</Text>
                  </Box>
                </VStack>
              </Center>
            </Box>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
