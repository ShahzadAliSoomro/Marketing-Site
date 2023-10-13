"use client";
import React, { useEffect } from "react";
import HeroSec from "./components/HeroSec";
import Marketing from "./components/Marketing";
import  gsap  from 'gsap';
import barba from 'barba.js';

export default function Home() {
  useEffect(() => {
    const Barba = barba.init();

    // Replace the following with your Barba.js animations and logic
    Barba.hooks.once((data: any) => {
      // Initialization code for your pages
      console.log("Page transition complete");

      // Define the container variable by selecting the element with the [data-scroll-container] attribute
      const container = document.querySelector("[data-scroll-container]");

      // Create a GSAP timeline animation
      const r = gsap.timeline();
      r.from(container, {
        smooth: false,
        offset: [100, 0],
        repeat: 2,
        resetNativeScroll: false,
        onComplete: () => {
          console.log("GSAP animation complete");
        },
      });

      // Optionally, you can perform more GSAP animations using the 'r' timeline.
      // For example:
      r.to(container, { opacity: 0, duration: 2, onComplete: () => {
        console.log("Additional GSAP animation complete");
      }});
    });

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div>
      <HeroSec />
      <Marketing />
    </div>
  );
}
