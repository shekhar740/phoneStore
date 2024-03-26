import React from 'react'
import { FaCloud } from 'react-icons/fa6'

import { Fea } from '../../utils/Features'
import { motion } from 'framer-motion'
import { motionPropertiesTop, motionPropertiesy } from '../../utils/MotionProperties'
const Features = () => {

  return (
    <div className='px-5'>
      <h3 className='md:text-xl text-md text-blue-600 font-medium text-center'>Features</h3>
      <motion.h1 {...motionPropertiesTop} className='md:text-6xl  md:px-8 text-center text-2xl font-semibold'>Your Experience Gets Better And Better Over Time</motion.h1>
      <p className='opacity-50 text-[10px] md:text-xl md:mt-3 md:text-center'>This app provides real-time insights into your business with comprehensive reports on sales, inventory, receivables, payments, purchases, and more, empowering you to make data-driven decisions for optimized operations and sustainable growth.</p>
      <div className='grid md:grid-cols-3 gap-14 mt-10'>
        {Fea.map((item, index) => (
          <motion.div key={index} className='flex flex-col gap-3 shadow-2xl p-10 rounded-2xl cursor-pointer' {...motionPropertiesTop}>
            <div className='bg-[#FF6B81] w-fit p-5 rounded-md text-2xl'>
              {React.createElement(item.icon, { color: 'white' })}
            </div>
            <h1 className='text-2xl font-semibold'>{item.title}</h1>
            <p className='opacity-65'>{item.desc.slice(0, 100)}</p>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default Features