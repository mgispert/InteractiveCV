import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  IoPodiumOutline,
  IoPieChartOutline,
  IoBagOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { BsPatchQuestion } from "react-icons/bs";
import content from "@/content/index.json";

const Navbar = () => {
  const iconMap = {
    Podium: <IoPodiumOutline />,
    Experience: <IoBagOutline />,
    Analytics: <IoPieChartOutline />,
    FAQ: <BsPatchQuestion />,
    Contact: <IoChatbubbleEllipsesOutline />,
  };

  return (
    <section id="navbar">
      <Flex justify="center" align="center" py="4">
        <Breadcrumb spacing="8px" separator="">
          {content.navbar.map((section) => (
            <BreadcrumbItem key={section}>
              <BreadcrumbLink href={`#${section}`}>
                <Icon boxSize={6}>{iconMap[section]}</Icon>
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Flex>
      <Divider />
    </section>
  );
};

export default Navbar;
