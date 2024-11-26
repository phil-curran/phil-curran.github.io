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
        <Text>Coming soon!</Text>
      </VStack>
    </Box>
  );
};

export default Wishes;
