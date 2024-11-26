import { motion } from "framer-motion";
import { TabPanel } from "@chakra-ui/react";
import PropTypes from "prop-types";

/* Create a reusable MotionTabPanel */
const MotionTabPanel = motion.create(TabPanel);

const AnimatedTabPanel = ({ component: Component, ...props }) => {
  return (
    <MotionTabPanel
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props} // Pass additional props if needed
    >
      <Component />
    </MotionTabPanel>
  );
};

AnimatedTabPanel.propTypes = {
  component: PropTypes.elementType.isRequired, // Specifies that `component` must be a React component
};

export default AnimatedTabPanel;
