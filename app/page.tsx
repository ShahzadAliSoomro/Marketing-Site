import React from "react";
import HeroSec from "./components/HeroSec";
import Marketing from "./components/Marketing";
import gsap from "gsap";
import barba from "barba.js";

export default function Home() {
  return (
    <div>
      <HeroSec />
      <Marketing />
    </div>
  );
}
