import { Flex, Text } from "@chakra-ui/react";

export default function PageHeading({ text }: { text: string }) {
  return (
    <Flex justify="center" align="center" w={400}>
      <Text fontSize={28} fontStyle="italic" fontWeight="thin">
        {text}
      </Text>
    </Flex>
  );
}
