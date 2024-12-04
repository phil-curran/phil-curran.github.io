/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const RedfinProject = () => {
  return (
    <Box
      width="75%" // Restricts width to 75% of the parent container
      mx="auto" // Centers the box horizontally
      mt={4}
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Redfin Demo Storyline Project
      </Heading>
      <VStack spacing={4} align="stretch">
        <Text>
          I created this Storyline project as a homework assignment when
          applying for an Instructional Design role at Redfin.
        </Text>
        <Text>
          I was tasked with creating a brief tutorial that introduced someone to
          a new skill or tool, and chose to create an introductory tutorial for
          Inkscape, my favorite open-source vector graphics programs. It's
          intent was to demystify the Inkscape interface and introduce concepts
          like layers, shapes, alignment, and grouping, as well as how to create
          and modify basic shapes using the Inkscape interface. From these
          simple tools, complex designs can be created.
        </Text>
        <Text>
          I used the opportunity to demonstrate all of the skills I'd developed
          up to that point: audio / video recording & editing, video scripting,
          Articulate Storyline & animation, and graphic design.
        </Text>
        <Text>
          Check out the result Learn more about the tool by seeing a demo{" "}
          <Link color="#3498db" href="/redfin/story_html5.html" isExternal>
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

export default RedfinProject;
