import React from "react";
import { Box, Heading, Text, Divider, List, ListItem } from "@chakra-ui/react";
import content from "@/content/index.json";

const Contact = () => (
  <>
    <Box p="6">
      <Heading as="h2" size="lg" mb="4">
        {content.contact.title}
      </Heading>
      <Text mb="4">{content.contact.description}</Text>
      <List>
        {content.contact.options.map((option, index) => (
          <ListItem key={index}>
            <Text>{option}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
    <Divider />
  </>
);

export default Contact;
