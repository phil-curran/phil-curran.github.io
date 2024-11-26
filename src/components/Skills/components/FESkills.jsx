import { SimpleGrid, VStack, Image, Text } from "@chakra-ui/react";

/* icon imports */
import HTML5 from "../../../assets/img/skills/HTML5.svg";
import CSS3 from "../../../assets/img/skills/CSS3.svg";
import Javascript from "../../../assets/img/skills/Javascript.svg";
import Typescript from "../../../assets/img/skills/Typescript.svg";
import React from "../../../assets/img/skills/React.svg";
import Redux from "../../../assets/img/skills/Redux.svg";
import Recoil from "../../../assets/img/skills/Recoil.svg";
import Bootstrap from "../../../assets/img/skills/Bootstrap.svg";
import MaterialUI from "../../../assets/img/skills/MaterialUI.svg";
import SASS from "../../../assets/img/skills/SASS.svg";
import LESS from "../../../assets/img/skills/LESS.svg";
import ChakraUI from "../../../assets/img/skills/ChakraUI.svg";
import Tailwind from "../../../assets/img/skills/Tailwind.svg";
import Jquery from "../../../assets/img/skills/Jquery.svg";
import Node from "../../../assets/img/skills/Node.svg";

const feSkills = [
  { name: "HTML5", icon: HTML5 },
  { name: "CSS3", icon: CSS3 },
  { name: "JavaScript", icon: Javascript },
  { name: "TypeScript", icon: Typescript },
  { name: "React", icon: React },
  { name: "Redux", icon: Redux },
  { name: "Recoil", icon: Recoil },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Material UI", icon: MaterialUI },
  { name: "SASS", icon: SASS },
  { name: "LESS", icon: LESS },
  { name: "Chakra UI", icon: ChakraUI },
  { name: "Tailwind", icon: Tailwind },
  { name: "Jquery", icon: Jquery },
  { name: "NodeJs", icon: Node },
];

const FESkills = () => {
  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={8} p={12}>
      {feSkills.map((skill) => (
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

export default FESkills;
