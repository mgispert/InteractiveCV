import React from "react";
import {
  Box,
  Heading,
  Text,
  Divider,
  List,
  ListItem,
  Link,
  Flex,
} from "@chakra-ui/react";
import content from "@/content/index.json";
import Form from "./form";
import NextLink from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section id="Contact">
    <Box p="6">
      <Heading as="h2" size="lg" mb="4">
        {content.contact.title}
      </Heading>
      <Text mb="4">{content.contact.description}</Text>
      <List align="center">
        {content.contact.options.map((option, index) => (
          <ListItem key={index}>
            <Text>{option}</Text>
          </ListItem>
        ))}
        <ListItem>
          <Flex gap={4} mt={3} justifyContent="center">
            <Link as={NextLink} href={content.contact.linkedin} target="_blank">
              <FaLinkedin />
            </Link>
            <Link as={NextLink} href={content.contact.github} target="_blank">
              <FaGithub />
            </Link>
          </Flex>
        </ListItem>
      </List>
      <Form />
    </Box>

    <Divider />
  </section>
);

export default Contact;
