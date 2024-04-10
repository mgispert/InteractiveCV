import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
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

  const scrollToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          position="fixed"
          bottom="20px"
          right="20px"
        >
          <FaArrowUp />
        </Button>
      )}
    </>
  );
};

export default typeof window !== "undefined" ? ScrollToTop : null;
