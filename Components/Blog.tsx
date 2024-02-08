import { ChatBubbleLeftRightIcon, DocumentTextIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem] flex flex-col items-center'>
      <div className="flex items-center">
        <DocumentTextIcon className="text-yellow-300 w-[3.5rem] h-[3.5rem] mx-3 animate-bounce" />
        <h1 className='heading'>
        My
        <span className='text-yellow-400'> Blog</span>
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
        <div>
            <div className='w-[100%] relative h-[400px]'>
                <Image src="/images/blog1.jpg" alt="blog" layout='fill' className='object-contain'/>
            </div>
            <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[1rem]'>
                <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                    December 10, 2023
                </div>
                <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                    <div className='flex items-center space-x-3'>
                        <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                        <p className='text-white'>By Mohak</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                        <p className='text-white'>Comments(2)</p>
                    </div>
                </div>
                <p className='mt-[1rem] text-white font-semibold'>Next js Fullstack Development</p>
            </div>
        </div>
        <div>
            <div className='w-[100%] relative h-[400px]'>
                <Image src="/images/blog1.jpg" alt="blog" layout='fill' className='object-contain'/>
            </div>
            <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[1rem]'>
                <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                    December 10, 2023
                </div>
                <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                    <div className='flex items-center space-x-3'>
                        <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                        <p className='text-white'>By Mohak</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                        <p className='text-white'>Comments(2)</p>
                    </div>
                </div>
                <p className='mt-[1rem] text-white font-semibold'>Next js Fullstack Development</p>
            </div>
        </div>
        <div>
            <div className='w-[100%] relative h-[400px]'>
                <Image src="/images/blog1.jpg" alt="blog" layout='fill' className='object-contain'/>
            </div>
            <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[1rem]'>
                <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                    December 10, 2023
                </div>
                <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                    <div className='flex items-center space-x-3'>
                        <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                        <p className='text-white'>By Mohak</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                        <p className='text-white'>Comments(2)</p>
                    </div>
                </div>
                <p className='mt-[1rem] text-white font-semibold'>Next js Fullstack Development</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
