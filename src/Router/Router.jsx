import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../layout/Home/Home";
import Login from "../layout/Login/Login";
import Register from "../layout/Register/Register";
import AddBooks from "../layout/AddBooks/AddBooks";
import UpdateBooks from "../layout/UpdateBooks/UpdateBooks";
import AllBooks from "../layout/AllBooks/AllBooks";
import BookCategories from "../layout/BookCategory/BookCategories";
import NotFound from "../layout/NotFound/NotFound";
import BorrowedBooks from "../layout/BorrowedBooks/BorrowedBooks";
import BookDetails from "../layout/BookDetails/BookDetails";
import PrivateRoute from "../layout/PriveteRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-books',
                element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
            },
            {
                path: '/update-books',
                element: <PrivateRoute><UpdateBooks></UpdateBooks></PrivateRoute>
            },
            {
                path: '/all-books',
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path: '/category-books',
                element: <PrivateRoute><BookCategories></BookCategories></PrivateRoute>
            },
            {
                path: '/borrowed-books',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
            {
                path: '/book-details',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>
            }
        ]
    },
]);

// const Router = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Router;