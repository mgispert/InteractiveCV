"use client";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import RadialBarChart from "./chart";
import content from "@/content/index.json";

const Analytics = () => (
  <section id="Analytics">
    <Box p={6}>
      <Heading mb={4}>{content.analytics.title}</Heading>
      <Text mb={6}>{content.analytics.description}</Text>
      <Box mb={8}>
        <RadialBarChart />
      </Box>
    </Box>
    <Divider />
  </section>
);

export default Analytics;
