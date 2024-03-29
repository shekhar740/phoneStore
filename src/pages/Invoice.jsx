import React, { useEffect, useState } from 'react'
import { IoFlash } from "react-icons/io5";
import { FaBullhorn, FaPlus } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoSearch } from 'react-icons/io5';
import { IoRocket } from "react-icons/io5";
import Lottie from 'react-lottie';
import animation from '../assets/utility/Animation - 1711027656390.json'
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { defaultOptions } from '../utils/shareCode';
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import Loading from '../components/Loading';
import { motion } from 'framer-motion';
import thank from '../assets/utility/thank.json'
import ComingSoon from './ComingSoon';
import Bill from '../components/dashboard/util/Bill';
import DialogueMaker from '../utils/DialogueMaker';



const Invoice = () => {
const [open,setOpen] = useState(false)
  useEffect(() => {
    const header = document.querySelector('.header-most');
    if (header) {
      header.classList.add('hidden')
    }

  }, [])

  const headers = () => {
    return (
      <header className='flex shadow-md border-b-2 mt-2 justify-between items-center md:p-1 md:px-5 p-1'>
        <div className='flex md:gap-5 gap-2'>
          <p className='bg-[#FFE8DA] md:p-4 p-3 rounded-full font-semibold text-center'>BM</p>
          <p className='flex flex-col md:text-xl text-md font-bold'>Bhagywanti Mobile <span className='font-normal md:text-sm text-[11px] opacity-60 text-center'>Retailer Management</span></p>
        </div>
        <div className='flex justify-between text-2xl items-center gap-3 md:gap-5'>
          <div className='md:flex hidden items-center md:gap-5 border-2 md:px-4 p-1 rounded-lg'>
            <IoSearch />
            <input type="text" placeholder='Search for help' className='outline-none text-sm' />
          </div>
          <IoFlash className='hover:text-yellow-600' />
          <FaBullhorn className='hover:text-yellow-600' />
          <FaCircleExclamation className='md:block hidden' />
        </div>
      </header>
    )
  }


  return (
    <div>
      {headers()}
      <div className='mt-2 p-2 bg-[#E6F2FF] text-center w-full overflow-hidden'>
        <p className='RightToLeft flex items-center md:gap-6 font-semibold justify-center w-[110vh] overflow-hidden'>Enjoy Customizable templatetes, Gst,Sales,reports,and Premium support ⭐⭐⭐ <span className='bg-white items-center gap-5 px-4 rounded-2xl p-1 flex'>Super Swipe Offer!  <IoRocket /></span></p>
      </div>
      
      <div className='grid place-content-end md:px-10 mt-10'>
        <div className='flex md:gap-5 gap-2'>
          <button className='bg-blue-800 text-white p-2 px-5 font-semibolds hover:bg-opacity-70  rounded-md'  onClick={()=>setOpen(true)}>Today Sell</button>
          <button className='bg-blue-800 text-white p-2 px-5 font-semibolds hover:bg-opacity-70 rounded-md' onClick={() => document.getElementById('my_modal_5').showModal()}>Purchase</button>
          <button className='bg-blue-800 text-white p-2 px-5 font-semibolds hover:bg-opacity-70 rounded-md' onClick={() => document.getElementById('my_modal_5').showModal()}>Custom Inv</button>
        </div>
      </div>
      <div className='flex md:flex-row flex-col-reverse md:justify-center p-5 gap-5 md:mt-20 items-center'>
        <div className='md:w-1/3 w-full'>
          <Lottie options={defaultOptions(animation)} />
        </div>
        <div>
          <h1 className='md:text-3xl text-[26px] font-bold'>Creating invoices lightning fast.</h1>
          <p className='md:mt-5 mt-2 md:text-sm  text-[12px] opacity-70 font-medium text-blue-400'>Get a detailed summary of all your sales transactions.</p>
          <p className='mt-5 flex  items-center gap-5'><IoCheckmarkDoneCircleSharp color='green' />Create invoice in 10 seconds & share them with Customers</p>
          <p className='mt-3 flex  items-center gap-5'><IoCheckmarkDoneCircleSharp color='green' />Discover templates that's perfect for your business</p>
          <p className='mt-3 flex  items-center gap-5'><IoCheckmarkDoneCircleSharp color='green' />Keep track of your day-to-day transactions</p>
          <button className=' flex gap-5 items-center bg-blue-600 text-white p-2 rounded-md font-semibold md:mt-10 mt-3' onClick={() => document.getElementById('Bill').showModal()} ><FaPlus />Create Your first Invoice</button>
          <p className='cursor-pointer flex gap-5 items-center mt-5 font-medium text-blue-800' onClick={() => document.getElementById('my_modal_5').showModal()} > <RiCustomerService2Fill />Talk to a specialist</p>
          <p className='flex cursor-pointer gap-5 items-center mt-5 font-medium text-blue-800' onClick={() => document.getElementById('my_modal_5').showModal()}> <FaYoutube />Watch a quick video here</p>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <DialogueMaker ComingSoon={ComingSoon} />
          {/* bill dialog */}

          <dialog id="Bill" className="modal rounded-md">
            <div className="modal-box ">
              <form method="dialog" className=''>
                {/* if there is a button in form, it will close the modal */}
                <button className=" btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <div>{headers()}</div>
              <Bill />
            </div>
          </dialog>
          {/* <DialogueMaker ComingSoon={Bill} anyFunction={headers} /> */}
        </div>
      </div>

    </div>
  )
}

export default Invoice