import React, { useRef, useState } from "react";
import logo from "../../assets/header/logo.avif";
import { FaBookmark, FaLock, FaStar, FaAngleDoubleLeft } from "react-icons/fa";

const Notes = () => {
    const [indexes, setIndexes] = useState(0);
    const [showItem, setShowItem] = useState(false);
    const [clickItem, setClickItem] = useState();
    const [daySchema, SetDaySchema] = useState([
        {
            day: "Today",
            item: [
                {
                    title: "Sales Meeting with Client X",
                    description: "Discussed new product line and negotiated pricing terms."
                },
                {
                    title: "Follow-up Call with Customer Y",
                    description: "Addressed customer concerns and provided additional information on upcoming promotions."
                }
            ]
        },
        {
            day: "Yesterday",
            item: [
                {
                    title: "Visited Supplier Z",
                    description: "Checked inventory levels and negotiated bulk purchase discounts."
                },
                {
                    title: "Customer Feedback Collection",
                    description: "Gathered feedback from recent customers to improve service quality."
                }
            ]
        },
        {
            day: "Last Week",
            item: [
                {
                    title: "Product Display Setup at Local Fair",
                    description: "Arranged attractive display to attract potential customers and boost sales."
                },
                {
                    title: "Staff Training Session",
                    description: "Conducted training on new sales techniques and customer service protocols."
                }
            ]
        }
    ])


    const task = ["All notes", "To-do-list", "Private", "timePass", "Anything"];


    const today = [1, 2, 3, 4, 5];
    const notesRef = useRef(null);
    const notelist = useRef(null);
    const showNow = (item) => {
        setClickItem(item);
        notesRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const returnShow = () => {
        setClickItem("Set your Item Object here");
        notelist.current.scrollIntoView({ behavior: "smooth" });
    }

    const handleInputChange = (e) => {
        setClickItem({ ...clickItem, title: e.target.value });

        // Update daySchema with the new title
        const updatedDaySchema = daySchema.map((day) => {
            const updatedItem = day.item.map((i) => {
                if (i.title === clickItem.title) {
                    return { ...i, title: e.target.value };
                }
                return i;
            });
            return { ...day, item: updatedItem };
        });
        SetDaySchema(updatedDaySchema)
    };

    return (
        <div className="wrapper md:max-w-[400px] rounded-md max-w-[320px] overflow-x-auto">
            <div className="flex bg-[#aef0ff] " ref={notelist}>
                <div
                    className={`bg-[#ffaec1] md:p-5 p-3 md:min-w-[400px] min-w-[320px] rounded-md h-[80vh]  overflow-y-auto ${showItem ? "" : ""
                        }`}
                >
                    <div className="flex justify-between md:min-w-[400px] min-w-[320px]  items-center sticky top-0  backdrop-blur-3xl  backdrop:shadow-xl bg-[#ffaec1] p-2">
                        <div className="">
                            <h2 className="font-medium text-sm">Hello, Bhagyawanti</h2>
                            <h4 className="text-2xl font-semibold">Welcome to Notes</h4>
                        </div>
                        <img src={logo} alt="" className="w-10 h-10 rounded-full" />
                    </div>
                    <p className="text-sm font-medium mt-6">29 notes</p>
                    <div className="flex gap-5  w-full overflow-x-scroll">
                        <div className="overflow-x-auto flex gap-4 whitespace-nowrap mt-2">
                            {task.map((item, i) => (
                                <p
                                    key={i}
                                    className={`text-xl inline-block duration-700 ease-in-out cursor-pointer p-1 font-medium rounded-md px-3 ${indexes == i ? "bg-black text-white" : "bg-white text-black"
                                        }`}
                                    onClick={() => { setIndexes(i); setShowItem(true) }}
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 list">
                        {daySchema.map((day, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <h1 className="text-2xl font-semibold my-3">{day.day}</h1>
                                <div className="flex flex-col gap-2 h-40 overflow-scroll">
                                    {day.item.map((item, i) => (
                                        <div
                                            key={i}
                                            onClick={() => showNow(item)}
                                            className="bg-white flex shadow-2xl flex-col p-2 rounded-md h-full "
                                        >
                                            <div className="flex justify-between items-center">
                                                <p className="font-semibold text-md -z-0 RightToLeft overflow-hidden">
                                                    {item.title}
                                                </p>
                                                <div className="flex items-center gap-2 z-20">
                                                    <FaLock className="cursor-pointer text-blue-400" />
                                                    <FaStar className="cursor-pointer text-blue-500" />
                                                    <FaBookmark className="cursor-pointer text-orange-500" />
                                                </div>
                                            </div>
                                            <p className="">{item.description}</p>
                                        </div>
                                    ))}
                                    <p className="text-center font-semibold italic">Over the list</p>
                                </div>

                            </div>
                        ))}
                    </div>


                </div>

                <div ref={notesRef}
                    className={`notes bg-[#ffaec1]   min-w-[400px]  rounded-md h-[80vh] overflow-y-scroll relative `}
                >
                    <p className="flex gap-2 items-center text-xl font-medium closeIt absolute left-0 top-1 m-2"><FaAngleDoubleLeft className="text-2xl font-normal cursor-pointer" onClick={returnShow} /> <span>Notes</span></p>
                    <div className="w-full bg-white relative rounded-t-2xl h-full mt-20 px-5">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 py-5">
                                <FaLock className="cursor-pointer duration-700 hover:scale-150 text-blue-400" />
                                <FaStar className="cursor-pointer  hover:scale-150 text-blue-500 duration-700" />
                                <FaBookmark className="hover:scale-150 duration-700 cursor-pointer text-orange-500" />
                            </div>
                        </div>
                        <input type="text" className="text-xl font-semibold tracking-tight" value={clickItem?.title} onChange={handleInputChange} />
                        <textarea className="outline-none" name="" id="" cols="30" placeholder="write anything.." rows="10" ></textarea>
                        <div className="flex">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notes;
