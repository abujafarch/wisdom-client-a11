import { useContext, useEffect, useState } from "react";
import BorrowedBook from "./BorrowedBook";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BorrowedBooks = () => {

    const { user } = useContext(AuthContext)
    const [borrowedBooks, setBorrowedBooks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/borrowed-books?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBorrowedBooks(data)
            })
    }, [user])

    return (
        <div className="max-w-[1480px] mx-auto mt-40">
            <h2 className="text-center font-bold font-inter text-3xl md:text-4xl mb-3 md:mb-5">Borrowed Books</h2>
            <div className={`grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-10 font-inter mt-5 md:px-5 px-3 py-5`}>

                {
                    borrowedBooks.map(borrowedBook => <BorrowedBook key={borrowedBook._id} borrowedBook={borrowedBook}></BorrowedBook>)
                }
                {/* <BorrowedBook></BorrowedBook>
                <BorrowedBook></BorrowedBook>
                <BorrowedBook></BorrowedBook>
                <BorrowedBook></BorrowedBook> */}
            </div>
        </div>
    );
};

export default BorrowedBooks;