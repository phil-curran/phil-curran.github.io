import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  ListIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import LessonPlan from "./img/lesson_plan.png"; // Replace with your image path

const FosterDesign = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Disclosure for the modal

  return (
    <Box
      width="75%" // Restricts width to 75% of the parent container
      mx="auto" // Centers the box horizontally
      mt={4}
    >
      {/* Project Title */}
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Google Apps Script: Course Content Automation for Canvas LMS
      </Heading>

      {/* Overview */}
      <Text mb={4}>
        This project streamlines the process of creating HTML-formatted course
        content for the Canvas Learning Management System, addressing the
        platform’s lack of support for custom CSS. It automates the tedious task
        of applying inline CSS to lesson plans, allowing educators to focus on
        teaching rather than formatting.
      </Text>

      {/* Key Features Section */}
      <Heading as="h3" size="md" mb={2}>
        Key Features:
      </Heading>
      <Flex align="start" gap={4} mb={4}>
        {/* Left-Aligned Image with Modal */}
        <Image
          src={LessonPlan} // Your image source
          alt="Key Features Example"
          boxSize="150px" // Thumbnail size
          borderRadius="md"
          cursor="pointer"
          border="2px solid white"
          onClick={onOpen} // Opens the modal
          _hover={{ borderColor: "#1abc9c" }}
        />
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
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
                src={LessonPlan} // Full-size image source
                alt="Key Features Example Full"
                maxWidth="100%" // Ensures image fits within modal width
              />
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* List Content */}
        <List spacing={3} flex="1">
          <ListItem
            display="list-item"
            textAlign="start"
            styleType="none"
            ml="1.2em"
          >
            <ListIcon as={CheckCircleIcon} color="green.400" />
            <Text as="span" fontWeight="bold">
              Lesson Plan Template:
            </Text>{" "}
            A user-friendly Google Doc template for educators to input their
            course content and guidelines.
          </ListItem>
          <ListItem display="list-item" textAlign="start" ml="1.2em">
            <ListIcon as={CheckCircleIcon} color="green.400" />
            <Text as="span" fontWeight="bold">
              Automated HTML Formatting:
            </Text>{" "}
            Google Apps Scripts parse the lesson plan, wrap text in styled HTML
            tags, and generate a fully formatted document.
          </ListItem>
          <ListItem display="list-item" textAlign="start" ml="1.2em">
            <ListIcon as={CheckCircleIcon} color="green.400" />
            <Text as="span" fontWeight="bold">
              Output Document:
            </Text>{" "}
            A blank repository document receives the styled HTML, ready for
            manual copy-pasting into Canvas LMS or other platforms.
          </ListItem>
        </List>
      </Flex>

      {/* How It Works */}
      <Heading as="h3" size="md" mb={2}>
        How It Works:
      </Heading>
      <Text mb={2}>
        <Text as="span" fontWeight="bold">
          Parsing and Styling:
        </Text>{" "}
        The script identifies content sections, determines formatting needs, and
        applies appropriate inline CSS tags.
      </Text>
      <Text mb={2}>
        <Text as="span" fontWeight="bold">
          Dynamic Updates:
        </Text>{" "}
        Event triggers ensure the output document stays up-to-date whenever the
        template is edited.
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Reusable Utilities:
        </Text>{" "}
        Custom functions handle common tasks, like checking for empty cells or
        evaluating content keywords.
      </Text>
      <Text mt={2}>
        Check out a live example of the Lesson Plan doc{" "}
        <Link
          color="#3498db"
          href="https://docs.google.com/document/d/1V-80wdAogTS9ulk8UKvg3uroJoHF7f0sPuHFPoX4oOI/edit?usp=sharing"
          isExternal
        >
          here <ExternalLinkIcon mb="4px" ml="-6px" />
        </Link>
        , the Container document which houses converted text{" "}
        <Link
          color="#3498db"
          href="https://docs.google.com/document/d/1V-80wdAogTS9ulk8UKvg3uroJoHF7f0sPuHFPoX4oOI/edit?usp=sharing"
          isExternal
        >
          here
          <ExternalLinkIcon mb="4px" ml="4px" />
        </Link>
        , and the code which powers it on{" "}
        <Link
          color="#3498db"
          href="https://github.com/phil-curran/gapps-course-build-automation"
          isExternal
        >
          Github
          <ExternalLinkIcon mb="4px" ml="4px" />.
        </Link>
      </Text>
      <Text mt={2}>
        Finally, you can view the output of this product by viewing the project
        titled &apos;Hybrid MBA Course Design&apos; in the &apos;Projects&apos;
        section of this site.
      </Text>
    </Box>
  );
};

export default FosterDesign;
