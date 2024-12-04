import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

/* imgs */
import neg_home from "./img/neg_home.png";
import neg_module_thumb from "./img/neg_module_thumb.png";
import neg_module from "./img/neg_module.png";

const FosterDesign = () => {
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

  return (
    <Box
      width="75%" // Restricts width to 75% of the parent container
      mx="auto" // Centers the box horizontally
      mt={4}
    >
      {/* Header */}
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Hybrid MBA Course Design
      </Heading>
      <Text mb={8}>
        While working on the Hybrid MBA Program at the University of
        Washington&apos;s Foster School of Business, I was tasked with creating
        a standardized course design template that could be used across the
        program. The goal was to create a more engaging and interactive
        experience for students, while also making the course content more
        accessible and easier to navigate, creating a cohesive feel for the
        entire program. The result was a dynamic and user-friendly course design
        that incorporated a variety of multimedia elements, including videos,
        interactive quizzes, and discussion forums. The new course design
        received positive feedback from students and faculty, and for a time was
        adopted more broadly across other curricula at the business school.
      </Text>

      {/* Main Content Layout */}
      <Flex direction="column" gap={2}>
        {/* Row 1: Image + Text */}
        <Flex gap={6} align="start">
          <Image
            src={neg_home} // Replace with actual image source
            alt="Placeholder"
            bg="red"
            boxSize="150px"
            borderRadius="md"
            cursor="pointer"
            onClick={onOpen1} // Open the modal for this image
            border="2px solid white"
            _hover={{ borderColor: "#1abc9c" }} // Changes border color on hover
          />
          <Box flex="1">
            <Text>
              <strong>Straight-forward Landing Page</strong>
            </Text>
            <UnorderedList>
              <ListItem>
                A clean and intuitive course overview and introductory video
              </ListItem>
              <ListItem>Faculty Contact Information</ListItem>
              <ListItem>
                A course map in table format, with links to individual modules
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
        <Modal
          isOpen={isOpen1}
          onClose={onClose1}
          isCentered
          scrollBehavior="outside"
        >
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
                src={neg_home} // Replace with actual full-size image source
                alt="Placeholder Full"
                maxWidth="100%" // Ensures image fits within modal width
              />
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Row 2: Text + Image */}
        <Flex gap={6} align="center" flexDirection="row-reverse">
          <Image
            src={neg_module_thumb} // Replace with actual image source
            alt="Placeholder"
            bg="red"
            boxSize="150px"
            borderRadius="md"
            cursor="pointer"
            onClick={onOpen2} // Open the modal for this image
            border="2px solid white"
            _hover={{ borderColor: "#1abc9c" }} // Changes border color on hover
          />
          <Text flex="1">
            <strong>Module Layout</strong>
            <UnorderedList>
              <ListItem>
                Chronological &apos;to do&apos; list of module&apos;s course
                content
              </ListItem>
              <ListItem>Styled links to various course assets</ListItem>
            </UnorderedList>
          </Text>
        </Flex>
        <Modal
          isOpen={isOpen2}
          onClose={onClose2}
          isCentered
          scrollBehavior="outside"
        >
          <ModalOverlay bg="whiteAlpha.500" backdropFilter="blur(20px)" />
          <ModalContent maxW="80%">
            <ModalBody
              p={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={neg_module} // Replace with actual full-size image source
                alt="Placeholder Full"
                maxWidth="100%"
                borderRadius={8}
              />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Text mt={4}>
          This course content was generated with another product I developed,
          called &apos;LMS Course Generation,&apos; which you can view in this
          projects section. All of the content you see in these images was
          generated with Javascript and the Google Apps API.
        </Text>
      </Flex>
    </Box>
  );
};

export default FosterDesign;
