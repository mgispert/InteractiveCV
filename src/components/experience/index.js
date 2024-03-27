import React from "react";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Divider,
  ListIcon,
} from "@chakra-ui/react";
import { MdOutlineWorkOutline } from "react-icons/md";
import content from "@/content/index.json";

const Experience = () => (
  <section id="Experience">
    <Box p="6">
      <Heading as="h2" size="lg" mb="4">
        {content.experience.title}
      </Heading>
      <Text mb="6">{content.experience.description}</Text>
      <List>
        {content.experience.jobs.map((job, index) => (
          <ListItem key={index}>
            <Heading as="h3" size="md" mb="2">
              <ListIcon as={MdOutlineWorkOutline} color="gray" /> {job.title}
            </Heading>
            <Text>{job.description}</Text>
            <br />
          </ListItem>
        ))}
      </List>
    </Box>
    <Divider />
  </section>
);

export default Experience;
