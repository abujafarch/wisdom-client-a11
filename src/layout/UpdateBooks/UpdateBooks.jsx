import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooks = () => {

    const { bookName, image, category, author, rating, _id } = useLoaderData()
    // console.log(_id);

    const handleUpdateBooks = (e) => {
        e.preventDefault()
        const form = e.target
        const bookName = form.bookName.value
        const image = form.image.value
        const category = form.category.value
        const author = form.author.value
        const rating = parseFloat(form.rating.value)

        if (isNaN(rating)) {
            return Swal.fire("You have to use number input for rating");
        }
        if (rating > 5) {
            return Swal.fire("You can not input more than 5 for rating");
        }

        const updatedBook = { bookName, image, category, author, rating }
        console.log(updatedBook);

        axios.put(`http://localhost:5000/update-books/${_id}`, updatedBook)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Congrats",
                        text: `${bookName} updated successfully`
                    });
                }
            })
    }

    return (
        <div className="max-w-[1200px] mx-auto mt-40">
            <h1 className="text-center font-bold font-inter text-3xl md:text-4xl mb-3 md:mb-5">Update Book</h1>
            <form onSubmit={handleUpdateBooks} className="font-inter md:px-5 px-3 py-5 rounded-md bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div >
                        <p className="text-lg mb-1">Book Name</p>
                        <input type="text" required name="bookName" defaultValue={bookName} className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Book Name" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Image URL</p>
                        <input type="text" required name="image" className="text-lg w-full p-2 rounded-sm outline-none border" defaultValue={image} placeholder="Image URL" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Category</p>
                        <select name="category" defaultValue={category} className="text-lg w-full p-2 rounded-sm outline-none border ">
                            <option value="History">History</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Horror">Horror</option>
                            <option value="Biography">Biography</option>
                        </select>
                    </div>
                    <div >
                        <p className="text-lg mb-1">Author Name</p>
                        <input type="text" required name="author" defaultValue={author} className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Author Name" />
                    </div>
                    <div >
                        <p className="text-lg mb-1">Rating</p>
                        <input type="text" required name="rating" defaultValue={rating} className="text-lg w-full p-2 rounded-sm outline-none border" placeholder="Rating (1-5)" />
                    </div>
                </div>
                <button className="w-full p-2 text-center text-white text-lg font-semibold my-10 px-4 bg-[#36ad68]">Submit</button>
            </form>
        </div>
    );
};

export default UpdateBooks;