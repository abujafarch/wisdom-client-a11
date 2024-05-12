const Quotes = () => {
    return (
        <div className="max-w-[1480px] mx-auto mt-7 sm:mt-12 md:mt-20 px-3 md:px-5">
            <h1 className="text-center font-wisdom text-3xl sm:text-4xl font-bold">Quotes for Inspiration </h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5 sm:mt-10">
                <div className="border border-[#eeeeee] p-3 rounded-md cus-shadow">
                    <p className="text-[160px] text-[#36ad68] -mt-16 font-wisdom ">&ldquo;</p>
                    <p className="px-5 -mt-28 font-wisdom text-lg  font-medium text-[#74cf9a]">The more that you read, the more things you will know. The more that you learn, the more places you'll go <br /> - Dr. Seuss</p>
                    <p className="text-[100px] text-[#36ad68]  -mt-20 text-right font-wisdom leading-tight">,,</p>
                </div>
                <div className="border border-[#eeeeee] p-3 rounded-md cus-shadow">
                    <p className="text-[160px] text-[#36ad68] -mt-16 font-wisdom ">&ldquo;</p>
                    <p className="px-5 -mt-28 font-wisdom text-lg  font-medium text-[#74cf9a]">A reader lives a thousand lives before he dies. The man who never reads lives only one <br />  - George R.R. Martin</p>
                    <p className="text-[100px] text-[#36ad68]  -mt-20 text-right font-wisdom leading-tight">,,</p>
                </div>
                <div className="border border-[#eeeeee] p-3 rounded-md cus-shadow">
                    <p className="text-[160px] text-[#36ad68] -mt-16 font-wisdom ">&ldquo;</p>
                    <p className="px-5 -mt-28 font-wisdom text-lg  font-medium text-[#74cf9a]">Reading is essential for those who seek to rise above the ordinary <br /> - Jim Rohn</p>
                    <p className="text-[100px] text-[#36ad68]  -mt-20 text-right font-wisdom leading-tight">,,</p>
                </div>
            </div>
        </div>
    );
};

export default Quotes;