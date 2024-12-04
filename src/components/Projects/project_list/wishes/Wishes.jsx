/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Wishes = () => {
  return (
    <Box
      width="75%" // Restricts width to 75% of the parent container
      mx="auto" // Centers the box horizontally
    >
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Wisconsin Dept. of Public Health:
        <br />
        WISHes Caregiver Training
      </Heading>
      <VStack spacing={4} align="stretch">
        <Text>
          While working as an ID at the University of Wisconsin's Division of
          Information Technology, a colleage and I developed a training called
          "Care of the Student with Special Healthcare Needs," in partnership
          with the Wisconsin Department of Public Instruction and the Wisconsin
          Public Health Association.
        </Text>
        <Text>
          This project was built as a interactive Articulate Storyline project,
          including embedded video, interactive quizzes, branching logic,
          variables for progress tracking, a library of job aids & related
          resources, and a certificate of completion.
        </Text>
        <Text>
          The project is still live and viewable{" "}
          <Link
            color="#3498db"
            href="https://media.dpi.wi.gov/sspw/av/uaptraining-WISHes/story_html5.html"
            isExternal
          >
            here.
            <ExternalLinkIcon mb="4px" ml="-6px" />
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default Wishes;
