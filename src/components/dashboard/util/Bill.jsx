import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaChevronLeft, FaPlusCircle } from 'react-icons/fa';
import { IoHelpCircle, IoSave } from 'react-icons/io5';
import AddProducts from '../../AddProducts';
import DialogueMaker from '../../../utils/DialogueMaker';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';


const Bill = () => {
  const [product, setProducts] = useState([]);
  const [InvSearch, setInvSearch] = useState('')
  const [todate, setTodate] = useState(""); // Initial date format should be 'yyyy-mm-dd'
  const [price, setPrice] = useState()
  const [qty, setQty] = useState(1);
  const [show, setShow] = useState(true)
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleDateChange = (event) => {
    setTodate(event.target.value);
  };
  const Inventory = ["10", "2", "6", "4", "8", "4", "2"] // this is we can fetch data from api and save here
  useEffect(() => {
    // Get today's date
    const today = new Date();

    // Format today's date as yyyy-mm-dd
    const formattedDate = today.toISOString().slice(0, 10);

    // Set the formatted date as the initial value for the input field
    setTodate(formattedDate);
  }, []);

  const findingInventory = Inventory.filter(word => word.includes(InvSearch))  // if se set offline search so that is good for all that's why save on net and then that is usable 
  // const findingInventory = Inventory.filter(item => console.log(item))

  const saveProduct = (item) => {
    if (qty && price) {
      setProducts([...product, { itemName: item, quantity: qty,price:price }]);
      setShow(true)
    }
    console.log(product)
  }
  const deleteProduct = (index) => {
    const updatedProducts = product.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    
    <div className='grid place-content-center'>
      <div className='p-5 cursor-pointer'>
        <h3 className='flex items-center text-2xl md:gap-10 gap-2 '><FaChevronLeft />  Create Invoice</h3>
        <div className='md:px-10 my-8 flex justify-between items-center gap-5'>
          <div className='flex items-center md:gap-5 gap-2'>
            <input type="radio" className='square-radio' />
            <p>Bill of Supply</p>
          </div>
          <div className='flex gap-5 text-white rounded-md'>{product.map((item, i) => <div key={i} className='bg-blue-700 w-16 p-1 cursor-pointer rounded-md flex justify-between '>
            <p>{item.itemName}</p>
            <p className='text-[12px]' onClick={() => deleteProduct(i)}><RiDeleteBin2Fill /></p>
          </div>)}
          </div>
        </div>
        <div className='bg-[#E6F2FF] md:p-3 p-2 grid grid-cols-2 gap-5 '>
          <div className='flex flex-col gap-2 col-span-2'>
            <label htmlFor="inputId" className='font-semibold flex gap-2 items-center'>Select Customer <span><IoHelpCircle className='opacity-60' /></span></label>
            <input type="text" id="inputId" className='rounded-md p-1' placeholder='Enter Customer, Company Name..' name="inputName" />
          </div>
          <div className='flex flex-col gap-2 relative '>
            <label htmlFor="inputDate" className='font-semibold flex gap-2 items-center'>Invoice Date</label>
            <input type="date" id="inputDate" value={todate} className='p-1 w-full' onChange={handleDateChange} />
          </div>
          <div className='flex flex-col gap-2 '>
            <label htmlFor="inputId" className='font-semibold flex gap-2 items-center'>Mo: Number <span><IoHelpCircle className='opacity-60' /></span></label>
            <input type="number" id="inputId" className='rounded-md p-1' placeholder='Enter Customer, Company Name..' name="inputName" />
          </div>
        </div>
        <div className='bg-[#E6F2FF] md:p-3 p-1 mt-5 rounded-md'>
          <div className='flex justify-between items-center'>
            <p className='flex items-center gap-2 md:text-md text-sm'>Search Products <IoHelpCircle className='opacity-60' /></p>
            <p className='md:inline-flex hidden gap-2 items-center'> <FaPlusCircle className='opacity-60' /> <span className='text-sm font-semibold opacity-50'>Add New Products</span></p>
            <p className='md:hidden inline-flex  gap-2 items-center'> <FaPlusCircle className='opacity-60' /> <span className='text-sm font-semibold opacity-50'>Add</span></p>

          </div>
          <div className='grid grid-cols-3 gap-5'>
            <input type="text" placeholder='search item.. ' className='md:w-full w-44 mt-2 rounded-md p-1' value={InvSearch} onChange={(e) => setInvSearch(e.target.value)} onInput={() => setShow(false)} />
          </div>
          <div className='flex flex-col gap-2 h-24 overflow-scroll mt-2'>
            {findingInventory.length < 1 ? (
              <div className='flex gap-5 bg-[#c4fcef] text-blue-800 cursor-pointer shadow-2xl font-semibold px-5 p-2 items-center' onClick={() => <DialogueMaker ComingSoon={AddProducts} />}>
                <FaPlusCircle /> Add New Product <FaArrowRight />
              </div>
            ) : (
              show ? (
                ""
              ) : findingInventory.map((item, i) => (
                <div key={i} className={`bg-[#c4fcef] text-blue-800 cursor-pointer shadow-2xl font-semibold px-5 p-2 flex justify-between items-center ${show ? "hidden" : ""}`} onClick={() => { handleItemClick(i); }}>
                  <p>{item}</p>
                  {selectedItemIndex === i && (
                    <div className='flex md:gap-5 gap-1 items-center justify-end'>
                      {/* qty */}
                      <p className='md:text-md text-sm'> Qty -<input type="number" className='rounded-md text-center md:w-10 w-8' maxLength={2} value={qty} onChange={(e) => setQty(e.target.value)} /></p>
                      {/* price */}
                      <p>Price - <input type="number" className='rounded-md text-center w-14' maxLength={4} value={price} onChange={(e) => setPrice(e.target.value)} /></p>
                      <motion.p onClick={() => saveProduct(item)} className='flex flex-col text-sm'><IoSave  /> <span className='text-[8px]'>save</span></motion.p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
  
        </div>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perspiciatis aliquam nam voluptate culpa tempore distinctio quos natus, quo neque tempora accusantium ducimus? Autem, tempora fuga minima hic nostrum adipisci quidem sequi quasi unde odio voluptates neque nam itaque reiciendis dignissimos sed amet saepe accusantium nemo, libero ea ipsam eos. Corrupti iure accusantium alias at cum incidunt error vel, illum perferendis repudiandae deleniti odio asperiores. Tempore, obcaecati. Qui laborum eligendi, repellendus fuga explicabo inventore quis ad laboriosam sapiente repellat, quidem unde quos, possimus hic veritatis numquam et autem aspernatur tempora ex a neque! Molestias suscipit modi sequi enim, magni impedit?
      </div>
      <button className=' bg-blue-700 p-2 text-white font-bold rounded-lg my-5 sticky bottom-5 italic'>Create</button>
    </div>
  );
};

export default Bill;
