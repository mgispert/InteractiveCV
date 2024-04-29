import React from "react";
import { Box, Heading, Text, Divider, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import content from "@/content/index.json";

const PodiumItems = () => {
  return (
    <section id="podium">
      <Box p="6">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          flexWrap="wrap"
        >
          {content.podium.podiumItems.map((option, index) => (
            <Box
              key={index}
              width={{ base: "100%", md: "auto" }}
              maxWidth={{ base: "100%", md: "30%" }}
              margin={{ base: "10px 0", md: "10px" }}
              overflowY="auto"
              maxHeight="300px"
            >
              <Link
                as={NextLink}
                href={option.href}
                target="_blank"
                _hover={{ textDecoration: "none" }}
              >
                <Box
                  p={4}
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
            </Box>
          ))}
        </Flex>
      </Box>
      <Divider />
    </section>
  );
};

export default PodiumItems;
