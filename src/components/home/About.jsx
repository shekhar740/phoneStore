import React from 'react'
import about from '../../assets/home/about.png'
import { FaDownload } from 'react-icons/fa6'
import {motion} from 'framer-motion'
import { motionProperties } from '../../utils/MotionProperties'
const About = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 items-center shadow-sm md:px-24 mt-10 '>
            <motion.div {...motionProperties} className='flex flex-col md:gap-10 gap-6'>
                <div className='bg-[#FF6B81] w-fit p-5 rounded-md'>
                    <FaDownload className='text-white text-2xl' />
                </div>
                <h3 className='text-black text-2xl md:text-5xl font-semibold'>1,25,000 Customers Using the Application!</h3>
                <p className='md:text-xl text-sm opacity-70'>Join over 1,25,000 retailers who rely on our management system to streamline operations, optimize sales, and enhance customer experiences. Discover how our platform revolutionizes retail management</p>
                <button className='bg-[#FF6B81] w-fit md:p-5 p-2 px-5 md:px-8 rounded-xl md:text-2xl text-md text-white font-semibold'>
                    Get Started
                </button>
            </motion.div>
            <div>
                <img src={about} alt="" />
            </div>
        </div>
    )
}

export default About