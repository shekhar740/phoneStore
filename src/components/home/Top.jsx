import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import home from '../../assets/home/home.png'
import { motionProperties, motionPropertiesy } from '../../utils/MotionProperties'
import TextTransition, { presets } from 'react-text-transition';
import { Link } from 'react-router-dom';


const Top = () => {
    const [index, setIndex] = React.useState(0);
    const TEXTS = ['Inventory', 'Activity', 'Tools', 'CRM'];
    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <div>
            <motion.div className='home-top' {...motionProperties} >
                <div className='flex flex-col gap-5 text-5xl font-semibold'>
                    <h2>We Specialize in</h2>
                    <p className='flex gap-2 '>Retail & Wholesale <span className='text-blue-400'><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition></span></p>
                </div>

                <div className='home-top3'>
                    <Link to='/login' className='first'>Start for free</Link>
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