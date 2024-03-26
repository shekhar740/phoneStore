import React, { useEffect, useState } from 'react'
import { imageSlider } from '../../utils/Slider';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { motion } from 'framer-motion'
const Slider = () => {
    const [indexes, setIndexes] = useState(0);
    const handleNext = () => {
        setIndexes((prev) => {
            if (prev === imageSlider.length - 1) {
                return 0; // Reset to the first index if at the end
            } else {
                return prev + 1; // Increment the index by 1
            }
        });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndexes((prev) => {
                if (prev === imageSlider.length - 1) {
                    return 0; // Reset to the first index if at the end
                } else {
                    return prev + 1; // Increment the index by 1
                }
            });
        }, 10000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="relative w-full h-full md:hidden ">
            <div className="relative duration-1500 transition-all ease-in-out">
                <img
                    src={imageSlider[indexes].image}
                    alt=""
                    className="opacity-90 w-full md:h-[500px] object-center duration-500 ease-in-out transition-all"
                />
                <div className='absolute top-14 left-8 text-black'>
                    <h2 className='text-md font-semibold'>{imageSlider[indexes].header}</h2>
                    <p className='text-[9px] w-[80%] text-start'>{imageSlider[indexes].content}</p>
                    <motion.button className='bg-[#d65db1] rounded-2xl text-white font-semibold px-5 border-2 p-2 mt-5'>
                        {imageSlider[indexes].box}
                    </motion.button>
                </div>
            </div>
            <div>
                <FaAngleLeft
                    className="text-3xl absolute top-24 left-0 opacity-60"
                    onClick={handleNext}
                />
            </div>
            <FaAngleRight
                onClick={handleNext}
                className="text-3xl absolute top-24 right-4"
            />
        </div>
    )
}

export default Slider