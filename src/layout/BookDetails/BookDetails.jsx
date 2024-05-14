import Rating from "react-rating";
import Swal from "sweetalert2";
import Modal from "./Modal";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {

    const bookDetails = useLoaderData()
    const { bookName, image, category, author, rating, quantity, content, description } = bookDetails

    const [openModal, setOpenModal] = useState(false)
    const [newQuantity, setNewQuantity] = useState(quantity)
    const handleOpenModal = () => {
        setOpenModal(true)
    }

    return (
        <div className="max-w-[1200px] md:px-5 px-3 mx-auto mt-40">
            <div className="flex flex-col md:flex-row gap-5">
                <img className="md:h-[600px] object-cover" src={image} />
                <div className="space-y-2">
                    <p className="text-xl font-medium font-inter">Book Name: {bookName}</p>
                    <p className="font-inter text-lg text-[#7e7e7e]">by {author}</p>
                    <p className="font-inter font-medium text-lg ">Category: {category}</p>
                    <p className="font-inter font-medium text-lg ">Quantity: {newQuantity}</p>
                    <div>
                        <Rating
                            initialRating={rating}
                            readonly
                        />
                    </div>
                    <button disabled={newQuantity < 0} onClick={handleOpenModal} className="bg-[#36ad68] px-5 py-2 rounded-sm font-inter text-lg font-medium text-white">Borrow</button>
                    <p className="font-inter"><span className="font-semibold">Summary:</span> {content}</p>
                </div>
            </div>
            <div className="mt-5">
                <p className="font-inter"><span className="font-semibold">Description:</span> {description}</p>
            </div>
            <div className={`${openModal ? 'flex' : 'hidden'}`}>
                <Modal setOpenModal={setOpenModal} bookId={bookDetails._id} setNewQuantity={setNewQuantity} newQuantity={newQuantity}></Modal>
            </div>
        </div>
    );
};

export default BookDetails;