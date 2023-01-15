import { Flex } from "@chakra-ui/react";
import PageHeading from "../pageHeading";

export default function ProjectList() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} w={400}>
      <PageHeading text="List of projects" />
    </Flex>
  );
}
