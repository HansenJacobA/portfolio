import { Flex, Text } from "@chakra-ui/react";
import Template from "../../components/template";

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
      <Text fontSize={28} fontStyle="italic" fontWeight="thin">
        {`"From the imagination to reality."`}
      </Text>
      <Text>
        Hello, my name is Jacob Hansen and I am a published photographer, United
        States Army Veteran, and a Software Engineer. I have a passion for
        transferring intangible ideas into physical reality.
      </Text>
      <Text>
        Beginning with photography for example, I would imagine the types of
        photos I would want to capture in various settings, such as taking an
        image of the Milky Way behind a rocky mountain top, then try different
        methods to make it happen. In this example I would travel around in
        Google Maps to find a nearby rocky mountain, find the date that the
        Milky Way would be aligned with the mountain using Photopills, then try
        to take the image with researched camera settings. After succeeding, I
        found this to be a never ending and satisfying cycle applicable to not
        only photography, but software engineering as well.
      </Text>
      <Text>
        In life, I have wanted the liberty of not confining myself to
        applications others have built, but to also create and use my own that
        would be helpful to me personally. With software engineering, from idea
        to the physical, I have been able to create my own, as well as others,
        applications now that are used on any device type, mobile through
        desktop, that are entirely custom and dynamic.
      </Text>
      <Text>
        From what started out as personal curiosity, I have found an ever
        continuos passion for transferring ideas into the physical world. If
        there has ever been an idea for something that you wanted available to
        you, specifically software, lets turn your idea into reality together.
      </Text>
    </Flex>
  );
}
