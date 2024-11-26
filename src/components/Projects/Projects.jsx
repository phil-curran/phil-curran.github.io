import { Box, Grid, Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";

/* components */
import SectionHeader from "../Misc/SectionHeader";
import AnimatedTabPanel from "../Misc/MotionTabPanel";

/* Project List */
import AmzPrepTool from "./project_list/amz-prep-tool/AmzPrepTool";
import UWMADxCoursera from "./project_list/uw_coursera/UWMADxCoursera";

const Projects = () => {
  return (
    <Box id="projects" height="100vh">
      {/* Container for the Projects Section */}
      <Grid templateRows="80px 1fr" height="100%">
        {/* Header */}
        <SectionHeader title="Projects" bgColor="#2980b9" />

        {/* Content Section */}
        <Tabs variant="enclosed">
          <Grid templateColumns="1fr 3fr" height="100%">
            {/* Projects List as Tabs */}
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
                  Amazon AWS Interview Prep Tool
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
                  UW Madison x Coursera
                </Tab>
                {/* <Tab
                  color="white"
                  _selected={{ bg: "gray" }}
                  justifyContent="flex-end"
                  display="flex"
                  alignItems="center"
                  borderRadius={4}
                  p="10px"
                >
                  U of WA x Workday
                </Tab> */}
              </Box>
            </TabList>

            {/* Project Details as Tab Panels */}
            <TabPanels bg="gray" p="20px" overflowY="auto" color="white">
              <AnimatedTabPanel component={AmzPrepTool} key="amz-prep-tool" />
              <AnimatedTabPanel component={UWMADxCoursera} key="project-two" />
            </TabPanels>
          </Grid>
        </Tabs>
      </Grid>
    </Box>
  );
};

export default Projects;
