"use client";

import Home from "@/app/page";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ScrollColorChange = ({
  children
  
}: {
  children: any;
  
}) => {
  const pathname = usePathname();
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
      if (pathname === "/") {
        return scrollPosition <= 10
        ? "black"
        : "#454648"
        ? "#575759"
        : "#C5C4C9";
      } else if (pathname === "/services") { // Ensure "Services" is spelled correctly
        return scrollPosition <= 30
          ? "white"
          : scrollPosition <= 35
          ? "white"
          : "white";
      } else if (pathname === "/about"){
        return scrollPosition <= 30
          ? "white"
          : scrollPosition <= 50
          ? "black"
          : "gray";
      } else if (pathname === "/getintouch"){
        return scrollPosition <= 30
        ? "#643EFF"
        : "#643EFF"
        ? "#575759"
        : "#C5C4C9";
      } 
      
      console.log(pathname);
    } else if (pathname === "/" && scrollPosition <= 60) {
      return scrollPosition <= 30
        ? "#959599"
        : "#C4C3C8"
        ? "#E2E2E4"
        : "#C5C4C9";
    } else if (pathname === "/" && scrollPosition <= 90) {
      return scrollPosition <= 70 ? "white" : "white" ? "#E2E2E4" : "#C5C4C9";

    }
     else {
      (pathname === "/" && scrollPosition <= 10)
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
