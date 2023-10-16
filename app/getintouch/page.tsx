import React from "react";
import { BsArrowDownShort } from "react-icons/bs";

export default function GetInTouch() {
  return (
    
    <div className="w-full container mx-auto">
      <div className="flex flex-col lg:p-14 p-7">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col text-white">
            <div className="lg:text-7xl text-3xl">Get in touch</div>
            <div className="lg:text-7xl text-3xl font-bold">
              info@webdna.co.uk
            </div>
          </div>
          <div className="flex items-center gap-4 pt-10 lg:pb-40 pb-20 ">
            <div className="text-lg font-normal text-white hover:text-gray-400">Send us a message</div>
            <div className="bg-black hover:bg-white w-[40px] h-[40px] rounded-full p-2">
              <BsArrowDownShort className="text-white hover:text-black w-6 h-6" />
            </div>
          </div>
        </div>
        {/* /// Form start /// */}
        <div className="w-full bg-white pt-24">
          <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 lg:gap-0 p-14">
            <div className="w-full lg:w-3/12">
              <div className="flex flex-col gap-10 ">
                <div className="text-5xl">Send us a message</div>
                <p className="text-lg text-gray-500">
                  We’ll try to get back to you straight away, but please give us
                  a few hours to respond.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-8/12">
              <div className="flex flex-col">
                <form className="flex flex-col gap-12">
                 
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="name"
                      name="fullname"
                      id="fullname"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="fullname"
                      className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="email"
                      name="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="company"
                      className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <textarea
                     
                      name="message"
                      id="message"
                      className="block py-20 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Your Message
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /// forms end /// */}
      </div>
    </div>
    
  );
}
