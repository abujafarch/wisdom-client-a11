import Banner from "./Banner/Banner";
import BooksTopics from "./BooksTopics/BooksTopics";
import Quotes from "./Quotes/Quotes";
import Slider from "./Slider";
import TopReaders from "./TopReaders/TopReaders";

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Slider></Slider>
            <BooksTopics></BooksTopics>
            <Quotes></Quotes>
            <TopReaders></TopReaders>
            
        </div>
    );
};

export default Home;