import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
export default function Footer() {
  return (
    <div className="w-full container mx-auto text-white lg:pt-24 pt-0">
      <div className="flex flex-col gap-28 lg:p-14 p-7">
        <div className="w-full border-b-2 border-black dark:border-white lg:pt-14 pt-0"></div>
        <div className="flex flex-col gap-6 lg:pt-24 pt-0">
          <div>
            <p className=" text-lg">Work with us</p>
          </div>
          <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 lg:gap-0">
            <div className="flex flex-col">
              <div className=" lg:text-3xl text-2xl font-semibold">
                Start the
              </div>
              <div className=" lg:text-5xl text-3xl font-bold">
                Conversation
              </div>
            </div>
            <div className="w-[80px] h-[80px] bg-[#643EFF] rounded-full p-3 flex justify-center items-center">
              <BsArrowRight className="text-white w-10 h-10" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-24">
          <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 lg:gap-0 lg:pt-24 pt-0">
            <div className="flex flex-col">
              <div>
                <p>2 Broadway</p>
              </div>
              <div>
                <p>Nottingham NG1 1PS</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p>0115 96 96 083</p>
              </div>
              <div>
                <p>info@webdna.co.uk</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p>Work</p>
              </div>
              <div>
                <p>About</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p>Journal</p>
              </div>
              <div>
                <p>Agencies</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p>Privacy Policy</p>
              </div>
              <div>
                <p>Cookie Policy</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <AiOutlineTwitter className="w-7 h-7" />
            </div>
            <div>
              <BiLogoFacebook className="w-7 h-7" />
            </div>
            <div>
              <BiLogoLinkedin className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
