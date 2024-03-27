import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import content from "@/content/index.json";

const Navbar = () => (
  <section id="navbar">
    <Flex justify="center" align="center" py="4">
      <Breadcrumb spacing="8px" separator={<FaCode />}>
        {content.navbar.map((section) => (
          <BreadcrumbItem key={section}>
            <BreadcrumbLink href={`#${section}`}>{section}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Flex>
    <Divider />
  </section>
);

export default Navbar;
