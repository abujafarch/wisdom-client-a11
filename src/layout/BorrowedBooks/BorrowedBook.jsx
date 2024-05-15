import axios from "axios";
import Swal from "sweetalert2";


const BorrowedBook = ({ borrowedBook }) => {

    const { borrowedPersonEmail, returnDate, borrowedDate, borrowedBookId, bookName, image, author, quantity, _id } = borrowedBook

    const handleReturnBook = () => {
        axios.delete(`http://localhost:5000/borrowed-books?email=${borrowedPersonEmail}&borrowedId=${_id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Congrats",
                        text: "Book returned to library Successfully",
                    });
                    axios.put(`http://localhost:5000/all-books/${borrowedBookId}`, { return: 'return' })
                        .then(res => {
                            console.log(res.data);
                        })
                }
            })
    }

    return (
        <div className={`w-full`}>

            <div className="w-full relative">
                <img className={`w-full h-[500px] object-cover`} src={image} />
                <p className={`absolute bg-[#5353533d] px-3 py-2 text-white font-medium rounded-r-md text-sm font-inter bottom-5`}>Fiction</p>
            </div>
            <div className={`px-2 font-inter pb-2`}>

                <h3 className="text-xl mt-3 font-semibold">{bookName}</h3>
                <p className="text-lg text-[#919191]">by {author}</p>
                <p className="text-lg text-[#919191]">Borrowed: {borrowedDate}</p>
                <p className="text-lg text-[#919191]">Return: {returnDate}</p>
                <button onClick={handleReturnBook} className="bg-[#36ad68] text-center w-full text-white font-inter font-medium p-2 rounded-sm">Return</button>
            </div>
        </div>
    );
};

export default BorrowedBook;