import Rating from "react-rating";
import { Link } from "react-router-dom";

const TableView = () => {
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
                                        <div className="mask rounded-sm w-16 h-16">
                                            <img src="https://i.ibb.co/J3kYq01/https-bucketeer-e05bbc84-baa3-437e-9518-adb32be77984-s3-amazonaws-com-public-images-e78bf586-4ce5-47.jpg" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="font-bold">Dune by Frank Herbert</div>
                                        <div className="text-sm opacity-50">by Frank Herbert</div>
                                        <div>
                                            <Rating
                                                initialRating={3.7}
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