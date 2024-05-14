import { useContext, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Modal = ({ setOpenModal, bookId, newQuantity, setNewQuantity }) => {

    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    // console.log(startDate);
    // console.log(newQuantity);

    const handleBorrowBook = (e) => {
        e.preventDefault()
        const form = e.target
        const borrowedPersonName = form.name.value
        const borrowedPersonEmail = form.email.value
        const returnDate = startDate.toLocaleDateString()
        const borrowedBookId = bookId
        const borrowedPerson = { borrowedPersonName, borrowedPersonEmail, returnDate, borrowedBookId }

        // setOpenModal(false)
        if (startDate < new Date()) {
            return Swal.fire({
                icon: "info",
                title: "Attention!",
                text: "You must use a date later than today. You seem to have used today's date or a previous date. You can't do it.",
            });
        }
        console.log(borrowedPersonName, borrowedPersonEmail, returnDate, borrowedBookId);
        axios.post('http://localhost:5000/borrow-book', borrowedPerson)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    axios.put(`http://localhost:5000/all-books/${bookId}`)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                setNewQuantity(newQuantity - 1)
                            }
                        })

                    setOpenModal(false)
                    Swal.fire({
                        icon: "success",
                        title: "Congrats",
                        text: "Book Borrowed to your borrowed list",
                    });
                }
            })

    }
    return (

        <div className="">
            <div onClick={() => setOpenModal(false)} className="fixed top-0 left-0 z-30 w-full min-h-screen bg-[#00000027]">

            </div>
            <div className="p-4 z-40 mx-3 min-w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-black">
                <h2 className="text-xl text-center font-inter font-bold">Your Details</h2>
                <form onSubmit={handleBorrowBook}>
                    <input className="outline-none font-inter text-[#8b8b8b] mt-4 w-full p-2 border border-[#dbdbdb]" name="name" type="text" value={user?.displayName} disabled />

                    <input className="outline-none font-inter text-[#8b8b8b] mt-4 w-full p-2 border border-[#dbdbdb]" name="email" type="text" value={user?.email} disabled />


                    <p className="mt-3 mb-1 text-inter font-medium">Select Your Return Date</p>

                    <Calendar onChange={(value) => setStartDate(value)} />

                    <div className="flex justify-center items-center">
                        <button className="bg-[#36ad68] py-2 px-5 mt-4 text-white font-medium font-inter" >Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Modal;