import { Box, Grid, Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";

/* components */
import SectionHeader from "../Misc/SectionHeader";
import AnimatedTabPanel from "../Misc/MotionTabPanel";

/* Project List Components */
import AmzPrepTool from "./project_list/amz-prep-tool/AmzPrepTool";
import UWMADxCoursera from "./project_list/uw_coursera/UWMADxCoursera";
import FosterDesign from "./project_list/foster_design/FosterDesign";
import RedfinProject from "./project_list/redfin_project/RedfinProject";
import LMSAutomation from "./project_list/lms_automation/LMSAutomation";
import Wishes from "./project_list/wishes/Wishes";

/* Project Data */
const projects = [
  { name: "Amazon AWS Interview Prep Tool", component: AmzPrepTool },
  { name: "Hybrid MBA Course Design", component: FosterDesign },
  { name: "LMS Content Generation", component: LMSAutomation },
  { name: "UW Madison x Coursera", component: UWMADxCoursera },
  { name: "UWMAD x Wisconsin DPH: Caregiver Training", component: Wishes },
  { name: "Redfin Demo Storyline Project", component: RedfinProject },
];

/* Simplified Projects Component */
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
                {projects.map((project, index) => (
                  <Tab
                    key={index}
                    color="white"
                    _selected={{ bg: "gray" }}
                    justifyContent="flex-end"
                    display="flex"
                    alignItems="center"
                    borderRadius={4}
                    p="10px"
                  >
                    {project.name}
                  </Tab>
                ))}
              </Box>
            </TabList>

            {/* Project Details as Tab Panels */}
            <TabPanels bg="gray" p="20px" overflowY="auto" color="white">
              {projects.map((project, index) => (
                <AnimatedTabPanel key={index} component={project.component} />
              ))}
            </TabPanels>
          </Grid>
        </Tabs>
      </Grid>
    </Box>
  );
};

export default Projects;
