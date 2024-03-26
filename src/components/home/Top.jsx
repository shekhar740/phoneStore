import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import home from '../../assets/home/home.png'
import { motionProperties, motionPropertiesy } from '../../utils/MotionProperties'

const Top = () => {

    return (
        <div>
            <motion.div className='home-top' {...motionProperties} >
                <h2 className='home-top1'>We Specialize in Retail & Wholesale Solutions</h2>
                <p className='home-top2'>Elevate Your Business with Expertise in UI/UX Development and Digital Marketing for Retailers, Customers, and Wholesalers.</p>
                <div className='home-top3'>
                    <button className='first'>Start for free</button>
                    <button className='second'>Call us +(91) 7406935847 <span className=''>For any Question or concern</span> </button>
                </div>
            </motion.div >
            <motion.div className='md:block hidden absolute -right-52 -top-12 -z-10 w-[800px]' {...motionPropertiesy}>
                <img src={home} alt="" className='' />
            </motion.div>

        </div>
    )
}

export default Top