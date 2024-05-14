import Rating from "react-rating";
import { Link } from "react-router-dom";

const TableView = ({book}) => {
    const { bookName, image, category, author, rating } = book
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody >
                        {/* row 1 */}
                        <tr>
                            <td className="px-0">
                                <div className="flex sm:items-center flex-col sm:flex-row gap-3">
                                    <div className="avatar">
                                        <div className="mask rounded-sm w-24 h-24">
                                            <img src={image} />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="font-bold">{bookName}</div>
                                        <div className="text-sm opacity-50">by {author}</div>
                                        <div className="text-sm opacity-50">{category}</div>
                                        <div>
                                            <Rating
                                                initialRating={rating}
                                                readonly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            {/* <td>
                                <div>
                                    rating here
                                </div>
                            </td> */}
                            <th className="flex px-0 justify-end">
                                <Link to='/update-books'><button className="bg-[#36ad68] text-center text-white font-inter font-medium p-2 rounded-sm">Update</button></Link>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableView;