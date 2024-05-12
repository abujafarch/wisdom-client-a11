import { useState } from "react";
import AllBook from "./AllBook";

const AllBooks = () => {
    const [view, setView] = useState('card-view')
    const handleView = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className="max-w-[1480px] mx-auto mt-40">
            <h2 className="text-center font-bold font-inter text-3xl md:text-4xl mb-3 md:mb-5">All Books</h2>
            <div className="md:mt-8 mt-2 lg:mt-12 md:px-5 px-3">
                <select onChange={handleView} className="outline-none text-lg font-inter border-2 border-[#d3d3d3] p-2 rounded-md" name="">
                    <option value="card-view">Card View</option>
                    <option value="table-view">Table View</option>
                </select>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 font-inter mt-5 md:px-5 px-3 py-5">
                <AllBook></AllBook>
                <AllBook></AllBook>
                <AllBook></AllBook>
                <AllBook></AllBook>
            </div>
        </div>
    );
};

export default AllBooks;