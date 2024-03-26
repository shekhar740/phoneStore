import React, { useEffect, useState } from 'react';
import tempImage from '../../assets/home/about.png';
import { FaCalendarAlt, FaChevronDown, FaPlusCircle, FaSearch } from 'react-icons/fa';
import main from '../../assets/activity/page.svg'
import Calendars from './Calendar';
import feed from '../../assets/activity/feed.svg';
import edit from '../../assets/activity/edit.svg'
import Utility from './Utility';
import { motion } from 'framer-motion';


const DHeader = () => {
  const [index, setIndex] = useState(0);

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

    <div className="md:ml-32 relative grid grid-cols-1 md:grid-cols-3 items-start md:gap-10">
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
            <div className='bg-white rounded-xl flex items-center md:gap-10 md:p-8 gap-2 p-1'>
              <img src={edit} alt="" className='w-10 rounded-full border-2 p-2' />
              <p className='flex md:text-xl text-[12px] flex-col items-center'>{item.title} <span className='text-2xl md:text-4xl font-semibold'>1476.00</span></p>
            </div>
            // <div key={index} className='cursor-pointer hover:scale-110 duration-1000 shadow-md rounded-2xl flex items-center justify-between relative bg-white' >
            //   <div className='rounded-full border md:p-5 absolute md:w-[3.5em] md:left-5' >
            //     <img src={edit} alt="" className='' />
            //   </div>
            //   <div className='p-5 absolute  md:left-[6em]' >
            //     <h3 className='md:text-[1.2em] sm:text-5 opacity-60'>{item.title}</h3>
            //     <p className='md:text-[2em]  font-semibold '>1456.00</p>
            //   </div>
            // </div>
          ))}
        </div>
        <Utility />
      </div>
      <div className=''>
        <div className='-z-10 '>
          <Calendars />
          <div className='mt-5 md:mt-10 w-full'>
            <div className='flex justify-between'>
              <h1 className='md:text-3xl text-xl italic font-semibold'>My Task</h1>
              <button className=" bg-blue-800 text-white md:px-3 p-1 rounded-md flex items-center gap-2 font-semibold" onClick={() => document.getElementById('my_modal_2').showModal()}><FaPlusCircle />Add</button>
             
              {/*  */}
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box py-8 w-[400px]" >
                  <div className='flex flex-col gap-5'>npmm
                    <div className='flex items-center justify-between p-5'>
                      <h4 className='text-2xl font-semibold'>Product Details</h4>
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      </form>
                    </div>
                    <div className='px-5 '>
                      <p className='font-semibold text-md'>Product Title</p>
                      <input type="text" className='w-full border-2 p-2 rounded-md border-blue-600' placeholder='Product Name..' />
                    </div>
                    <div className='px-5'>
                      <p className='font-semibold text-md'>Search Products</p>
                      <input type="text" className='w-full border-2 p-2 rounded-md border-blue-600' placeholder='search...' />
                    </div>
                    <div className=' h-36 px-5  grid gap-2 overflow-scroll shadow-2xl backdrop-blur-3xl'>
                      {data2.map((item, i) => (
                        <div className='bg-slate-300 p-2 rounded-md flex'>
                          <img src={main} alt="" className='w-10 h-10' />
                          <div className='flex flex-col gap-2'>
                            Trievance Chanrger
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-5'>
                        <p className='font-semibold text-md'>Price</p>
                        <input type="text" className='w-full border-2 p-2 rounded-md border-blue-600' placeholder='search...' />
                      </div>
                      <div className='px-5'>
                        <p className='font-semibold text-md'>Description</p>
                        <input type="text" className='w-full border-2 p-2 rounded-md border-blue-600' placeholder='search...' />
                      </div>
                    </div>

                  </div>

                </div>
              </dialog>
            </div>
            <div className='md:mt-10 flex items-center justify-around border-b-2 py-3 my-2'>
              <p className='cursor-pointer relative text-2xl task active-not' onClick={() => addActive(0)}>Active</p>
              <p className='text-2xl relative task cursor-pointer' onClick={() => addActive(1)}>Users</p>
            </div>
            {
              data2.map((item, i) => (
                <div onClick={() => setIndex(i)} className={`${index == i ? "bg-[#D5CABD] " : ""}  cursor-pointer duration-700 ease-linear p-2 rounded-md md:mt-3 flex justify-between items-center `}>
                  <div className='flex gap-5'>
                    <img src={main} alt="" className='w-16 h-14 object-cover' />
                    <div className='flex flex-col '>
                      <h3 className='font-semibold text-md'>Trievance Chanrger</h3>
                      <p className='text-[12px] opacity-60'>8 remainStock</p>
                      <p className='text-[12px] opacity-60'>Description</p>
                    </div>
                  </div>
                  <button className='bg-[#1e9e71]  h-8 px-6 pt-1 rounded-md text-md text-white flex'>&#8377; 450</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DHeader;
