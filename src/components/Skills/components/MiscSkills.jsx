import { SimpleGrid, VStack, Image, Text } from "@chakra-ui/react";

/* icon imports */
import Windows from "../../../assets/img/skills/Windows.svg";
import Mac from "../../../assets/img/skills/Mac.svg";
import Linux from "../../../assets/img/skills/Linux.svg";
import Docker from "../../../assets/img/skills/Docker.svg";
import Markdown from "../../../assets/img/skills/Markdown.svg";
import Notion from "../../../assets/img/skills/Notion.svg";
import Obsidian from "../../../assets/img/skills/Obsidian.svg";
import Fusion360 from "../../../assets/img/skills/Fusion360.svg";
import DaVinci from "../../../assets/img/skills/DaVinciResolve.svg";
import Inkscape from "../../../assets/img/skills/Inkscape.svg";

const miscSkills = [
  { name: "Windows", icon: Windows },
  { name: "Mac", icon: Mac },
  { name: "Linux", icon: Linux },
  { name: "Docker", icon: Docker },
  { name: "Markdown", icon: Markdown },
  { name: "Notion", icon: Notion },
  { name: "Obsidian", icon: Obsidian },
  { name: "Fusion 360", icon: Fusion360 },
  { name: "DaVinci Resolve", icon: DaVinci },
  { name: "Inkscape", icon: Inkscape },
];

const MiscSkills = () => {
  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={8} p={12}>
      {miscSkills.map((skill) => (
        <VStack
          key={skill.name}
          bg="gray"
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

export default MiscSkills;
