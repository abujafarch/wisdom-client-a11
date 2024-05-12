import { Link } from "react-router-dom";

const BooksTopics = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-7 sm:mt-12 md:mt-20 px-3 md:px-5">
            <h1 className="text-center font-wisdom text-3xl sm:text-4xl font-bold">Browse Topics</h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-5 sm:mt-10">
                <div className="relative">
                    <img className="h-[400px] rounded-md w-full object-cover" src="https://i.ibb.co/dkPWtf0/ai-generated-8740293-1280.png" />
                    <div className="absolute bottom-0 w-full flex justify-between items-center py-4 md:px-5 px-3 bg-[#8888883a] rounded-b-md">
                        <h2 className="font-wisdom text-xl sm:text-2xl md:text-3xl font-bold text-white">Horror</h2>
                        <Link to='/category-books'><button className="bg-[#36ad68] py-2 px-3 sm:px-5 rounded-md text-white font-medium font-inter">See Books</button></Link>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[400px] rounded-md w-full object-cover" src="https://i.ibb.co/7rw7k4s/ufo-1265186-1280.jpg" />
                    <div className="absolute bottom-0 w-full flex justify-between items-center py-4 md:px-5 px-3 bg-[#8888883a] rounded-b-md">
                        <h2 className="font-wisdom text-xl sm:text-2xl md:text-3xl font-bold text-white">Fiction</h2>
                        <Link to='/category-books'><button className="bg-[#36ad68] py-2 px-3 sm:px-5 rounded-md text-white font-medium font-inter">See Books</button></Link>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[400px] rounded-md w-full object-cover" src="https://i.ibb.co/LYBF1Qn/compass-3408928-1280.jpg" />
                    <div className="absolute bottom-0 w-full flex justify-between items-center py-4 md:px-5 px-3 bg-[#8888883a] rounded-b-md">
                        <h2 className="font-wisdom text-xl sm:text-2xl md:text-3xl font-bold text-white">History</h2>
                        <Link to='/category-books'><button className="bg-[#36ad68] py-2 px-3 sm:px-5 rounded-md text-white font-medium font-inter">See Books</button></Link>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[400px] rounded-md w-full object-cover" src="https://i.ibb.co/z2HZKKW/book-of-life-718655-1280.jpg" />
                    <div className="absolute bottom-0 w-full flex justify-between items-center py-4 md:px-5 px-3 bg-[#8888883a] rounded-b-md">
                        <h2 className="font-wisdom text-xl sm:text-2xl md:text-3xl font-bold text-white">Biography</h2>
                        <Link to='/category-books'><button className="bg-[#36ad68] py-2 px-3 sm:px-5 rounded-md text-white font-medium font-inter">See Books</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksTopics;