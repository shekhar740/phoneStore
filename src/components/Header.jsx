import React, { useState } from 'react';
import logo from '../assets/header/logo.avif';
import { IoMenuSharp, IoSettings } from 'react-icons/io5';
import { FaMessage, FaPhotoFilm, FaUserAstronaut, FaBell } from 'react-icons/fa6';
import Profile from './profile/Profile';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [click, setClick] = useState();
    const navigation = useNavigate();
    const user = useSelector(state => state.user);
    const location = useLocation();
    const pathname = location.pathname.split("/").pop();

    if (pathname === "login" || pathname === "registration" ) {
        return null; // Hide the header for login and registration pages
    }

    return (
        <>
            <div id='' className={`z-10 shadow-2xl shadow-white header-most py-2 md:px-48 header-comp  px-2 sticky top-0 bg-[#4E6BFF] flex justify-between items-center`}>
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
                <FaUserAstronaut className={`hidden md:block`} onClick={() => { !user && navigation('/login'); document.getElementById('profile').showModal() }} />
                <IoMenuSharp className='md:hidden block text-2xl text-black' />
            </div>
            {user && (
                <dialog id="profile" className="modal rounded-md">
                    <div className=" modal-box max-w-[450px]">
                        <form method="dialog" className=''>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <Profile />
                    </div>
                </dialog>
            )}

        </>



    );
}

export default Header;
