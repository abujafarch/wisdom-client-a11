import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import BooksTopics from "./BooksTopics/BooksTopics";
import Quotes from "./Quotes/Quotes";
import TopReaders from "./TopReaders/TopReaders";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BooksTopics></BooksTopics>
            <Quotes></Quotes>
            <TopReaders></TopReaders>
            <Footer></Footer>
        </div>
    );
};

export default Home;