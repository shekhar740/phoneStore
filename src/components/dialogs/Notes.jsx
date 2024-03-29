import React, { useState } from 'react';
import logo from '../../assets/header/logo.avif';
import { FaBookmark, FaLock, FaStar } from 'react-icons/fa';

const Notes = () => {
    const [indexes, setIndexes] = useState(0)
    const task = ["All notes", "To-do-list", "Private", "timePass", "Anything"];
    const today = [1, 2, 3, 4, 5]
    return (
        <div className='flex '>
            <div className='bg-[#ffaec1] md:p-5 p-3 md:w-[500px]  rounded-md h-[80vh] overflow-scroll'>
                <div className='flex justify-between items-center sticky top-1 backdrop-blur-3xl  backdrop:shadow-md p-2'>
                    <div>
                        <h2 className='font-medium text-sm'>Hello, Bhagyawanti</h2>
                        <h4 className='text-2xl font-semibold'>Welcome to Notes</h4>
                    </div>
                    <img src={logo} alt="" className='w-10 h-10 rounded-full' />
                </div>
                <p className='text-sm font-medium mt-6'>29 notes</p>
                <div className='flex gap-5 md:w-[480px] w-full'>
                    <div className='overflow-x-auto flex gap-4 whitespace-nowrap mt-2'>
                        {task.map((item, i) => <p key={i} className={`text-xl inline-block duration-700 ease-in-out cursor-pointer p-1 font-medium rounded-md px-3 ${indexes == i ? "bg-black text-white" : "bg-white text-black"}`} onClick={() => setIndexes(i)} >{item}</p>)}
                    </div>
                </div>
                <div className='mt-8 list'>
                    <h1 className='text-2xl font-semibold my-3' >Today</h1>
                    <div className='flex flex-col gap-1 overflow-scroll h-[146px]'>
                        {today.map((item, i) => (
                            <div className='bg-white flex shadow-2xl flex-col p-2 rounded-md'>
                                <div className='flex justify-between items-center'>
                                    <p key={i} className='font-semibold text-2xl'>Item main title</p>
                                    <div className='flex items-center gap-2'>
                                        <FaLock className='cursor-pointer text-blue-400' />
                                        <FaStar className='cursor-pointer text-blue-500' />
                                        <FaBookmark className='cursor-pointer text-orange-500' />
                                    </div>
                                </div>

                                <p>For not for milk</p>
                            </div>
                        ))}
                        <p className='text-center font-semibold italic'>Over the list</p>
                    </div>
                </div>
                <div className='mt-8 list'>
                    <h1 className='text-2xl font-semibold my-3' >Yesterday</h1>
                    <div className='flex flex-col gap-1 overflow-scroll h-[146px]'>
                        {today.map((item, i) => (
                            <div className='bg-white flex shadow-2xl flex-col p-2 rounded-md'>
                                <div className='flex justify-between items-center'>
                                    <p key={i} className='font-semibold text-2xl'>Item main title</p>
                                    <div className='flex items-center gap-2'>
                                        <FaLock className='cursor-pointer text-blue-400' />
                                        <FaStar className='cursor-pointer text-blue-500' />
                                        <FaBookmark className='cursor-pointer text-orange-500' />
                                    </div>
                                </div>

                                <p>For not for milk</p>
                            </div>
                        ))}
                        <p className='text-center font-semibold italic'>Over the list</p>
                    </div>
                </div>
                <div className='mt-8 list'>
                    <h1 className='text-2xl font-semibold my-3' >Last Week</h1>
                    <div className='flex flex-col gap-1 overflow-scroll h-[146px]'>
                        {today.map((item, i) => (
                            <div className='bg-white flex shadow-2xl flex-col p-2 rounded-md'>
                                <div className='flex justify-between items-center'>
                                    <p key={i} className='font-semibold text-2xl'>Item main title</p>
                                    <div className='flex items-center gap-2'>
                                        <FaLock className='cursor-pointer text-blue-400' />
                                        <FaStar className='cursor-pointer text-blue-500' />
                                        <FaBookmark className='cursor-pointer text-orange-500' />
                                    </div>
                                </div>
                                <p>For not for milk</p>
                            </div>
                        ))}
                        <p className='text-center font-semibold italic'>Over the list</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#ffaec1] md:p-5 p-3 md:w-[500px]  rounded-md h-[80vh] overflow-scroll'>
                <div className='flex justify-between'>
                            
                </div>
            </div>
        </div>

    );
};

export default Notes;
