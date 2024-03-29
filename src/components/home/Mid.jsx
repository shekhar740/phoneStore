import React from 'react'
import choose from '../../assets/home/choose.png'
import Lottie from 'react-lottie';
import animationData from '../../assets/home/Animation - 1710257305617.json'; // 
import how from '../../assets/home/whychoose.svg'
import { motionProperties, motionPropertiesy } from '../../utils/MotionProperties';
import {motion} from 'framer-motion'
import { defaultOptions } from '../../utils/shareCode';


const Mid = () => {
   
    return (
        <div className='md:mt-40 mt-10 grid md:grid-cols-2  md:gap-20 grid-cols-1 justify-between items-center'>
            <motion.div className='' {...motionProperties}>
            <img src={choose} alt="" />
            </motion.div>
            <motion.div className=' flex flex-col gap-5 px-5' {...motionPropertiesy}>
                <h3 className='md:text-xl text-md text-blue-600 font-medium' >Why Choose us</h3>
                <h1 className='md:text-5xl text-2xl font-semibold'>We Make Our customers happy by giving Best services.</h1>
                <p className='opacity-50 text-xl'>Elevate your retail/wholesale experience with us. Unlock streamlined daily activities, precision inventory control, and exceptional customer service.</p>
                <div className='flex items-center md:gap-4 gap-2'>
                    <button>
                    <Lottie options={defaultOptions(animationData)} />
                    </button>
                    <p>SEE HOW WE WORK</p>
                </div>
                {/* <div className='md:hidden'>
                    <img src={how} alt="" />
                </div> */}
            </motion.div>
        </div>
    )
}

export default Mid