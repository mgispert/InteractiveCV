import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import content from "@/content/index.json";
import PodiumItems from "./podiumItems";

const Podium = () => (
  <section id="Podium">
    <Box p="6">
      <Heading as="h2" size="lg" mb="4">
        {content.podium.title}
      </Heading>
      <Text mb="6">{content.podium.description}</Text>
      <PodiumItems />
    </Box>
  </section>
);

export default Podium;
