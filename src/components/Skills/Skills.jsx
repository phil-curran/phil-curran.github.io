import {
  Box,
  Grid,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
} from "@chakra-ui/react";
import {
  RiCodeBoxFill,
  RiServerFill,
  RiToolsFill,
  RiLightbulbFlashFill,
  RiBookReadFill,
} from "react-icons/ri";

/* components */
import SectionHeader from "../Misc/SectionHeader";
import IDSkills from "./components/IDSkills";
import FESkills from "./components/FESkills";
import BESkills from "./components/BESkills";
import ToolSkills from "./components/ToolSkills";
import MiscSkills from "./components/MiscSkills";

const Skills = () => {
  return (
    <Box id="skills" height="100vh">
      {/* Container for the Skills Section */}
      <Grid templateRows="80px 1fr" height="100%">
        {/* Header */}
        <SectionHeader title="Skills:" bgColor="#27ae60" />

        {/* Content Section */}
        <Tabs variant="enclosed">
          <Grid templateColumns="1fr 3fr" height="100%">
            {/* Skills List as Tabs */}
            <TabList
              bg="black"
              flexDirection="column"
              p="20px"
              overflowY="auto"
              display="flex"
              justifyContent="center"
              alignItems="flex-end"
              width="100%"
              borderBottom="none"
            >
              <Box display="flex" flexDirection="column" gap="10px">
                <Tab
                  color="white"
                  _selected={{ bg: "gray" }}
                  justifyContent="flex-end"
                  display="flex"
                  alignItems="center"
                  borderRadius={4}
                  p="10px"
                >
                  <Text mr="10px">Instructional Design</Text>
                  <Icon
                    as={RiLightbulbFlashFill}
                    fontSize="2xl"
                    color="#fbc531"
                  />
                </Tab>
                <Tab
                  color="white"
                  _selected={{ bg: "gray" }}
                  justifyContent="flex-end"
                  display="flex"
                  alignItems="center"
                  borderRadius={4}
                  p="10px"
                >
                  <Text mr="10px">Frontend</Text>
                  <Icon as={RiCodeBoxFill} fontSize="2xl" color="#3498db" />
                </Tab>
                <Tab
                  color="white"
                  _selected={{ bg: "gray" }}
                  justifyContent="flex-end"
                  display="flex"
                  alignItems="center"
                  borderRadius={4}
                  p="10px"
                >
                  <Text mr="10px">Backend</Text>
                  <Icon as={RiServerFill} fontSize="2xl" color="#e74c3c" />
                </Tab>
                <Tab
                  color="white"
                  _selected={{ bg: "gray" }}
                  justifyContent="flex-end"
                  display="flex"
                  alignItems="center"
                  borderRadius={4}
                  p="10px"
                >
                  <Text mr="10px">Tools</Text>
                  <Icon as={RiToolsFill} fontSize="2xl" color="#2ecc71" />
                </Tab>
                <Tab
                  color="white"
                  _selected={{ bg: "gray" }}
                  justifyContent="flex-end"
                  display="flex"
                  alignItems="center"
                  borderRadius={4}
                  p="10px"
                >
                  <Text mr="10px">Miscellaneous</Text>
                  <Icon as={RiBookReadFill} fontSize="2xl" color="#9b59b6" />
                </Tab>
              </Box>
            </TabList>

            {/* Skill Details as Tab Panels */}
            <TabPanels bg="gray" p="20px" overflowY="auto" color="white">
              <TabPanel>
                <IDSkills />
              </TabPanel>
              <TabPanel>
                <FESkills />
              </TabPanel>
              <TabPanel>
                <BESkills />
              </TabPanel>
              <TabPanel>
                <ToolSkills />
              </TabPanel>
              <TabPanel>
                <MiscSkills />
              </TabPanel>
            </TabPanels>
          </Grid>
        </Tabs>
      </Grid>
    </Box>
  );
};

export default Skills;
