import { Flex, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SectionHeader = ({ title, bgColor }) => {
  return (
    <Flex bg={bgColor} align="center" pl="40px">
      <Heading as="h1" size="lg" color="white">
        {title}
      </Heading>
    </Flex>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default SectionHeader;
