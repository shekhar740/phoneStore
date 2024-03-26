import React from 'react'

const Prize = () => {
    return (
        <div className='md:px-44 px-12 bg-[#F4F7FA] pt-20'>
            <div className='m-auto md:w-1/2 px-2'>
                <h2 className='md:text-5xl text-2xl text-center font-bold leading-tight'>We Offer great Affordable Priemium Prizes</h2>
            </div>
            <p className='md:w-2/3 text-center m-auto opacity-70 md:text-xl text-sm mt-2'>Elevate your experience with our premium offerings, carefully curated to deliver luxury at a fraction of the cost. Experience top-tier quality without compromising on your budge</p>
            <div className='md:grid-cols-3 grid grid-cols-1 gap-8 ' >
                <div className='shadow-2xl hover:scale-105 duration-1000 cursor-pointer ease-in-out bg-white  md:p-10 py-4 mt-14 text-center rounded-2xl'>
                    <h1 className='md:text-2xl  text-md font-medium'>Starter</h1>
                    <p className='md:text-4xl text-2xl font-bold mt-10'>&#8377; 0 /Month</p>
                    <p className='md:text-xl text-sm opacity-70'>No credit card required</p>
                    <button className='bg-[#ff6f91] md:w-full px-4 py-4 mt-8 text-white font-semibold md:text-3xl text-xl md:rounded-3xl  rounded-md'>Try for free</button>
                    <p className='md:text-2xl text-xl font-medium mt-5 opacity-30'>with no Analytics</p>
                    <p className='md:text-2xl text-xl font-medium md:mt-5 mt-2 opacity-30'>Unlimited Daily Activity</p>
                    <p className='md:text-2xl font-medium md:mt-5  mt-2 opacity-30'>Exclusive Support</p>
                    <p className='mt-10 text-2xl font-semibold'>1-Month free trial</p>
                </div>
                <div className='shadow-2xl hover:scale-105 duration-1000 cursor-pointer ease-in-out bg-white  md:p-10 py-4 mt-14 text-center rounded-2xl'>
                    <h1 className='md:text-2xl  text-md font-medium'>Starter</h1>
                    <p className='md:text-4xl text-2xl font-bold mt-10'>&#8377; 650 /Month</p>
                    <p className='md:text-xl text-sm opacity-70'>No credit card required</p>
                    <button className='bg-[#2c73d2] md:w-full px-4 py-4 mt-8 text-white font-semibold md:text-3xl text-xl md:rounded-3xl  rounded-md'>Try for free</button>
                    <p className='md:text-2xl text-xl font-medium mt-5 opacity-30'>with no Analytics</p>
                    <p className='md:text-2xl text-xl font-medium md:mt-5 mt-2 opacity-30'>Unlimited Daily Activity</p>
                    <p className='md:text-2xl font-medium md:mt-5  mt-2 opacity-30'>Exclusive Support</p>
                    <p className='mt-10 text-2xl font-semibold'>1-Month free trial</p>
                </div>
                {/* bg-[#2c73d2],bg-[#845ec2] */}
                <div className='shadow-2xl hover:scale-105 duration-1000 cursor-pointer ease-in-out bg-white  md:p-10 py-4 mt-14 text-center rounded-2xl'>
                    <h1 className='md:text-2xl  text-md font-medium'>Starter</h1>
                    <p className='md:text-4xl text-2xl font-bold mt-10'>&#8377; 55540 /Month</p>
                    <p className='md:text-xl text-sm opacity-70'>No credit card required</p>
                    <button className='bg-[#845ec2] md:w-full px-4 py-4 mt-8 text-white font-semibold md:text-3xl text-xl md:rounded-3xl  rounded-md'>Try for free</button>
                    <p className='md:text-2xl text-xl font-medium mt-5 opacity-30'>with no Analytics</p>
                    <p className='md:text-2xl text-xl font-medium md:mt-5 mt-2 opacity-30'>Unlimited Daily Activity</p>
                    <p className='md:text-2xl font-medium md:mt-5  mt-2 opacity-30'>Exclusive Support</p>
                    <p className='mt-10 text-2xl font-semibold'>1-Month free trial</p>
                </div>
            </div>

        </div>
    )
}

export default Prize