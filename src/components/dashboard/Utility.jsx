import React from 'react'
import calc from '../../assets/utility/Calculator.png'
import Inv from '../../assets/utility/Invoice.png'
import khata from '../../assets/utility/khata.png'
import sell from '../../assets/utility/Sell.png'
import Calculator from './util/Calculator'
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom'
import notes from '../../assets/activity/notes.svg'
import cashCounter from '../../assets/activity/cashcounter.svg'
import Notes from '../dialogs/Notes'
import CashCounter from '../dialogs/CashCounter'




const Utility = () => {
  const location = useNavigate();
  // #ffaec1
  const data = [
    {
      image: calc,
      title: "Calculator"
    },
    {
      image: Inv,
      title: "Invoice"
    },
    {
      image: khata,
      title: "KhataBook",
    },
    {
      image: sell,
      title: "Sales"
    },
    {
      image: sell,
      title: "Sales"
    },
    {
      image: khata,
      title: "KhataBook",
    },
    {
      image: notes,
      title: "Notes"
    },
    {
      image: cashCounter,
      title: "Cash Counter"
    },
  ]
  return (
    <>
      <div className='utility-bg mt-5 rounded-2xl p-5'>
        <h2 className='text-white text-3xl py-5 font-extrabold'>Utility</h2>
        <div className='grid grid-cols-4 md:gap-20 gap-10 items-center md:px-20'>
          {data.map((item, i) => (
            <div className="cursor-pointer" key={i} onClick={() => {
              const claci = document.getElementById('calculator')
              const notes = document.getElementById('notes-app')
              const cashCounter = document.getElementById('cash-counter')
              switch (item.title) {
                case "Calculator":
                  return claci.showModal();
                  break;
                case "Invoice":
                  return location('/invoice/retailer');
                  break;
                case "Notes":
                  return notes.showModal();
                  break;
                case "Cash Counter":
                  return cashCounter.showModal();
                default:
                  break;
              }
            }}>
              <img src={item.image} alt="" className='object-cover md:w-16  hover:scale-125 duration-1000 w-10 ease-in' />
              <p className='md:text-start text-[8px] md:text-xl font-semibold md:mt-5 text-center mt-2' >  {item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" >open modal</button> */}
      <>
        <dialog id="calculator" className="modal">
          <div className="modal-box ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="text-2xl hover:scale-150 duration-700 md:hover:text-white absolute right-2  top-2 outline-none">X</button>
            </form>
            <Calculator />
          </div>
        </dialog>
        <dialog id="notes-app" className="modal">
          <div className="modal-box ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="text-2xl hover:scale-150 duration-700 md:hover:text-white absolute right-2  top-2 outline-none z-50">X</button>
            </form>
            <Notes />
          </div>
        </dialog>
        <dialog id="cash-counter" className="modal">
          <div className="modal-box bg-transparent">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="text-2xl hover:scale-150 duration-700 md:hover:text-white absolute right-2  top-2 outline-none z-50">X</button>
            </form>
            <CashCounter />
          </div>
        </dialog>
      </>
    </>
  )
}

export default Utility