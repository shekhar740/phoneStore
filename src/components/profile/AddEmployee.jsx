import React, { useState, useEffect } from 'react';
import { useSocket } from '../../utils/contextApi/SocketProvider';
import { useSelector } from 'react-redux';
import Api from '../../utils/Api';
import { useNavigate } from 'react-router-dom';

const AddEmployee = ({sendDataToParent}) => {
    const navigation = useNavigate()
    const LoggedUser = useSelector(state => state)
    const [otpVerified, setOtpVerified] = useState(false)
    const socket = useSocket();
    const [timeLeft, setTimeLeft] = useState(60);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        mobileNumber: '',
        otp: '',
    });

    useEffect(() => {
        if (formData.mobileNumber.length === 10 && formData.email && formData.password) {
            if (!otpVerified) {
                setTimeLeft(60)
                socket.emit("frontend-detail", { email: formData.email, password: formData.password, number: formData.mobileNumber });
            }
            const timerInterval = setInterval(() => {
                setTimeLeft(prevTime => (prevTime === 0 ? 0 : prevTime - 1));
            }, 1000);
            return () => clearInterval(timerInterval);
        }
    }, [formData.mobileNumber]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    console.log(sendDataToParent)

    const submit = async () => {
        if (verifyOtp) {
            try {
                const response = await Api.post("/api/add-user", { fullName: formData.fullName, email: formData.email,mobileNumber:formData.mobileNumber, password: formData.password, adminEmail: LoggedUser?.user })
                if (response.status === 204) {
                    setOtpVerified(false)
                    console.log("admin not found please login")
                    navigation('/login')
                } else if (response.status === 202) {
                    console.log("this email already exists")
                    setOtpVerified(false)
                } else {
                    sendDataToParent(formData)
                    setFormData({
                        fullName: '',
                        email: '',
                        password: '',
                        mobileNumber: '',
                        otp: '',
                    });
                    setOtpVerified(false)
                    console.log("user created successfully")
                    
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("please verify otp")
        }

    };

    const resendCode = () => {
        if (!otpVerified) {
            setOtpVerified(false)
            setTimeLeft(60);
        }
        // Restart the timer by resetting timeLeft to 60
    };


    const verifyOtp = () => {
        if (!otpVerified) {
            socket.emit("otp-frontend", { email: formData.email, password: formData.password, number: formData.mobileNumber, otp: formData.otp, admin: LoggedUser?.user });
            socket.on("successfull", () => {
                console.log("OTP verified successfully");
                setOtpVerified(true)
            });
            socket.on("not-successfull", () => {
                console.log("OTP verification failed");
            });
        }

    };


    

    

    return (
        <div className="mt-14">
            <h3 className="text-xl font-light">Add new Employee</h3>
            <div className="grid grid-cols-2 items-center gap-5 mt-5 font-semibold opacity-60">
                <div className="flex flex-col gap-2 col-span-2">
                    <label htmlFor="">Full name</label>
                    <input
                        type="text"
                        placeholder="Enter name..."
                        className="p-2 rounded-md"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <p className="text-[10px] pl-2">It will be shown on profile</p>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        placeholder="Enter login email..."
                        className="p-2 rounded-md"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <label htmlFor="">Password</label>
                    <input
                        type="text"
                        placeholder="Enter login password..."
                        className="p-2 rounded-md"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                {/* Number */}
                <div className="flex flex-col gap-2 mt-3 relative">
                    <label htmlFor="">Mobile Number</label>
                    <input
                        type="number"
                        placeholder="Mobile number..."
                        className="p-2 rounded-md"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                    />
                    {formData.mobileNumber.length === 10 && (
                        <>
                            <button onClick={resendCode} className={`bg-blue-400 w-fit absolute bottom-7 rounded-md px-2 p-1 text-black right-2`}>
                                {timeLeft > 0 ? `00:${timeLeft}` : "Resend"}
                            </button>
                            <div>
                                <h1 className='text-[10px]'>{timeLeft > 0 ? "OTP sent successfully" : "You can resend OTP"}</h1>
                            </div>
                        </>
                    )}
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <div className="relative">
                        <input
                            type="number"
                            placeholder="OTP..."
                            className="p-2 rounded-md"
                            name="otp"
                            value={formData.otp}
                            onChange={handleChange}
                        />
                        <p onClick={verifyOtp} className="absolute right-2 bg-slate-400 px-3 rounded-md p-[2px] bottom-[6px] text-black cursor-pointer hover:text-white hover:bg-blue-600 duration-700">
                            Verify
                        </p>
                        <p className="text-[10px] absolute top-12 right-4">
                            {otpVerified ? "verify successfull" : "otp send both email and mobile number"}
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <button className="bg-[#6E1EF3] text-white px-20 p-3 rounded-3xl font-semibold" onClick={submit}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;
