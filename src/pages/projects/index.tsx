import { Flex } from "@chakra-ui/react";
import ProjectList from "../../components/projectList";
import Template from "../../components/template";

export default function Projects() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap={5}
      mb={10}
      w={300}
    >
      <Template />
      <ProjectList />
    </Flex>
  );
}
