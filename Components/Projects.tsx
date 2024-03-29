/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import React from 'react'
import { PresentationChartBarIcon } from '@heroicons/react/20/solid'

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem] flex flex-col items-center'>
      <div className="flex items-center">
        <PresentationChartBarIcon className="text-yellow-300 w-[3.5rem] h-[3.5rem] mx-4 animate-pulse" />
        <h1 className='heading'>
        Pro<span className='text-yellow-400'>ject</span></h1>
      </div>
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        <div data-aos="fade-up">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image src="/images/p1.jpg" alt="project1" layout="fill" className="object-contain"/>
            </div>
        </div>
        <div data-aos="zoom-out" data-aos-delay="300"> 
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image src="/images/p2.jpg" alt="project2" layout="fill" className="object-contain"/>
            </div>
        </div>
        <div data-aos="fade-down">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image src="/images/p3.jpg" alt="project3" layout="fill" className="object-contain"/>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Projects
