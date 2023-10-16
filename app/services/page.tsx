"use client";
import React, { useEffect, useState } from "react";
import { BiSolidUserBadge } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { TbBrandTether } from "react-icons/tb";
import { MdOutlineDiamond } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { BsShieldCheck } from "react-icons/bs";
import { PiRocketLaunchDuotone, PiTarget } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { FiMap } from "react-icons/fi";
import ScrollColorChange from "../components/ScrollColorChange";

const ServiceData = [
  {
    id: 1,
    icon: <TbBrandTether className="text-black w-[128px] h-[128px]" />,
    title: "Uninvolved Updates",
    description:
      "Experience seamless IT management with our cutting-edge automation solution for OS, SAP Kernel & SAP Hana updates. Say goodbye to manual updates and ensure your systems are always up-to-date with the latest enhancements, security patches, and optimizations, boosting performance and reliability effortlessly.",
    arrow: <BsArrowRight className="text-black w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 2,
    icon: <MdOutlineDiamond className="text-black w-[128px] h-[128px]" />,
    title: "Seamless System Hardening",
    description:
      "Our software ensures the security of your SAP systems and the underlying OS by effortlessly implementing critical hardening measures, safeguarding your data and operations.",
    arrow: <BsArrowRight className="text-black w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 3,
    icon: <VscSettings className="text-black w-[128px] h-[128px]" />,
    title: "Your SAP Landscape Central",
    description:
      "levate your SAP system management with robust SAP Parameter management and centralized deployments using full-featured Ansible playbooks. Harness the power to streamline changes across your SAP landscape, while enjoying enhanced auditing capabilities that provide transparency and control over system configurations.",
    arrow: <BsArrowRight className="text-black w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 4,
    icon: <BsShieldCheck className="text-black w-[128px] h-[128px]" />,
    title: "Secret Management",
    description:
      "Unlock the potential of seamless secret management with our robust, Vault-based solution. Includes automated SSL certificate issuance and renewal, along with secure storage of all your essential credentials within your SAP landscape. Safeguard your sensitive information and enjoy effortless, worry-free management, ensuring your systems are always protected and compliant.",
    arrow: <BsArrowRight className="text-black w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 5,
    icon: <PiTarget className="text-black w-[128px] h-[128px]" />,
    title: "Smooth Orchestration",
    description:
      "Enjoy streamlined SAP automation through seamless integration with Ansible, simplifying complex workflows and enhancing efficiency in your IT operations.",
    arrow: <BsArrowRight className="text-black w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 6,
    icon: <FiMap className="text-black w-[128px] h-[128px]" />,
    title: "Realtime Landscape Overview",
    description:
      "Gain immediate insights into your SAP landscape's health and performance with real-time monitoring, empowering you to make informed decisions and prevent potential issues.",
    arrow: <BsArrowRight className="text-black w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 7,
    icon: <TbBrandTether className="text-black w-[128px] h-[128px]" />,
    title: "Solid Backup Management",
    description:
      "Safeguard your SAP data and configurations with robust backup management, ensuring quick recovery in case of unexpected data loss or system failures.",
    arrow: <BsArrowRight className="text-black w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 8,
    icon: <PiRocketLaunchDuotone className="text-black w-[128px] h-[128px]" />,
    title: "Automagic Discovery",
    description:
      "Gettings started is super simple with our Landscape Discovery Tool. Just point it to an IP range and we'll figure out your system. Have an up-to-date overview of your systems in less than 5 minutes!",
    arrow: <BsArrowRight className="text-black w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 9,
    icon: <GoGraph className="text-black w-[128px] h-[128px]" />,
    title: "Rigorous Reporting",
    description:
      "Access comprehensive and customizable reports to analyze SAP system performance, compliance, and utilization, enabling data-driven decision-making and accountability.",
    arrow: <BsArrowRight className="text-black w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 10,
    icon: <BiSolidUserBadge className="text-black w-[128px] h-[128px]" />,
    title: "Flexible Access Management",
    description:
      "Take control of user access to your SAP systems effortlessly, ensuring the right people have the right permissions, enhancing security, and compliance.",
    arrow: <BsArrowRight className="text-black w-6 h-6" />,
    text: "Read more",
  },
];
// rocket /// <PiRocketLaunchDuotone/>
// graph /// <GoGraph/>
// target guoal <PiTarget/>
// map <FiMap/>
// check4 <BsShieldCheck />
// diamon <MdOutlineDiamond/>
// setting <VscSettings />

