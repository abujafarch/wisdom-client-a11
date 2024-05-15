import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddBooks = () => {

    const { user } = useContext(AuthContext)

    const handleAddBooks = (e) => {
        e.preventDefault()
        const form = e.target
        const bookName = form.bookName.value
        const image = form.image.value
        const category = form.category.value
        const quantity = parseInt(form.quantity.value)
        const author = form.author.value
        const rating = parseFloat(form.rating.value)
        // const ratingParse = parseFloat(rating)
        const description = form.description.value
        const content = form.content.value

        console.log(rating)

        if (isNaN(rating)) {
            return Swal.fire("You have to use number input for rating");
        }
        if (rating > 5) {
            return Swal.fire("You can not input more than 5 for rating");
        }
        if (rating <= 0) {
            return Swal.fire("You can not input less than 1 for rating");
        }
        if (quantity <= 0) {
            return Swal.fire("You can not input less than 1 for quantity");
        }

        const book = { bookName, image, category, quantity, author, rating, description, content }
        console.log(book);
        axios.post(`https://wisdom-server.vercel.app/all-books?email=${user?.email}`, book, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Congrats",
                        text: `${bookName} added successfully`
                    });
                }
                form.reset()
            })
    }

    return (
        <div className="max-w-[1200px] mx-auto mt-40">
            <h1 className="text-center font-bold font-inter text-3xl md:text-4xl mb-3 md:mb-5">Add Book</h1>
            <form onSubmit={handleAddBooks} className="font-inter md:px-5 px-3 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div >
                        <p className="text-lg mb-1">Book Name</p>
                        <input type="text" required name="bookName" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Book Name" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Image URL</p>
                        <input type="text" required name="image" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Image URL" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Category</p>
                        <select name="category" className="text-lg w-full p-2 rounded-sm outline-none border ">
                            <option value="History">History</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Horror">Horror</option>
                            <option value="Biography">Biography</option>
                        </select>
                    </div>
                    <div >
                        <p className="text-lg mb-1">Quantity</p>
                        <input type="number" required name="quantity" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Quantity" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Author Name</p>
                        <input type="text" required name="author" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Author Name" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Rating</p>
                        <input type="text" required name="rating" className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Rating (1-5)" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Short Description</p>
                        <textarea className="text-lg w-full p-2 rounded-sm outline-none border" name="description" rows={10}></textarea>
                    </div>
                    <div >
                        <p className="text-lg mb-1">Some of content of this book</p>
                        <textarea className="text-lg w-full p-2 rounded-sm outline-none border" name="content" rows={10}></textarea>
                    </div>
                </div>
                <button className="w-full p-2 text-center text-white text-lg font-semibold my-10 px-4 bg-[#36ad68]">Add Book</button>
            </form>
        </div>
    );
};

export default AddBooks;