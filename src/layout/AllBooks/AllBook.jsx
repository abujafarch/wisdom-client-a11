import { Link } from "react-router-dom";

const AllBook = () => {
    return (
        <div className="w-full">
            <div className="w-full relative">
                <img className="w-full" src="https://i.ibb.co/J3kYq01/https-bucketeer-e05bbc84-baa3-437e-9518-adb32be77984-s3-amazonaws-com-public-images-e78bf586-4ce5-47.jpg" />
                <p className="absolute bg-[#5353533d] px-3 py-2 text-white font-medium rounded-r-md text-sm font-inter bottom-5">Fiction</p>
            </div>
            <div className="px-2 font-inter pb-2">
                <h3 className="text-xl mt-3 font-semibold">Dune by Frank Herbert</h3>
                <p className="text-lg text-[#919191]">by Frank Herbert</p>
                <p>rating here</p>
                <Link to='/update-books'><button className="bg-[#36ad68] text-center w-full text-white font-inter font-medium p-2 rounded-sm">Update</button></Link>
            </div>
        </div>
    );
};

export default AllBook;