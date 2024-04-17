"use client";
import { useEffect, useState } from "react";
import { Button, Link } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window?.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window?.addEventListener("scroll", toggleVisibility);

    return () => window?.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Link href="#">
          <Button position="fixed" bottom="20px" right="20px">
            <FaArrowUp />
          </Button>
        </Link>
      )}
    </>
  );
};

export default ScrollToTop;
