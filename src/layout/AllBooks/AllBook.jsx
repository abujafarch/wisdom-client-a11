import { Link } from "react-router-dom";
import CardView from "./CardView";
import TableView from "./TableView";

const AllBook = ({ view, book }) => {
    if (view === 'card-view') {
        return <CardView book={book}></CardView>
    }
    else {
        return <TableView book={book}></TableView>
    }
};

export default AllBook;