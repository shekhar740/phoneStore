import React from 'react'
import calc from '../../assets/utility/Calculator.png'
import Inv from '../../assets/utility/Invoice.png'
import khata from '../../assets/utility/khata.png'
import sell from '../../assets/utility/Sell.png'
import Calculator from './util/Calculator'
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom'




const Utility = () => {
  const location = useNavigate();
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
      image: Inv,
      title: "Invoice"
    },
    {
      image: calc,
      title: "Calculator"
    },
  ]
  return (
    <>
      <div className='utility-bg mt-5 rounded-2xl p-5'>
        <h2 className='text-white text-3xl py-5 font-extrabold'>Utility</h2>
        <div className='grid grid-cols-4 md:gap-20 gap-10 items-center md:px-20'>
          {data.map((item, i) => (
            <div className="cursor-pointer" key={i} onClick={() => {
              const claci = document.getElementById('my_modal_3')
              switch (item.title) {
                case "Calculator":
                  return claci.showModal();
                  break;
                case "Invoice":
                 return  location('/invoice/retailer');
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
      <Draggable>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="text-2xl hover:scale-150 duration-700 md:hover:text-white absolute right-2  top-2 outline-none">X</button>
            </form>
            <Calculator />
          </div>
        </dialog>
      </Draggable>
    </>
  )
}

export default Utility