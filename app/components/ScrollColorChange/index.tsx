"use client";

import React, { useEffect, useState } from "react";

const ScrollColorChange = ({ children }: { children: any }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getColorFromScrollPosition = (scrollPosition: number) => {
    if (scrollPosition <= 20) {
      return scrollPosition <= 10 ? "black" : "#454648" ? "#575759" : "#C5C4C9";

    } else if (scrollPosition <= 60) {
      return scrollPosition <= 30
        ? "#959599"
        : "#C4C3C8"
        ? "#E2E2E4"
        : "#C5C4C9";

    } else if (scrollPosition <= 90) {
      return scrollPosition <= 70 ? "white" : "white" ? "#E2E2E4" : "#C5C4C9";
      
    } else {
      return "black";
    }
  };

  console.log(scrollPosition);
  const backgroundColor = getColorFromScrollPosition(scrollPosition);

  return (
    <div
      style={{
        backgroundColor,
        transition: "background-color 0.5s",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollColorChange;
