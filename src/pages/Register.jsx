import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import Api from '../utils/Api';
import retailers from '../assets/retailers.png';
import wholeslaer from '../assets/wholesaler.png';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux'
import { Message } from '../utils/store/slice/addMessage';
import { addUser } from '../utils/store/slice/LoggedUser';



const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const Registration = () => {
    const [click, setClick] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        shopName: '',
        mobile: '',
        address: '',
        photo: '',
    });
    const navigation = useNavigate();
    const dispatch = useDispatch()

    const roled = () => {
        const roles = document.getElementsByName('role');
        for (var role of roles) {
            if (role.checked) {
                const selectedValue = role.value;
                return selectedValue;
            }
        }
    };

    const SigninWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
            const { displayName, email, phoneNumber, photoURL } = result.user;
        } catch (error) {
            console.log(error);
        }
    };

    const HandlSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, mobile, shopName, address, photo, role } = formData;
        if (!name || !email || !mobile || !shopName || !password || !address) {
            console.error('Please fill in all required fields');
            dispatch(Message('Please fill in all required fields'))
        } else {
            try {
                const response = await Api.post('/api/user', {
                    name,
                    email,
                    password,
                    mobile,
                    role: click == 0 ? "retailer" : "wholesaler",
                    shopName,
                    address,
                    photo: photo,

                });
                console.log(response)
                if (response.status === 200) {
                    navigation(`/dashboard/${click == 0 ? "retailer" : "wholesaler"}`);
                    dispatch(addUser(email))
                    // dispatch(Message("user created successfully"))
                    console.log('user created successfully');
                } else if (response.status === 204) {
                    navigation('/login');
                    dispatch(Message("user already exists"))
                    console.log('user already exists');
                }
            } catch (error) {
                console.log("something wrong", error)
            }

        }
    };

    const handleClick = (data) => {
        setClick(data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div className='container bg-transparent'>
            <div className='row'>
                <div className='col-sm-12 col-md-auto mx-auto'>
                    <h2 className='text-center text-[#42B8ED] text-2xl italic font-semibold'>Choose Account Type</h2>
                    <div className='px-5 mt-10'>
                        <div className={`grid grid-cols-2 gap-5 cursor-pointer`}>
                            <div
                                onClick={() => handleClick(0)}
                                className={`${click == 0 ? 'shadow-md' : ''} flex relative flex-col p-2 rounded-md gap-3 border-2 items-center font-medium`}
                            >
                                <img src={retailers} alt='' className='w-fullh-full' />
                                <p>Retailer</p>
                                <AiFillCheckCircle color='#42B8ED' className={`${click == 0 ? 'absolute' : 'hidden'}  -bottom-2 -right-3`} fontSize={40} />
                            </div>
                            <div
                                onClick={() => handleClick(1)}
                                className={`${click == 1 ? 'shadow-md' : ''} flex relative flex-col p-2 rounded-md gap-3 border-2 items-center font-medium`}
                            >
                                <img src={wholeslaer} alt='' className='w-fullh-full' />
                                <p>Wholesaler</p>
                                <AiFillCheckCircle color='#42B8ED' className={`${click == 1 ? 'absolute' : 'hidden'}  -bottom-2 -right-3`} fontSize={40} />
                            </div>
                        </div>
                    </div>
                    <h2 className='mt-14 text-center opacity-60 text-md'>Hello Shop Keeper</h2>
                    <p className='text-center opacity-60 text-md'>Please fill out the form below to get started</p>
                    <div className='grid grid-cols-2 gap-6 mt-10 max-w-md'>
                        <div className='inputBox col-span-2'>
                            <input
                                type='text'
                                required={true}
                                placeholder='enter user name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <span>Name</span>
                        </div>
                        <div className='inputBox'>
                            <input
                                type='email'
                                required={true}
                                placeholder='enter email..'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <span>email</span>
                        </div>
                        <div className='inputBox'>
                            <input
                                type='password'
                                required={true}
                                placeholder='enter password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <span>password</span>
                        </div>
                        <div className='inputBox'>
                            <input
                                type='text'
                                required={true}
                                placeholder='shop name..'
                                name='shopName'
                                value={formData.shopName}
                                onChange={handleChange}
                            />
                            <span>shop</span>
                        </div>
                        <div className='inputBox'>
                            <input
                                type='text'
                                required={true}
                                placeholder='Address..'
                                name='address'
                                value={formData.address}
                                onChange={handleChange}
                            />
                            <span>user name</span>
                        </div>
                        <div className='inputBox'>
                            <input
                                type='text'
                                required={true}
                                placeholder='Mob Number..'
                                name='mobile'
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                            <span>user name</span>
                        </div>
                        <div className='inputBox'>
                            <input
                                type='file'
                                className=''
                                placeholder='cover'
                                name='photo'
                                value={formData.photo}
                                onChange={handleChange}
                            />
                            <span>cover image</span>
                        </div>
                    </div>
                    <button onClick={HandlSubmit} className='bg-[#FE4910] shadow-black shadow-2xl w-full mt-10 p-2 text-2xl font-semibold grid'>
                        Register
                    </button>
                    <p className='text-center mt-5'>
                        Already have an account ?{' '}
                        <span className='text-blue-400 font-bold text-xl cursor-pointer' onClick={() => navigation('/login')}>
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;