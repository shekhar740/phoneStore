import React from 'react'
import { info } from '../../utils/Features'

const Report = () => {

  return (
    <div className='bg-[#4b4453] mt-10 md:p-5 px-2 py-10 flex justify-between md:justify-around w-full text-white'>
        {info.map((item,index)=>(
            <div key={index} className='flex flex-col  items-center md:gap-2'>
                <h2 className='md:text-4xl  text-2xl font-semibold'>{item.num}</h2>
                <p className='md:text-xl text-[10px] font-sans opacity-70 font-semibold'>{item.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Report