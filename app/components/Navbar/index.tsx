import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full container mx-auto">
      <div className="flex justify-between items-center p-14">
        <div className="">
            <Link href="/">
          <svg
            className="w-[95.96px] h-[38.81px]"
            viewBox="0 0 93 38"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.868 9.4v9.4l4.7-9.4h1.567c6.056 0 10.967 4.91 10.967 10.967v17.234H50.135V21.934a3.134 3.134 0 00-3.133-3.134h-3.134v18.801H32.9v-28.2h10.967zM29.768 0v37.602H18.8L18.8 28.2l-4.7 9.4c-7.788 0-14.1-6.313-14.1-14.1C0 15.713 6.312 9.4 14.1 9.4h4.7V0h10.968zm63.206 9.4v28.201H82.007l-.001-9.4-4.7 9.4c-7.787 0-14.1-6.313-14.1-14.1 0-7.788 6.313-14.1 14.1-14.1h15.668zm-74.173 9.4h-3.134a4.7 4.7 0 000 9.401H18.8v-9.4zm63.206 0h-3.133a4.7 4.7 0 000 9.401h3.132v-9.4z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-10 text-[#A09EA0] text-xl">
          <div className="flex justify-center items-center gap-3">
            <div>Services</div>
            <div>
              <AiOutlinePlus />
            </div>
          </div>
          
          <div>About</div>
          
          <div className="bg-[#643EFF] p-3 rounded-full">
            <button className="text-white">Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
