import { Flex, Text } from "@chakra-ui/react";
import Template from "../../components/template";

export default function Future() {
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

      <Text>Where I am going.</Text>
      <Text>
        In light of ChatGPT, I am currently discovering more about AI and how to
        make use of it personally and for others.
      </Text>
    </Flex>
  );
}
