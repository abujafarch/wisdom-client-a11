import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Modal = ({ setOpenModal }) => {

    const [startDate, setStartDate] = useState(new Date().toLocaleDateString("en-GB"));
    console.log(startDate);
    return (

        <div className="">
            <div onClick={() => setOpenModal(false)} className="fixed top-0 left-0 z-30 w-full min-h-screen bg-[#00000027]">

            </div>
            <div className="p-4 z-40 mx-3 min-w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-black">
                <h2 className="text-xl text-center font-inter font-bold">Your Details</h2>
                <input className="outline-none font-inter text-[#8b8b8b] mt-4 w-full p-2 border border-[#dbdbdb]" type="text" value={'Your Email'} disabled />

                <input className="outline-none font-inter text-[#8b8b8b] mt-4 w-full p-2 border border-[#dbdbdb]" type="text" value={'Your Name'} disabled />


                <p className="mt-3 mb-1 text-inter font-medium">Select Your Return Date</p>

                <Calendar onChange={(value) => setStartDate(value.toLocaleDateString("en-GB"))} />

                <div className="flex justify-center items-center">
                    <button className="bg-[#36ad68] py-2 px-5 mt-4 text-white font-medium font-inter" onClick={() => setOpenModal(false)}>Submit</button>
                </div>
            </div>
        </div>

    );
};

export default Modal;