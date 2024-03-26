import React, { useState } from 'react'
import logo from '../assets/header/logo.avif'
import { IoMenuSharp, IoSettings } from 'react-icons/io5'
import { FaMessage, FaPhotoFilm, FaUserAstronaut,FaBell } from 'react-icons/fa6'


const Header = () => {
    const [click,setClick] = useState();
    
    return (
        <div className='header-most py-2 md:px-48  px-2 sticky top-0 bg-[#4E6BFF] flex justify-between items-center'>
            <div className='flex items-center gap-3 font-bold font-dancing'>
                <img src={logo} alt="" className='w-8' />
                <h3 className='underline underline-offset-4 font-bold text-2xl'>PhoneStore</h3>
            </div>
            <ul className='md:flex gap-5 font-bold hidden'>
                <li>My Account</li>
                <li>Transaction</li>
                <li>Inventory</li>
                <li>Analytics</li>
                <li>Actvities</li>
            </ul>
            <ul className='flex gap-5'>
                <li className=''>
                    <IoSettings />
                </li>
                <li><FaMessage /></li>
                <li><FaBell /></li>
            </ul>
            <FaUserAstronaut className='hidden md:block' onClick={()=> setClick(true)} />
            <IoMenuSharp className='md:hidden block text-2xl text-black' onClick={()=>setClick((prev)=>!prev)} />
            {/* <div className={`${click ? "" : "hidden"}`}>
                <div className=" grid min-h-screen place-content-center absolute md:-top-40 md:-right-60 left-8 z-10 -top-10">
                    <div className="bg-white shadow-lg rounded-xl max-w-xs mx-auto relative">
                        <header className="bg-gradient-to-r from-indigo-500 to-indigo-600 transform flex items-center mb-10 py-8 px-6">
                            <img
                                className="rounded-full w-20 h-20 ring-4 ring-opacity-20 ring-gray-200"
                                src="https://randomuser.me/api/portraits/women/79.jpg"
                                alt="Dr. Jessica James"
                            />
                            <div className="ml-5">
                                <h1 className="text-white tracking-wide text-lg">Shekhar Metre</h1>
                                <p className="text-gray-300 tracking-wider text-sm">Professional Retailer</p>
                            </div>
                        </header>
                        <button className="text-white capitalize text-sm bg-gradient-to-r from-indigo-500 to-indigo-600 inline-block rounded-md flex items-center py-2 pl-3 pr-4 shadow-md mx-auto tracking-wider mb-5">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            add branch
                        </button>

                        <ul className="px-8 relative pb-5">
                            <li className="flex items-center text-gray-900 text-md py-4">
                                <span className="text-gray-400 mr-5">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
                                    </svg>
                                </span>
                                Dashboard
                            </li>
                            <li className="flex items-center text-gray-900 text-md py-4">
                                <span className="text-gray-400 mr-5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                </span>
                                Post sessions
                            </li>
                            <div className="bg-indigo-600 w-1 h-14 absolute left-0" style={{ bottom: '8.235rem' }}></div>
                            <li className="flex items-center text-gray-900 text-md py-4 text-indigo-600">
                                <span className="text-gray-400 mr-5">
                                    <svg className="w-6 h-6 text-indigo-600" fill="#5046e5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </span>
                                Live sessions
                            </li>
                            <li className="flex items-center text-gray-900 text-md py-4">
                                <span className="text-gray-400 mr-5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                    </svg>
                                </span>
                                Messages
                            </li>
                            <li className="flex items-center text-gray-900 text-md py-4">
                                <span className="text-gray-400 mr-5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </span>
                                Library
                            </li>
                            <span className="absolute text-gray-400 right-5 bottom-5" onClick={()=>setClick(false)}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </span>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>



    )
}

export default Header