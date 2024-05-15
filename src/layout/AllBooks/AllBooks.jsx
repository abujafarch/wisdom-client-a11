import { useState } from "react";
import AllBook from "./AllBook";
import { useLoaderData } from "react-router-dom";

const AllBooks = () => {
    const [view, setView] = useState('card-view')
    const allBooks = useLoaderData()
    const [availableBooks, setAvailableBooks] = useState(allBooks)
    // console.log(allBooks);

    const handleView = (e) => {
        setView(e.target.value);
    }
    const handleAvailableBooks = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        const value = e.target.value
        if (value === 'available-books') {
            const newAvailableBooks = availableBooks.filter(book => book.quantity !== 0)
            setAvailableBooks(newAvailableBooks)
        }
        else{
            setAvailableBooks(allBooks)
        }
    }

    return (
        <div className="max-w-[1480px] mx-auto mt-40">
            <h2 className="text-center font-bold font-inter text-3xl md:text-4xl mb-3 md:mb-5">All Books</h2>
            <div className="md:mt-8 mt-2 lg:mt-12 md:px-5 px-3">
                <select onChange={handleView} className="outline-none mr-5 mb-2 text-lg font-inter border-2 border-[#d3d3d3] p-2 rounded-md" name="">
                    <option value="card-view">Card View</option>
                    <option value="table-view">Table View</option>
                </select>
                <select onChange={handleAvailableBooks} className="outline-none text-lg font-inter border-2 border-[#d3d3d3] p-2 rounded-md" name="">
                    <option value="all-books">All Books</option>
                    <option value="available-books">Available Books</option>
                </select>
            </div>

            <div className={`${view === 'card-view' ? 'grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-10' : 'flex flex-col'} font-inter mt-5 md:px-5 px-3 py-5`}>

                {
                    availableBooks.map(book => <AllBook key={book._id} view={view} book={book}></AllBook>)
                }

            </div>
        </div>
    );
};

export default AllBooks;