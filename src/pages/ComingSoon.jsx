import { motion } from 'framer-motion';
import React, { useState } from 'react'
import Loading from '../components/Loading';
import thank from '../assets/utility/thank.json'
import { defaultOptions } from '../utils/shareCode';
import Lottie from 'react-lottie';





const ComingSoon = () => {
    const [notify, setNotify] = useState("");
    const [thanks, setThank] = useState(false);
    const handleClick = () => {
        if (notify.includes(".com")) {
            setThank((prev) => !prev);
            setNotify('')
        }
    }
    console.log(thanks)
    return (
        <div className='md:p-5 p-1 text-center'>
            <h4 className='md:text-5xl text-4xl italic md:mt-0 mt-3 font-extrabold'>Coming Soon</h4>
            <p className='md:w-[70%] m-auto text-black mt-5 md:text-md '>Form automation of people proceses to creating an engage and driven culture.</p>
            {thanks ? (
                <div>
                    <Lottie options={defaultOptions(thank)} width={200} />
                </div>
            ) : (<div className='relative mt-5 md:px-0 px-3'>
                <input type="text" value={notify} onChange={(e) => setNotify(e.target.value)} className='text-white bg-[#292929] text-sm p-3 md:w-[60%]  w-full rounded-md' placeholder='Please enter your email address' />
                <motion.p className='absolute md:right-[7.2rem] right-4 cursor-pointer font-semibold rounded-md bg-white p-2 top-[2px]' onClick={handleClick} >Notify Me</motion.p>
            </div>)}
            <div className='grid place-content-center mt-5'>
                <Loading />
            </div>
        </div>
    )
}

export default ComingSoon