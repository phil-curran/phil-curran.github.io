/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Flex,
  Grid,
  Icon,
  UnorderedList,
  ListItem,
  Text,
  Link,
} from "@chakra-ui/react";
import { RiLinkedinBoxFill, RiMailAddFill, RiGithubFill } from "react-icons/ri";

import SectionHeader from "../Misc/SectionHeader";

const Contact = () => {
  return (
    <Box id="contact" bg="#8e44ad" height="100vh">
      {/* Container for the Contact Section */}
      <Grid templateRows="80px 1fr" height="100%">
        {/* Header */}
        <SectionHeader title="Contact:" bgColor="#8e44ad" />
        {/* Content Section */}
        <Grid templateColumns="1fr 1fr" height="100%">
          {/* Contact List */}
          <Box
            p="20px"
            overflowY="auto"
            bg="black"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-end"
          >
            <UnorderedList listStyleType="none" m={0} p={0} w="100%">
              <ListItem
                p="10px"
                mb="10px"
                cursor="pointer"
                color="white"
                textAlign="end"
                _hover={{ bg: "gray.700" }}
              >
                Let's talk!
              </ListItem>
            </UnorderedList>
          </Box>

          {/* Contact Details */}
          <Box
            bg="gray"
            p="20px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid gap="20px" w="100%">
              <Flex align="center" gap="10px">
                <Icon as={RiMailAddFill} fontSize="2xl" color="#1abc9c" />
                <Text>
                  Email:{" "}
                  <Link href="mailto:pecurran@outlook.com" color="#3498db">
                    pecurran@outlook.com
                  </Link>
                </Text>
              </Flex>
              <Flex align="center" gap="10px">
                <Icon as={RiLinkedinBoxFill} fontSize="2xl" color="#3498db" />
                <Text>
                  LinkedIn:{" "}
                  <Link
                    href="https://www.linkedin.com/in/philcurran/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="#3498db"
                  >
                    /philcurran
                  </Link>
                </Text>
              </Flex>
              <Flex align="center" gap="10px">
                <Icon as={RiGithubFill} fontSize="2xl" color="#9b59b6" />
                <Text>
                  GitHub:{" "}
                  <Link
                    href="https://github.com/phil-curran"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="#3498db"
                  >
                    /phil-curran
                  </Link>
                </Text>
              </Flex>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
