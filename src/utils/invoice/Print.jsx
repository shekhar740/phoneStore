import React, { useEffect } from 'react'
import './style.css'
import logo from '../../assets/utility/logo.jpg'
import { log } from 'mathjs'

const Invoice = ({shopName,shopAdd,shopNumber,CusomerName,CustomAdd,CustNum,items,Note}) => {
  const data= [{
    title: "Items Name",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sunt voluptate voluptatem omnis maxime!",
    price: 20,
    qty: 1,
    total: 50
  }, {
    title: "Items Name",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sunt voluptate voluptatem omnis maxime!",
    price: 20,
    qty: 1,
    total: 50
  },
  {
    title: "Items Name",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sunt voluptate voluptatem omnis maxime!",
    price: 20,
    qty: 1,
    total: 50
  },
  {
    title: "Items Name",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sunt voluptate voluptatem omnis maxime!",
    price: 20,
    qty: 1,
    total: 50
  },]
  const totals = data.reduce((acc, item) => {
    const price = parseFloat(item.price);
    const qty = parseFloat(item.qty);
    if (!isNaN(price) && !isNaN(qty)) {
      return acc + price * qty;
    } else {
      return acc;
    }
  }, 0);
  useEffect(() => {
    const header = document.getElementsByClassName('header-comp')
    header[0]?.classList.add('hidden')
  }, [])
  const today = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = today?.toLocaleDateString('en-US', options);



  return (

    <div className='invoice-container' style={{ width: '210mm', height: '297mm' }}>
      <div className='grid place-content-end items-center'>
        <p className='text-5xl text-blue-700 font-semibold'>Invoice</p>
        <p className='text-xl font-semibold'>{formattedDate}</p>
      </div>
      <div className='flex flex-col'>
        <img src={logo} alt="" width={150} />
        <h1 className='w-56 italic  text-2xl font-semibold'>Bhagywanti Mobile Shop</h1>
      </div>
      <div className='flex justify-between'>
        <div className='text-md'>
          <h4 className='mt-2 font-bold text-md'>Shop Address</h4>
          <p className='w-60'>#56, chidri road hanuman nagar oppo Jabber Petrol pump Bidar karantaka 585403.</p>
          <p className='mt-10 font-semibold'>(+91) 740 693 5847</p>
        </div>
        <div>
          <p>To:</p>
          <p className='font-semibold text-md'>Shivkant Babbure</p>
          <p className='w-60'>#56, chidri road hanuman nagar oppo Jabber Petrol pump Bidar karantaka 585403.</p>
          <p className='mt-2 font-medium'>(+91) 9036092942</p>
        </div>
      </div>

      <div className='grid grid-cols-5 border-2  bg-blue-800 p-2 text-black text-center font-semibolds mt-5 font-medium'>
        <p className='head col-span-2'>Item Desciption</p>
        <p className='head'> Unit Price</p>
        <p className='head'>Qty</p>
        <p className='head'>Total</p>
      </div>
      <div className='mt-1'>
        {!items && data.map((item, i) => (<div className='border-b-2 pb-2 grid grid-cols-5 items-center  font-semibold text-center '>
          <div className=' text-start p-1 col-span-2'>
            <p className='text-md'>{item.title}</p>
            <p className='font-normal text-sm' >{item.des.slice(0,80)}</p>
          </div>
          <p>&#8377;{item.price}</p>
          <p >{item.qty}</p>
          <p>&#8377;  {item.price * item.qty}</p>
        </div>))}
      </div>
      <div className='grid place-content-end items-center mt-4'>
        <div className='flex gap-5 font-semibold'>
          <div className='flex flex-col gap-2'>
            <p>Sub Total :</p>
            <p>Tax 15% :</p>
            <p>Discount 5% :</p>
          </div>
          <div className='text-md items-center flex flex-col gap-2 font-semibold text-center'>
            <p>&#8377; {totals} </p>
            <p > -- </p>
            <p > -- </p>
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-3'>
        <div className='pr-32'>
          <h2 className='font-semibold  items-centertext-xl'>Note :</h2>
          <p className='text-sm w-full '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam cul Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugiat! </p>
        </div>
        <p className='bg-blue-600 w-1/2 h-fit text-center py-4 rounded-md text-white font-medium text-md'>TOTAL PAYEMENT : <span>&#8377; {totals}</span></p>
      </div>
      <p className='mt-10 text-2xl text-blue-700 font-semibold italic'>Thank You for Your Business</p>
      <button onClick={() => window.print()}>print</button>
    </div>
  )
}

export default Invoice