/* eslint-disable react/prop-types */
import { Image, Text, Box, Center, VStack } from "@chakra-ui/react";

const SKillCard = ({ image, alt, title }) => {
  return (
    <Box
      padding={4}
      width={"110px"}
      height={"120px"}
      border={"1px solid #444c52"}
      borderRadius={6}
      className="skill-card"
      _hover={{ bg: "#444c52" }}
    >
      <Center>
        <VStack>
          <Box width={"50px"} height={"50px"}>
            <Image maxW={"50px"} src={image} alt={alt} />
          </Box>
          <Box>
            <Text mb={0} fontWeight={600}>
              {title}
            </Text>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};

export default SKillCard;
