import { SimpleGrid, VStack, Image, Text } from "@chakra-ui/react";

/* icon imports */
import Python from "../../../assets/img/skills/Python.svg";
import CSharp from "../../../assets/img/skills/CSharp.svg";
import Node from "../../../assets/img/skills/Node.svg";
import Express from "../../../assets/img/skills/Express.svg";
import dotnet from "../../../assets/img/skills/dotnet.svg";
import Flask from "../../../assets/img/skills/Flask.svg";
import Django from "../../../assets/img/skills/Django.svg";
import MongoDB from "../../../assets/img/skills/MongoDB.svg";
import Firebase from "../../../assets/img/skills/Firebase.svg";
import Supabase from "../../../assets/img/skills/Supabase.svg";
import MySQL from "../../../assets/img/skills/MySQL.svg";
import REST from "../../../assets/img/skills/REST.svg";
import Webpack from "../../../assets/img/skills/Webpack.svg";
import Postman from "../../../assets/img/skills/Postman.svg";

const feSkills = [
  { name: "Python", icon: Python },
  { name: "C#", icon: CSharp },
  { name: "Node.Js", icon: Node },
  { name: "Express.Js", icon: Express },
  { name: ".NET", icon: dotnet },
  { name: "Flask", icon: Flask },
  { name: "Django", icon: Django },
  { name: "MongoDB", icon: MongoDB },
  { name: "Firebase", icon: Firebase },
  { name: "Supabase", icon: Supabase },
  { name: "MySQL", icon: MySQL },
  { name: "REST", icon: REST },
  { name: "Webpack", icon: Webpack },
  { name: "Postman", icon: Postman },
];

const BESkills = () => {
  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={8} p={12}>
      {feSkills.map((skill) => (
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

export default BESkills;
