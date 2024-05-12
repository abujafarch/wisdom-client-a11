import { Link } from "react-router-dom";
import CardView from "./CardView";
import TableView from "./TableView";

const AllBook = ({ view }) => {
    if (view === 'card-view') {
        return <CardView></CardView>
    }
    else {
        return <TableView></TableView>
    }
};

export default AllBook;