import React, { useEffect, useState } from 'react';
import tempImage from '../../assets/home/about.png';
import { FaCalendarAlt, FaChevronDown, FaPlusCircle, FaSearch } from 'react-icons/fa';
// import main from '../../assets/activity/page.svg'
import Calendars from './Calendar';
import feed from '../../assets/activity/feed.svg';
import edit from '../../assets/activity/edit.svg'
import Utility from './Utility';
import { motion } from 'framer-motion';
import ActivitySave from '../ActivitySave';
// import ActivitySave from '../popups/ActivitySave';


const DHeader = () => {


  const data = [{
    title: "Account Balance",
    balance: 2589,
    image: feed,
  },
  {
    title: "mitra Balance",
    balance: 2589.00,
    image: feed,
  },
  {
    title: "Jio Balance",
    balance: 400.00,
    image: feed,
  },
  {
    title: "Airpay Pro",
    balance: 2589,
    image: feed,
  }];

  const data2 = [1, 2, 3, 4, 5]

  function addActive(index) {
    // Logic to add 'active' class to the clicked element
    // For example:
    const elements = document.querySelectorAll('.task');
    elements.forEach((element, i) => {
      if (i === index) {
        element.classList.add('active-not');
      } else {
        element.classList.remove('active-not');
      }
    });
  }

  return (
    <div className="-z-0 md:ml-32 relative grid grid-cols-1 md:grid-cols-3 items-start md:gap-10">
      <div className='col-span-2'>
        <div className='flex justify-between items-center'>
          <div className='flex items-start gap-8'>
            <img src={tempImage} alt="" className="md:w-[4em] w-[3em] rounded-full border-4 border-dashed border-[#845ec2]" />   {/*here we set future of status view of wholesalers uploaded like any offers combo or etc its only available on wholesalers no retailers  */}
            <div>
              <h1 className='md:text-[2em]  flex gap-1 flex-col font-semibold'>Bhagywanti Mobiles <span className='text-xl text-center font-normal opacity-70'>Vidya Nagar Colony Bidar</span></h1>
            </div>

          </div>
          <div className='relative w-1/2 px-20 md:block hidden'>
            <input type="text" placeholder='Search....' className='border-2 p-3 rounded-2xl w-full' />
            <FaSearch className='absolute top-4 opacity-60 right-24 text-2xl' />
          </div>
        </div>
        <div className='flex justify-between  md:px-10 items-center my-10'>
          <h2 className='md:text-[2em] text-2xl font-semibold'>Daily Activity </h2>
          <motion.button whileTap={{ scale: 0.1 }} className='font-semibold italic border-2 p-2 shadow-inner shadow-2xl'>
            Weekly
          </motion.button>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-2 overflow-scroll md:gap-20 gap-5 md:h-[24em] h-[14rem] min-w-20'>
          <div className='relative hidden md:block row-span-2 shadow-2xl rounded-2xl bg-[#226fee] overflow-hidden'>
            <img src={feed} alt="" className='absolute -right-5 h-[10em] opacity-45' />
          </div>
          {data.map((item, index) => (
            <div key={index} className='bg-white rounded-xl flex items-center md:gap-10 md:p-8 gap-2 p-1'>
              <img src={edit} alt="" className='w-10 rounded-full border-2 p-2' />
              <p className='flex md:text-xl text-[12px] flex-col items-center'>{item.title} <span className='text-2xl md:text-4xl font-semibold'>1476.00</span></p>
            </div>
         
          ))}
        </div>
        <Utility />
      </div>
      <div className=''>
        <div className='-z-10 '>
          <Calendars />
          {/* below is activity area */}
          <ActivitySave />
        </div>
      </div>

    </div>
    
  );
};

export default DHeader;
