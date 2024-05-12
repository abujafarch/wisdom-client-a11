const AddBooks = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-40">
            <h1 className="text-center font-bold font-inter text-4xl mb-5">Add Book</h1>
            <form className="mx-5 font-inter px-3 p-5 rounded-md bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div >
                        <p className="text-lg mb-1">Book Name</p>
                        <input type="text" required name="spotName" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Book Name" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Image URL</p>
                        <input type="text" required name="image" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Image URL" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Category</p>
                        <select name="country" className="text-lg w-full p-2 rounded-sm outline-none border ">
                            <option value="History">History</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Horror">Horror</option>
                            <option value="Biography">Biography</option>
                        </select>
                    </div>
                    <div >
                        <p className="text-lg mb-1">Quantity</p>
                        <input type="number" required name="location" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Quantity" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Author Name</p>
                        <input type="text" required name="cost" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Author Name" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Rating</p>
                        <input type="number" required name="seasonality" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Rating (1-5)" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Short Description</p>
                        <textarea className="text-lg w-full p-2 rounded-sm outline-none border" name="description" rows={10}></textarea>
                        {/* <input type="text" required name="travelTime" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Short Description" /> */}
                    </div>
                    <div >
                        <p className="text-lg mb-1">Some of content of this book</p>
                        <textarea className="text-lg w-full p-2 rounded-sm outline-none border" name="content" rows={10}></textarea>
                        {/* <input type="text" required name="visitor" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Total Visitor Per Year" /> */}
                    </div>
                </div>
                <button className= "w-full p-2 text-center text-white text-lg font-semibold my-10 px-4 bg-[#36ad68]">Add Book</button>
            </form>
        </div>
    );
};

export default AddBooks;