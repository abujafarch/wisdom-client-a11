import BorrowedBook from "./BorrowedBook";

const BorrowedBooks = () => {
    return (
        <div className="max-w-[1480px] mx-auto mt-40">
            <h2 className="text-center font-bold font-inter text-3xl md:text-4xl mb-3 md:mb-5">Borrowed Books</h2>
            <div className={`grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-10 font-inter mt-5 md:px-5 px-3 py-5`}>
                <BorrowedBook></BorrowedBook>
                <BorrowedBook></BorrowedBook>
                <BorrowedBook></BorrowedBook>
                <BorrowedBook></BorrowedBook>
            </div>
        </div>
    );
};

export default BorrowedBooks;