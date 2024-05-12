import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col px-5 justify-center items-center min-h-screen">
            {/* <Helmet>
                <title>Not Found | Tripster</title>
            </Helmet> */}
            <h1 className="text-3xl font-poppins font-medium text-[#ff5252] mb-5 text-center">Oops! The page you are looking for was not found</h1>
            <Link to='/'>
                <button className='bg-gradient-to-r from-[#ebf6fe] to-[#a1d8fe] px-3 py-2 font-inter rounded-md font-semibold text-lg'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;