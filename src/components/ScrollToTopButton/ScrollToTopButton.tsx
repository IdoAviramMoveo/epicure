import React, { useState, useEffect, useCallback } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "./ScrollToTopButton.scss";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = useCallback(() => {
    window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  return (
    <button className={`scroll-to-top-button ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
      <ArrowUpwardIcon />
    </button>
  );
};

export default ScrollToTopButton;
