import { Tab } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CustomTab = ({ title }) => {
  return (
    <Tab
      color="white"
      _selected={{ bg: "gray.700", color: "white" }}
      justifyContent="flex-end"
      display="flex"
      alignItems="center"
      borderRadius={4}
      p="10px"
    >
      {title}
    </Tab>
  );
};

CustomTab.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CustomTab;
