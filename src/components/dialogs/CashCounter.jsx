import React, { useState } from 'react';
import { MdContacts, MdSettings } from "react-icons/md";
import { FaCalendarAlt, FaPlus, FaSpeakerDeck } from 'react-icons/fa';
import twoThousand from '../../assets/notes/twothousand.png';
import fiveHundred from '../../assets/notes/fiveHundred.png';
import twoHundred from '../../assets/notes/twoHundred.png';
import hundred from '../../assets/notes/hundred.png';
import fif from '../../assets/notes/fif.jpg';
import twenty from '../../assets/notes/twenty.png';
import ten from '../../assets/notes/ten.png';
import { ToWords } from 'to-words'
import { HiSpeakerWave } from "react-icons/hi2";
import { motion } from 'framer-motion';

const CashCounter = () => {
  const wordsAmt = new ToWords();
  const [AmtMinus, setAmtMinus] = useState(0);
  const [AmtPlus, setAmtPlus] = useState(0);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;

  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [cre, setCre] = useState(0);

  // Array of notes denominations with their respective images and values
  const notes = [
    { img: twoThousand, title: 2000, quantity: useState(0) },
    { img: fiveHundred, title: 500, quantity: useState(0) },
    { img: hundred, title: 100, quantity: useState(0) },
    { img: fif, title: 50, quantity: useState(0) },
    { img: ten, title: 10, quantity: useState(0) },
  ];
  const cash = notes.reduce((acc, item) => acc + item.quantity[0], 0);
  const total = notes.reduce((acc, item) => acc + item.quantity[0] * item.title, 0) + Number(AmtPlus) - Number(AmtMinus);

  // Function to calculate the total amount for each denomination
  const calculateTotal = (note) => {
    return note.title * note.quantity[0];
  };

  // Function to handle input change and update the quantity
  const handleInputChange = (index, value) => {
    const [, setQuantity] = notes[index].quantity; // Destructuring to get the setter function
    setQuantity(Number(value)); // Convert value to number and set the quantity
  };

  const Clear = () => {
    notes.forEach((note) => {
      const [, setQuantity] = note.quantity;
      setQuantity(0)
    })
  }

  return (
    <div className='mt-6 p-2 pt-5 md:w-[500px]  w-full  bg-slate-100 rounded-t-md text-black'>
     <div className=' flex justify-between items-center shadow-sm md:text-xl text-sm font-semibold  p-5 bg-blue-950 text-white rounded-t-2xl'>
      <p>History</p>
      <p className='relative before:contents before:absolute before:w-full before:h-5 before:top-0 before:bg-white'>Cash Counter</p>
      <p>BackTracking</p>
      </div>
      <div className='mt- bg-white grid grid-cols-2 md:grid-cols-3 justify-between gap-2 text-black p-2'>
        <p className='md:col-span-2 bg-white flex justify-between items-center font-semibold p-2 shadow-md text-xl rounded-2xl shadow-blue-300'>Deep Patel <span><MdContacts color='black' /></span></p>
        <div className='bg-white flex justify-between items-center font-semibold p-2 shadow-md text-xl rounded-2xl gap-2 shadow-blue-300'>
          <input
            type='date'
            value={selectedDate.toISOString().split('T')[0]}
            onChange={e => {
              const selectedDate = new Date(e.target.value);
              setSelectedDate(selectedDate);
            }}
            className='font-semibold py-1 cursor-pointer'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 md:gap-2 gap-1'>
      <p className='bg-[#FFDEAD] flex flex-col items-center md:h-full py-3 rounded-md md:text-md text-sm font-semibold cursor-pointer'>Notes <span className='md:text-2xl text-xl md:font-bold font-semibold'>{cash}</span></p>
        <p className='bg-[#C5F2CD] flex flex-col items-center md:h-full py-3 rounded-md md:text-md text-sm font-semibold cursor-pointer'>Cash Total <span className='md:text-2xl text-xl md:font-bold font-semibold'>&#8377; {total}</span></p>
        <p className='bg-[#ACD5FE] flex flex-col items-center md:h-full py-3 rounded-md md:text-md text-sm font-semibold cursor-pointer'>Total Amount<span className='md:text-2xl text-xl md:font-bold font-semibold'>&#8377; {total}</span></p>
        {/*  */}
       
      </div>
      <div className='py-3 flex px-2 md:px-2 shadow-md shadow-blue-400 rounded-md items-center md:gap-5 gap-2'>
        <div className='flex rounded-md'>
          {['Credit', 'Debit'].map((item, i) => (
            <p key={i} onClick={() => setCre(i)} className={`rounded-md font-semibold  duration-500 ease-in p-2 w-1/2 px-3 cursor-pointer text-center ${i === cre ? 'bg-green-600' : 'bg-white'}`}>
              {item}
            </p>
          ))}
        </div>
        <p className='leading-4 font-semibold '>Online Payment</p>
        <input type="text" value={1000} className=' font-semibold w-full p-2 rounded-md text-start md:px-2' />
      </div>
      {/* cash notes */}
      <div className='flex flex-col mt-3'>
        {notes.map((item, index) => (
          <div key={index} className={`grid ${index === 3 || index === 4 ? "mt-4" : ""} items-center  grid-cols-5`}>
            <img src={item.img} alt="" className='rounded-md' />
            <p className='flex md:gap-2 gap-1 ml-2 items-center font-semibold md:text-2xl text-xl'>{item.title} <span className='md:text-xl text-sm '>X</span></p>
            <input type="text" className='border-2 p-2 md:ml-0 ml-2 rounded-md max-h-8 max-w-14 text-center' value={item.quantity[0]} onChange={(e) => handleInputChange(index, e.target.value)} />
            <p className='text-2xl md:ml-0 ml-2 font-semibold'>=</p>
            <p className='text-2xl font-semibold'>{calculateTotal(item)}</p>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-3 gap-2 mt-5 items-center bg-white shadow-md shadow-blue-500 p-1 rounded-md'>
          <p className='flex items-center gap-2 p-2 bg-green-600 font-semibold px-4 rounded-md'>&#8377;<input  onChange={(e) => setAmtPlus(e.target.value)} value={AmtPlus} className='bg-transparent rounded-md font-semibold' type="text" placeholder='amount to add' /></p>
          <p className='md:text-md font-semibold text-center'>Add Manual Amt</p>
          <p className='flex items-center gap-2 p-2 bg-red-500 font-semibold px-4 rounded-md'> &#8377;<input  onChange={(e) => setAmtMinus(e.target.value)} value={AmtMinus} className='bg-transparent rounded-md font-semibold' type="text" placeholder='amount to add' /></p>
      </div>
    
      <div className='mt-5 flex items-center text-5xl md:gap-14 gap-2 md:px-8 px-4'>
        <motion.button whileTap={{ scale: 0.1 }}><HiSpeakerWave /></motion.button>
        <p className='shadow-md w-full px-5 p-2 shadow-blue-500 md:text-xl text-sm rounded-md'>{wordsAmt.convert(total)}</p>
      </div>
      <div className='flex gap-2 justify-between mt-2 px-2'>
        <MdSettings className='text-5xl' />
        <motion.button whileTap={{ scale: 0.1 }} className='bg-neutral-500 px-3 p-1 rounded-md text-white text-xl'>Share</motion.button>
        <motion.button whileTap={{ scale: 0.1 }} className='bg-green-500 px-3 p-1 rounded-md text-white text-xl w-full'>Save In</motion.button>
        <motion.button className='bg-blue-950 px-3 p-1 rounded-md text-white text-xl' onClick={Clear}>Clear</motion.button>

      </div>
    </div>
  );
}

export default CashCounter;
