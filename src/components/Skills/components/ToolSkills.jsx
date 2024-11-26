import { SimpleGrid, VStack, Image, Text } from "@chakra-ui/react";

/* icon imports */
import Git from "../../../assets/img/skills/Git.svg";
import Github from "../../../assets/img/skills/Github.svg";
import VSCode from "../../../assets/img/skills/VSCode.svg";
import JetBrains from "../../../assets/img/skills/JetBrains.svg";
import Bash from "../../../assets/img/skills/Bash.svg";
import Babel from "../../../assets/img/skills/Babel.svg";
import JSON from "../../../assets/img/skills/JSON.svg";
import NPM from "../../../assets/img/skills/NPM.svg";

const toolSkills = [
  { name: "Git", icon: Git },
  { name: "Github", icon: Github },
  { name: "VSCode", icon: VSCode },
  { name: "JetBrains", icon: JetBrains },
  { name: "Bash", icon: Bash },
  { name: "Babel", icon: Babel },
  { name: "JSON", icon: JSON },
  { name: "NPM", icon: NPM },
];

const ToolSkills = () => {
  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={8} p={12}>
      {toolSkills.map((skill) => (
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

export default ToolSkills;
