import React from 'react'

const AddActivity = () => {
  return (
    <div className='md:p-5 p-2 w-full'>
      <h2 className='font-bold italic text-2xl'>Add Products</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div className='col-span-2'>
          <label htmlFor="title" className='font-bold italic'>Product Title</label>
          <input type="text" placeholder='Title name' className='w-full border-2 p-2 rounded-md' />
        </div>
        <div className='col-span-2'>
          <label htmlFor="title" className='font-bold italic'>Product Search</label>
          <input type="text" placeholder='Title name' className='w-full border-2 p-2 rounded-md' />
          {/* search product */}
          
        </div>
        <div className=''>
          <label htmlFor="title" className='font-bold italic'>Product Title</label>
          <input type="text" placeholder='Title name' className='w-full border-2 p-2 rounded-md' />
        </div>
        <div className=''>
          <label htmlFor="title" className='font-bold italic'>Product Title</label>
          <input type="text" placeholder='Title name' className='w-full border-2 p-2 rounded-md' />
        </div>
      </div>

    </div>
  )
}

export default AddActivity