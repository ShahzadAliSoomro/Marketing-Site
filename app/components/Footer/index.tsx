import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className='w-full container mx-auto'>
        <div className='flex flex-col gap-28'>
            <div className='flex flex-col gap-6'>
                <div>
                    <p>Work with us</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <div>Start the</div>
                        <div>Conversation</div>
                    </div>
                    <div className='w-[80px] h-[80px] bg-[#643EFF] rounded-full p-3 justify-center items-center'>
                        <AiOutlineArrowRight />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
