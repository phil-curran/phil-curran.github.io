import { SimpleGrid, VStack, Image, Text } from "@chakra-ui/react";

/* icon imports */
import ADDIE from "../../../assets/img/skills/addie.svg";
import SAM from "../../../assets/img/skills/SAM.svg";
import Kirkpatrick from "../../../assets/img/skills/Kirkpatrick.svg";
import UBD from "../../../assets/img/skills/ubd.svg";
import Figma from "../../../assets/img/skills/Figma.svg";
import Rise from "../../../assets/img/skills/Rise.svg";
import Storyline from "../../../assets/img/skills/Storyline.svg";
import Captivate from "../../../assets/img/skills/Captivate.svg";
import AdobeCC from "../../../assets/img/skills/AdobeCC.svg";
import QualityMatters from "../../../assets/img/skills/QM.svg";
import Canvas from "../../../assets/img/skills/Canvas.svg";

const idSkills = [
  { name: "ADDIE", icon: ADDIE },
  { name: "SAM", icon: SAM },
  { name: "Kirkpatrick", icon: Kirkpatrick },
  { name: "Backwards Design", icon: UBD },
  { name: "Figma", icon: Figma },
  { name: "Rise360", icon: Rise },
  { name: "Storyline360", icon: Storyline },
  { name: "Captivate", icon: Captivate },
  { name: "Adobe CC", icon: AdobeCC },
  { name: "Quality Matters", icon: QualityMatters },
  { name: "Canvas", icon: Canvas },
];

const IDSkills = () => {
  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={8} p={12}>
      {idSkills.map((skill) => (
        <VStack
          key={skill.name}
          bg="gray.800"
          borderRadius="md"
          p={6}
          boxShadow="md"
          transition="transform 0.15s"
          _hover={{ transform: "scale(1.2)" }}
        >
          <Image src={skill.icon} alt={skill.name} boxSize="50px" mb={2} />
          <Text fontSize="lg" fontWeight="bold">
            {skill.name}
          </Text>
        </VStack>
      ))}
    </SimpleGrid>
  );
};

export default IDSkills;
