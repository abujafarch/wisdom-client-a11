import { useContext } from "react";
import BooksTopics from "./BooksTopics/BooksTopics";
import Quotes from "./Quotes/Quotes";
import Slider from "./Slider";
import TopReaders from "./TopReaders/TopReaders";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
    const { theme } = useContext(AuthContext)
    return (
        <div data-theme={theme ? 'dark' : 'light'}>
            {/* <Banner></Banner> */}
            <Slider></Slider>
            <BooksTopics></BooksTopics>
            <Quotes></Quotes>
            <TopReaders></TopReaders>

        </div>
    );
};

export default Home;