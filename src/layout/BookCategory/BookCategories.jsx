import BookCategory from "./BookCategory";

const BookCategories = () => {
    return (
        <div className="max-w-[1480px] mx-auto mt-40">
            <h2 className="text-center font-bold font-inter text-3xl md:text-4xl mb-3 md:mb-5">Fiction Books</h2>
            <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-10 font-inter md:mt-8 mt-2 lg:mt-12 md:px-5 px-3 py-5">
                <BookCategory></BookCategory>
                <BookCategory></BookCategory>
                <BookCategory></BookCategory>
                <BookCategory></BookCategory>
            </div>
        </div>
    );
};

export default BookCategories;