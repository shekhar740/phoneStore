import React, { useEffect, useRef, useState } from 'react';
import './profile.css';
import { FaChevronLeft, FaUser, FaBell, FaChevronRight, FaPlusCircle } from 'react-icons/fa';
import profile from '../../assets/retailers.png';
import { FaBookmark, FaLock, FaStar, FaAngleDoubleLeft } from "react-icons/fa";
import Management from './Management';
import { number } from 'mathjs';
import AddEmployee from './AddEmployee';
import Api from '../../utils/Api';
import { useSelector } from 'react-redux';

const Profile = () => {
    const notesRef = useRef(null);
    const notelist = useRef(null);
    const [EditUsers, setEditUsers] = useState([])
    const [rightSide, setrightSide] = useState()
    const [childData, setChildData] = useState('');
    const user = useSelector(state => state.user)


    const showNow = (input) => {
        notesRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const returnShow = (i) => {
        notelist.current.scrollIntoView({ behavior: "smooth" });
    }

    const sideBar = () => {
        return
    }
    const getAllUser = async () => {
        try {
            if (user) {
                const response = await Api.get(`/api/get/${user}`);
                setEditUsers(response?.data)
            } else {
                console.log("user not found")
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllUser();
    }, [])
    const handleDataFromChild = (data) => {
        // Do something with the data received from the child
        setEditUsers([...EditUsers, data]);
    };

    const RemoveEditUsers = async (UserEmail) => {
        try {
            // Send request to delete the user from the backend
            const response = await Api.delete(`api/delete/${user}/${UserEmail}`);
            console.log(response)
            if (response?.status === 200) {
                // Remove the user from the EditUsers state
                const updatedEditUsers = EditUsers.filter(item => item.email !== UserEmail);
                setEditUsers(updatedEditUsers);
            } else {
                console.log("id not found");
            }
        } catch (error) {
            console.log(error);
            // Handle any errors that occur during the deletion process
        }
    };
    


    console.log(EditUsers)

    return (
        <div className="wrapper md:max-w-[400px] rounded-md max-w-[320px] overflow-x-auto">
            <div className="flex" ref={notelist}>
                <div className={`md:min-w-[400px] min-w-[320px] rounded-md h-[80vh] overflow-y-auto`}>
                    {/* Left side content */}
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <span className='bg-white p-2 rounded-xl hover:opacity-50 cursor-pointer'> <FaChevronLeft /></span>
                            <h1 className='text-xl text-white font-semibold italic'>Profile</h1>
                            <span></span>
                        </div>
                        <img src={profile} alt="" className='rounded-full w-24 h-24 object-cover m-auto mt-6' />
                        <h1 className='text-center mt-6 text-white text-2xl font-semibold italic'>Shekhar Vijay Metre</h1>
                        <p className='text-center text-white text-md font-medium'>Retail ShopKeeper</p>
                    </div>
                    <div className='grid grid-cols-3 px-8 my-10'>
                        <p className='flex flex-col items-center font-bold gap-2 text-2xl'> 0 <span className='font-medium text-sm'>Users</span></p>
                        <p className='flex flex-col items-center font-bold gap-2 text-2xl'> 3 <span className='font-medium text-sm'>Customers</span></p>
                        <p className='flex flex-col items-center font-bold gap-2 text-2xl'> 89 <span className='font-medium text-sm'>T.Activity</span></p>
                    </div>
                    <div className="collapse cursor-pointer">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl items-center font-medium flex justify-between">
                            <p className='flex gap-3 items-center'><FaUser color='#da8e74' /> Profile</p>
                            <FaChevronRight />
                        </div>
                        <div className="collapse-content flex flex-col gap-5">
                            {EditUsers.map((item, i) => (
                                <div key={i} className='flex flex-col gap-5 border-t-2 py-5'>
                                    <div>
                                        <h4 className='opacity-50'>Agent</h4>
                                        <h4 className='font-semibold text-xl'>{item.fullName || item?.user_name}</h4>
                                    </div>
                                    <small></small>
                                    <p>Mobile Number: {item.mobileNumber || item?.user_number}</p>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='underline underline-offset-2' onClick={() => { showNow(); setrightSide({ manage: { name: item.name, number: item.number } }) }}>Manage</h1>
                                        <p className='text-red-800 font-semibold' onClick={() => RemoveEditUsers(item?.email)}>Remove</p>
                                    </div>
                                </div>
                            ))}

                            {/* adding user */}
                            <div className='bg-white p-3 items-center rounded-md flex gap-5'>
                                <FaPlusCircle />
                                <p className='opacity-70 font-bold' onClick={() => { showNow(); setrightSide({ addUser: {} }) }}>ADD USER</p>
                            </div>
                        </div>
                    </div>
                    <div className="collapse cursor-pointer">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl items-center font-medium flex justify-between">
                            <p className='flex gap-3 items-center'><FaBell color='#da8e74' /> Notification</p>
                            <FaChevronRight />
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse cursor-pointer">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl items-center font-medium flex justify-between">
                            <p className='flex gap-3 items-center'><FaLock color='#da8e74' /> Security</p>
                            <FaChevronRight />
                        </div>
                        <div className="collapse-content">
                            <p>Coming Soon</p>
                        </div>
                    </div>
                    {/* End of left side content */}
                </div>
                <div ref={notesRef} className={`min-w-[400px] rounded-md h-[80vh] overflow-y-scroll relative`}>
                    <p className="flex gap-2 items-center text-xl font-medium closeIt absolute left-0 top-1 m-2">
                        <FaAngleDoubleLeft className="text-2xl font-normal cursor-pointer" onClick={returnShow} />
                        <span>Back</span>
                    </p>
                    {console.log(rightSide)}
                    <div className='mt-10 '>
                        {rightSide && rightSide.manage && <Management name={rightSide.manage.name} number={rightSide.manage.number} />}
                        {rightSide && rightSide.addUser && <AddEmployee sendDataToParent={handleDataFromChild} />}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
