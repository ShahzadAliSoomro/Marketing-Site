import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const MarketData = [
  {
    id: 1,
    title: "Development",
    description:
      "We employ some of the best Craft developers in Europe. We have the expertise to build you a beautiful website that will reflect the quality of your business and help you to achieve your objectives. Where required we can extend it with bespoke functionality,",
    link: " plugins,",
    para: "or modules to provide exactly what you need. Every website we build is bespoke and designed to help you to achieve a great ROI.",
    arrowtext: "Web Development",
  },
  {
    id: 2,
    title: "Design",
    description:
      "The right design can tell your brand’s story and help you to achieve your goals. Whether digital, offline or a combination of the two, well-thought-out",
    link: " design",
    para: "combines the technical with the creative, guiding you along a seamless user journey elegantly and effectively. Together we will bring your brand to life through the right digital and offline experiences for your business, delivering excellent UX.",
    arrowtext: "Website Design",
  },
  {
    id: 3,
    title: "Marketing",
    description:
      "Effective marketing places customers at the heart of your business. We will work alongside you to thoroughly understand both your business and your audience. Our discovery is then used to develop the right multi-channel",
    link: " marketing approach; ",
    para: "ensuring that your message lands with the right tone, at the right time, and on the right platform to engage the right customers.",
    arrowtext: "Our Marketing",
  },
  // {
  //     id: 4,
  //     title: 'Craft CMS',
  //     description: 'Having used it since its inception, we are proud to be a leading expert in ',
  //     link: 'Craft CMS.',
  //     para: 'Our accolades include the European Enterprise Awards’ Craft CMS Agency and we were the first UK team to be recognised as Craft CMS Verified Partners. Using Craft, our team create and design unique websites that not only delight but have great functionality and work hard for you.',
  //     arrowtext: 'Craft CMS',
  // },
  // {
  //     id: 5,
  //     title: 'Branding',
  //     description: 'Whether you are seeking a branding consultant or searching for a',
  //     link: ' branding agency',
  //     para: 'to partner with, we can establish a branding strategy to meet your needs. We have a broad range of experience when it comes to brand and identity and can work with you on logo and brand guidelines right through to the implementation of digital assets, print and merchandise.',
  //     arrowtext: 'Branding by webdna',
  // },
  // {
  //     id: 6,
  //     title: 'Strategy',
  //     description: 'A key part of our process involves taking the time to understand the needs of your organisation and the, sometimes conflicting, demands of your stakeholders. Whether you’re upscaling your digital activity or launching your business from the ground up, we can work with you to create or evolve a',
  //     link: 'strategy.',
  //     para: 'that sets you up for success in your sector.',
  //     arrowtext: 'Strategy Services',
  // },
  // {
  //     id: 7,
  //     title: 'Craft Commerce',
  //     description: 'Both customisable and scalable, Craft Commerce allows us to create excellent ecommerce experiences. Simply put, its functionality allows us to make your ideas a reality, improving and adding value to your processes. We are experts in',
  //     link: ' Craft Commerce, ',
  //     para: 'so much so that in 2022, we were the first UK agency to be awarded Craft Commerce verified status.',
  //     arrowtext: 'Ecommerce Development',
  // },
  // {
  //     id: 8,
  //     title: 'Offline Design',
  //     description: 'We can provide you with all the necessary offline collateral designs as part of our full branding service. We also offer premium',
  //     link: 'design services',
  //     para: 'to marketing clients to accompany your offline marketing activity. Your brand should be consistent however it is experienced. We will help you produce the right print, packaging and environmental experience for your clients, prospects and staff.',
  //     arrowtext: 'Print Branding',
  // },
  // {
  //     id: 9,
  //     title: 'Paid Search',
  //     description: 'PPC can get quick results and, when correctly understood, can play an important part your digital marketing strategy. We don’t take a one-size fits all approach to',
  //     link: 'PPC.',
  //     para: 'Every business is unique and requires a thought-out approach to ensure optimal results. We will take the time to carry out relevant activities such as keyword research as well as understand the search trends in your sector.',
  //     arrowtext: 'Paid Search',
  // },
];

export default function Marketing() {
  return (
    <div className="w-full container mx-auto">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 lg:p-14 p-7">
        {MarketData.map((data) => (
          <div key={data.id} className="flex flex-col gap-5">
            <div className="lg:text-5xl text-2xl">{data.title}</div>
            <p className="w-full lg:w-[401.33px] text-lg text-gray-500">
              {data.description}
              <Link
                href=""
                className="text-[#f2a900] hover:text-[hsla(36,100%,47%,1)] border-b border-[#f2a900]"
              >
                {data.link}
              </Link>
              {data.para}
            </p>
            <div className="flex items-center gap-3">
              <div className="text-lg font-normal">{data.arrowtext}</div>
              <div className="bg-[#f2a900] hover:bg-[hsla(36,100%,47%,1)] w-[40px] h-[40px] rounded-full p-2">
                <BsArrowRight className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
