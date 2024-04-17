"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  Divider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa6";
import content from "@/content/index.json";

const Faq = () => (
  <section id="FAQ">
    <Box p="6">
      <Heading as="h2" size="lg" mb="4">
        {content.faq.title}
      </Heading>
      <List>
        {content.faq.questions.map((item, index) => (
          <ListItem key={index}>
            <Heading as="h3" size="md" mb="2">
              <ListIcon as={FaQuestion} color="gray" /> {item.question}
            </Heading>
            <Text>{item.answer}</Text>
            <br />
          </ListItem>
        ))}
      </List>
    </Box>
    <Divider />
  </section>
);

export default Faq;
