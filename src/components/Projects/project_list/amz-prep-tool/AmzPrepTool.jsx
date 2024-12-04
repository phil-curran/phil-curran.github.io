import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Link,
  ListItem,
  UnorderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

/* imgs */
import ss1 from "./img/ss1.png";
import ss2 from "./img/ss2.png";
import ss3 from "./img/ss3.png";

const AmzPrepTool = () => {
  // Disclosures for each modal
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();

  return (
    <Box
      width="75%" // Restricts width to 75% of the parent container
      mx="auto" // Centers the box horizontally
      mt={4}
    >
      {/* Header */}
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Amazon AWS Interview Prep Tool
      </Heading>
      <Text mb={8}>
        I developed this tool in preparation for an interview with Amazon,
        having seen other spreadsheet-based tools that were clunky and
        unresponsive. I wanted to have a quick way to identify common questions,
        search for them, index them by keyword and leadership principle, and
        store memory cues to respond to questions on the spot.
      </Text>

      {/* Main Content Layout */}
      <Flex direction="column" gap={2}>
        {/* Row 1: Image + Text */}
        <Flex gap={6} align="center">
          <Image
            src={ss1} // Replace with actual image source
            alt="Placeholder"
            boxSize="150px"
            borderRadius="md"
            cursor="pointer"
            onClick={onOpen1} // Open the modal for this image
            border="2px solid white"
            _hover={{ borderColor: "#1abc9c" }} // Changes border color on hover
          />
          <Box flex="1">
            <Text>
              <strong>Dynamic UI for Question Management</strong>
            </Text>
            <UnorderedList>
              <ListItem>
                A clean and intuitive overview of all questions categorized by
                leadership principle.
              </ListItem>
              <ListItem>
                Interactive accordion panels reveal detailed question text,
                associated topics, and the leadership principles addressed.
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
        <Modal isOpen={isOpen1} onClose={onClose1} isCentered>
          <ModalOverlay bg="whiteAlpha.500" backdropFilter="blur(20px)" />
          <ModalContent maxW="80%">
            {" "}
            {/* Adjusts modal size */}
            <ModalBody
              p={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                borderRadius={8}
                src={ss1} // Replace with actual full-size image source
                alt="Placeholder Full"
                maxWidth="100%" // Ensures image fits within modal width
              />
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Row 2: Text + Image */}
        <Flex gap={6} align="center" flexDirection="row-reverse">
          <Image
            src={ss2} // Replace with actual image source
            alt="Placeholder"
            boxSize="150px"
            borderRadius="md"
            cursor="pointer"
            onClick={onOpen2} // Open the modal for this image
            border="2px solid white"
            _hover={{ borderColor: "#1abc9c" }} // Changes border color on hover
          />
          <Text flex="1">
            <strong>STAR Method Integration</strong>
            <UnorderedList>
              <ListItem>
                Direct integration with Google Sheets to organize and store
                answers in the STAR format, ensuring consistency and easy
                retrieval during interview preparation.
              </ListItem>
            </UnorderedList>
          </Text>
        </Flex>
        <Modal isOpen={isOpen2} onClose={onClose2} isCentered>
          <ModalOverlay bg="whiteAlpha.500" backdropFilter="blur(20px)" />
          <ModalContent maxW="80%">
            <ModalBody
              p={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                borderRadius={8}
                src={ss2} // Replace with actual full-size image source
                alt="Placeholder Full"
                maxWidth="100%"
              />
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Row 3: Image + Text */}
        <Flex gap={6} align="center">
          <Image
            src={ss3} // Replace with actual image source
            alt="Placeholder"
            boxSize="150px"
            borderRadius="md"
            cursor="pointer"
            onClick={onOpen3} // Open the modal for this image
            border="2px solid white"
            _hover={{ borderColor: "#1abc9c" }} // Changes border color on hover
          />
          <Text flex="1">
            <strong>Search Functionality</strong>
            <UnorderedList>
              <ListItem>
                A powerful search bar enables users to find specific questions
                or topics by entering keywords.
              </ListItem>
            </UnorderedList>
          </Text>
        </Flex>
        <Modal isOpen={isOpen3} onClose={onClose3} isCentered>
          <ModalOverlay bg="whiteAlpha.500" backdropFilter="blur(20px)" />
          <ModalContent maxW="80%">
            <ModalBody
              p={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                borderRadius={8}
                src={ss3} // Replace with actual full-size image source
                alt="Placeholder Full"
                maxWidth="100%"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
        <Text mt={4}>
          Learn more about the tool by seeing a demo{" "}
          <Link color="#3498db" href="/amz/index.html" isExternal>
            here <ExternalLinkIcon mb="4px" ml="-6px" />
          </Link>
          , or check out the project on{" "}
          <Link
            color="#3498db"
            href="https://github.com/phil-curran/amz-prep-tool"
            isExternal
          >
            Github <ExternalLinkIcon mb="4px" ml="-6px" />
          </Link>
          &nbsp;to learn more about using Google Sheets as a database.
        </Text>
      </Flex>
    </Box>
  );
};

export default AmzPrepTool;
