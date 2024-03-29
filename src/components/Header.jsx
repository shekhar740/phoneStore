import React, { useState } from 'react'
import logo from '../assets/header/logo.avif'
import { IoMenuSharp, IoSettings } from 'react-icons/io5'
import { FaMessage, FaPhotoFilm, FaUserAstronaut,FaBell } from 'react-icons/fa6'


const Header = () => {
    const [click,setClick] = useState();
    
    return (
        <div className='z-10 shadow-2xl shadow-white header-most py-2 md:px-48  px-2 sticky top-0 bg-[#4E6BFF] flex justify-between items-center'>
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
        </div>



    )
}

export default Header