import React from "react";
import { Box, Heading, Text, Divider, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import content from "@/content/index.json";

const PodiumItems = () => {
  return (
    <section id="podium">
      <Box p="6">
        <Flex justifyContent="center">
          {content.podium.podiumItems.map((option, index) => (
            <Link
              as={NextLink}
              href={option.href}
              key={index}
              target="_blank"
              _hover={{ textDecoration: "none" }}
            >
              <Box
                p={4}
                margin={5}
                border="1px solid"
                borderRadius="10px"
                _hover={{ backgroundColor: "#212121" }}
              >
                <Heading as="h3" size="md" mb="2">
                  {option.title}
                </Heading>
                <Text>{option.intro}</Text>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>
      <Divider />
    </section>
  );
};

export default PodiumItems;
