/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const FosterDesign = () => {
  return (
    <Box
      width="75%" // Restricts width to 75% of the parent container
      mx="auto" // Centers the box horizontally
    >
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        University of Washington - Hybrid MBA Course Design
      </Heading>
      <VStack spacing={4} align="stretch">
        <Text>Coming soon!</Text>
      </VStack>
    </Box>
  );
};

export default FosterDesign;
