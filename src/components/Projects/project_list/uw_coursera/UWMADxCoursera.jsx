/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const UWMADxCoursera = () => {
  return (
    <Box
      width="75%" // Restricts width to 75% of the parent container
      mx="auto" // Centers the box horizontally
    >
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        University of Wisconsin x Coursera:
        <br />
        Massive Open Online Courses
      </Heading>
      <VStack spacing={4} align="stretch">
        <Text>
          At the start of my tenure as an Instructional Designer at the
          University of Wisconsin - Madison, our workgroup was engaged with
          building a series of Massive Open Online Courses with Coursera. I was
          fortunate enough to lead development of two of the eight courses in
          the series.
        </Text>

        <Text>
          <strong>Energy and The Earth</strong>, with Dr. Alan Carroll, explores
          the complex interplay of scientific, economic, and political factors
          shaping the global energy debate. The course examines critical issues
          such as the limits of fossil fuel supplies, the implications of
          technologies like fracking, and the transition to renewable energy
          systems. Grounded in three principles—efficiency over abundance, the
          transformative impact of technology, and the inherent trade-offs of
          all energy systems—it highlights the finite resources required for
          both fossil and renewable energy. Integrating geological perspectives
          and hands-on experiments, the course empowers participants to make
          informed energy decisions, whether as citizens, policymakers, or
          professionals.
        </Text>
        <Text>
          Unfortunately, many of the course videos are no longer available, but
          you can view the course documents{" "}
          <Link color="#3498db" href="/energy/pages/home.htm" isExternal>
            here.
            <ExternalLinkIcon mb="4px" ml="-6px" />
          </Link>
        </Text>
        <Text>
          <strong>
            Globalizing Higher Education and Research for the 'Knowledge
            Economy'
          </strong>
          was a seven-week MOOC led by Professors Kris Olds (University of
          Wisconsin-Madison) and Susan L. Robertson (University of Bristol). The
          course explores the transformative processes in higher education and
          research driven by globalization, addressing topics such as
          international collaboration, rankings, policy shifts, and the role of
          technology. Unlike traditional MOOCs, it delivers content through
          long-form texts enriched with multimedia elements, avoiding video
          lectures to ensure accessibility in low-bandwidth regions.
        </Text>
        <Text>
          Archived course content can be viewed{" "}
          <Link
            color="#3498db"
            href="/globalization/pages/syllabus.html"
            isExternal
          >
            here.
            <ExternalLinkIcon mb="4px" ml="-6px" />
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default UWMADxCoursera;
