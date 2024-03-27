import React from "react";
import content from "@/content/index.json";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";

const Title = () => (
  <>
    <Box textAlign="center" m={4}>
      <Heading>{content.home.title}</Heading>
      <Text fontSize="xl">{content.home.description}</Text>
    </Box>
    <Divider />
  </>
);

export default Title;