export default function Services() {
 
  /// custome color add ///

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const servicePageBackgroundColor = "#FFFFFF";

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentPosition =
  //       (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
  //       100;
  //     setScrollPosition(currentPosition);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const getColorFromScrollPosition = (scrollPosition: number) => {
  //   if (scrollPosition <= 20) {
  //     if (scrollPosition <= 10) {
  //       return "white";
  //     } else if (scrollPosition <= 15) {
  //       const ratio = (scrollPosition - 10) / 5;
  //       return interpolateColors("white", "#454648", ratio);
  //     } else {
  //       const ratio = (scrollPosition - 15) / 5;
  //       return interpolateColors("#454648", "#575759", ratio);
  //     }
  //   } else if (scrollPosition <= 60) {
  //     if (scrollPosition <= 50) {
  //       return "#959599";
  //     } else {
  //       const ratio = (scrollPosition - 50) / 10;
  //       return interpolateColors("#959599", "#C5C4C9", ratio);
  //     }
  //   } else if (scrollPosition <= 90) {
  //     if (scrollPosition <= 70) {
  //       return "white";
  //     } else {
  //       const ratio = (scrollPosition - 70) / 20;
  //       return interpolateColors("white", "#E2E2E4", ratio);
  //     }
  //   } else {
  //     return "white";
  //   }
  // };

  // const interpolateColors = (color1: string, color2: string, ratio: number) => {
  //   const hex = (c: string) => parseInt(c, 16);
  //   const r1 = hex(color1.slice(1, 3));
  //   const g1 = hex(color1.slice(3, 5));
  //   const b1 = hex(color1.slice(5, 7));
  //   const r2 = hex(color2.slice(1, 3));
  //   const g2 = hex(color2.slice(3, 5));
  //   const b2 = hex(color2.slice(5, 7));
    
  //   const r = Math.round(r1 + ratio * (r2 - r1));
  //   const g = Math.round(g1 + ratio * (g2 - g1));
  //   const b = Math.round(b1 + ratio * (b2 - b1));

  //   return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  // };

  // const backgroundColor = getColorFromScrollPosition(scrollPosition);


  return (
    
    <div className="w-full container mx-auto">
      <div className="flex flex-col lg:p-14 p-7">
        <div className="lg:text-5xl text-3xl">Features</div>
        <div className="grid lg:grid-cols-2 grid-cols-1 pt-20 gap-8 lg:gap-0">
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="flex gap-4 lg:p-8 p-0 flex-wrap lg:flex-nowrap"
            >
              <div>{data.icon}</div>
              <div className="flex flex-col gap-5">
                <div className="lg:text-5xl text-2xl">{data.title}</div>
                <p className="w-full lg:w-[388.33px] text-lg text-gray-500">
                  {data.description}
                </p>
                <div className="flex items-center gap-3">
                  <div className="">{data.arrow}</div>
                  <div className="text-lg font-normal">{data.text}</div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="flex gap-4">
            <div>Icon add</div>
            <div className="flex flex-col gap-5">
              <div className="lg:text-5xl text-2xl">Uninvolved Updates</div>
              <p className="w-full lg:w-[388.33px] text-lg text-gray-500">
                Experience seamless IT management with our cutting-edge
                automation solution for OS, SAP Kernel & SAP Hana updates. Say
                goodbye to manual updates and ensure your systems are always
                up-to-date with the latest enhancements, security patches, and
                optimizations, boosting performance and reliability
                effortlessly.
              </p>
              <div className="flex items-center gap-3">
                <div className="">
                  <BsArrowRight className="text-black w-6 h-6" />
                </div>
                <div className="text-lg font-normal">Read more</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  
  );
}
