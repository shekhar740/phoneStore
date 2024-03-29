import React, { useState } from 'react'
import { FaCalendarAlt, FaChevronDown, FaPlusCircle, FaSearch } from 'react-icons/fa';
// import main from '../../assets/activity/page.svg'
import main from '../assets/activity/page.svg'
import { motion } from 'framer-motion';
import found from '../assets/activity/nofound.json'
// import found from '../../assets/activity/nofound.json'
import Lottie from 'react-lottie';
import { defaultOptions } from '../utils/shareCode';
import AddActivity from './dialogs/AddActivity';


const ActivitySave = () => {
    const [activity, setActivity] = useState([])
    const [index, setIndex] = useState(0);
    const [title, setTitle] = useState("");
    const [items, setItems] = useState([]);
    const [price, setPrice] = useState(0);
    const [desc, setDescription] = useState("")
    const [qty, setQty] = useState(0);
    console.log(activity)

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
        if (index == 0) {
            // is just for example here you only just fetch from api not add i set for just practice
            const act = [
                { item: "Trievance Charger", stock: 8, Desc: 'Description add here' },
                { item: "Trievance Charger", stock: 8, Desc: 'Description add here' },
                { item: "Trievance Charger", stock: 8, Desc: 'Description add here' }
            ]
            setActivity(act)
        } else {
            setActivity([])
            const user = [
                { name: "shekhar", items: [{ title: "charger", price: 5, Qty: 8 }] }
            ]
            setActivity(user)
        }


    }

    const Save = () => {
        if (index === 0) {
            setActivity([...activity, { item: "Trievance Charger", stock: 8, Desc: 'Description add here' }])
        } else if (index === 1) {
            const user = { name: "shekhar", items: [{ title: "charger", price: 5, Qty: 8 }] };
            setActivity([...activity, user]);

        }
            // in the above code you can save on use api call to save daily activity here why use if condition because wer are storing direct specific activity
    }

   
    return (
        <>
            <div className='mt-5 md:mt-10 w-full'>
                <div className='flex justify-between'>
                    <h1 className='md:text-3xl text-xl italic font-semibold'>My Task</h1>
                    <button className="inline-flex md:hidden bg-blue-800 text-white md:px-3 p-1 rounded-md  items-center gap-2 font-semibold" onClick={() => document.getElementById('add-activity').showModal()}><FaPlusCircle />Add</button>
                    <button className="md:inline-flex hidden bg-blue-800 text-white md:px-3 p-1 rounded-md  items-center gap-2 font-semibold" onClick={() => document.getElementById('add-activity').showModal()}><FaPlusCircle /></button>
                    {/*  */}
                </div>
                <div className='md:mt-10 flex items-center justify-around border-b-2 py-3 my-2'>
                    <p className='cursor-pointer relative text-2xl task active-not' onClick={() => addActive(0)}>Activity</p>
                    <p className='text-2xl relative task cursor-pointer' onClick={() => addActive(1)}>Users</p>
                </div>
                {activity.length < 1 ? (
                    <div className='m-auto'>
                        <Lottie options={defaultOptions(found)} width={150} />
                        <motion.p whileTap={{ scale: 0.2 }} className='text-center cursor-pointer font-semibold underline'>Click To  add New</motion.p>
                    </div>
                ) :
                    <div className='flex flex-col gap-2'>
                        {activity.map((item, i) => (
                            <div key={i} onClick={() => setIndex(i)} className={`${index == i ? "bg-[#D5CABD] " : ""} task-bg cursor-pointer duration-700 ease-linear p-2 rounded-md flex justify-between items-center `}>
                                <div className='flex gap-5'>
                                    <img src={main} alt="" className='w-16 h-14 object-cover' />
                                    <div className='flex flex-col '>
                                        <h3 className='font-semibold text-md'>Trievance Chanrger</h3>
                                        <p className='text-[12px] opacity-60'>8 remainStock</p>
                                        <p className='text-[12px] opacity-60'>Description</p>
                                    </div>
                                </div>
                                <motion.button whileTap={{ scale: 0.2 }} className='bg-[#1e9e71]  h-8 px-6 pt-1 rounded-md text-md text-white flex' >&#8377; 450</motion.button>
                            </div>
                        ))}
                    </div>
                }
            </div>
            <dialog id="add-activity" className="modal rounded-md">
                <div className="modal-box ">
                    <form method="dialog" className=''>
                        {/* if there is a button in form, it will close the modal */}
                        <button className=" btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='md:p-5 p-2 w-full'>
                        <h2 className='font-bold italic text-2xl'>Add Products</h2>
                        <div className='grid grid-cols-2 gap-5 mt-5'>
                            <div className='col-span-2'>
                                <label htmlFor="title" className='font-bold italic'>Product Title</label>
                                <input type="text" placeholder='Title name' className='w-full border-2 p-2 rounded-md' value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="title" className='font-bold italic'>Product Search</label>
                                <input type="text" placeholder='Title name' className='w-full border-2 p-2 rounded-md' />
                                {/* search product */}
                            </div>
                            <div className=''>
                                <label htmlFor="title" className='font-bold italic'>Price</label>
                                <input type="text" placeholder='Title name' className='w-full border-2 p-2 rounded-md' value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div className=''>
                                <label htmlFor="title" className='font-bold italic'>Qty</label>
                                <input type="text" placeholder='Title name' className='w-full border-2 p-2 rounded-md' value={qty} onChange={(e) => setQty(e.target.value)} />
                            </div>
                            <div className='col-span-2 '>
                                <label htmlFor="title" className='font-bold italic'>Description</label>
                                <textarea name="" id="" cols="5" rows="4" value={desc} className='w-full border-2 p-2 h-44 rounded-md' placeholder='Title name' onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                    <p className='bg-blue-800 text-white font-semibold text-2xl mx-5 text-center rounded-md p-1 my-5 cursor-pointer' onClick={Save}>save Activity</p>
                </div>
            </dialog>

        </>

    )
}

export default ActivitySave