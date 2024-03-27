import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Text,
} from "@chakra-ui/react";
import progress from "@/content/progress.json";
import content from "@/content/index.json";

const Progress = () => (
  <Box p="6">
    <Heading as="h2" size="lg" mb="4">
      {content.progress.title}
    </Heading>
    <Text mb="6">{content.progress.description}</Text>
    <Table variant="simple">
      <Thead>
        <Tr>
          {progress.columns.map((column, index) => (
            <Th key={index}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {progress.applications.map((application, index) => (
          <Tr key={index}>
            <Td>{application.company}</Td>
            <Td>{application.dateApplied}</Td>
            <Td>{application.status}</Td>
            <Td>{application.position}</Td>
            <Td>{application.stackNeeded}</Td>
            <Td>{application.salary}</Td>
            <Td>{application.location}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
);

export default Progress;
