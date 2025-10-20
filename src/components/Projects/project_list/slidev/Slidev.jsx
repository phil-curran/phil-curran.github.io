/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Slidev = () => {
  return (
    <Box
      width="75%" // Restricts width to 75% of the parent container
      mx="auto" // Centers the box horizontally
      mt={4}
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Slidev Demo
      </Heading>
      <VStack spacing={4} align="stretch">
        <Text>
          Just a random POC slidev project.
        </Text>
        <Text>
          Check it out {" "}
          <Link color="#3498db" href="/slidev/index.html" isExternal>
            here <ExternalLinkIcon mb="4px" ml="-6px" />
          </Link>
        </Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </VStack>
    </Box>
  );
};

export default Slidev;
