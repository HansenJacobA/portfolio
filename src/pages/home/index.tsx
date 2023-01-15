import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import AboutMe from "../../components/aboutMe";

export default function Home() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap={5}
      mb={10}
      w={400}
    >
      <Template />
      <AboutMe />
    </Flex>
  );
}
