import Rating from "react-rating";
import { Link } from "react-router-dom";

const BookCategory = ({ book }) => {

    const { bookName, image, category, author, rating, _id } = book

    return (
        <div className="w-full">
            <div className="w-full relative">
                <img className="w-full" src={image} />
                <p className="absolute bg-[#535353a1] px-3 py-2 text-white font-medium rounded-r-md text-sm font-inter bottom-5">{category}</p>
            </div>
            <div className="px-2 font-inter pb-2">
                <h3 className="text-xl mt-3 font-semibold">{bookName}</h3>
                <p className="text-lg text-[#919191]">by {author}</p>
                <div className="my-1">
                    <Rating
                        initialRating={rating}
                        readonly
                    />
                </div>
                <Link to={`/book-details/${_id}`}><button className="bg-[#36ad68] text-center w-full text-white font-inter font-medium p-2 rounded-sm">Details</button></Link>
            </div>
        </div>
    );
};

export default BookCategory;