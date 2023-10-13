import React from 'react'
import { BsArrowDownShort } from 'react-icons/bs'

export default function GetInTouch() {
  return (
    <div className='w-full container mx-auto'>
        <div className='flex flex-col lg:p-14 p-7'>
            <div className='flex flex-col gap-10'>
        <div className="flex flex-col">
          <div className="lg:text-7xl text-3xl">Get in touch</div>
          <div className="lg:text-7xl text-3xl font-bold">info@webdna.co.uk</div>
        </div>
        <div className="flex items-center gap-4 pt-10">
          <div className="text-lg font-normal">Send us a message</div>
          <div className="bg-[#643EFF] w-[40px] h-[40px] rounded-full p-2">
            <BsArrowDownShort className="text-white w-6 h-6" />
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}
