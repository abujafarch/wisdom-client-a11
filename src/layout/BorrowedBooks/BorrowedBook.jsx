import { Link } from "react-router-dom";

const BorrowedBook = ({ borrowedBook }) => {
    const { returnDate, borrowedDate, borrowedBookId, bookName, image, author, quantity } = borrowedBook
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
                <Link to='/update-books'><button className="bg-[#36ad68] text-center w-full text-white font-inter font-medium p-2 rounded-sm">Return</button></Link>
            </div>
        </div>
    );
};

export default BorrowedBook;