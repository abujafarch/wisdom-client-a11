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
        errorElement: <NotFound></NotFound>,
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
                path: '/update-books/:id',
                element: <PrivateRoute><UpdateBooks></UpdateBooks></PrivateRoute>,
                loader: ({ params }) => fetch(`https://wisdom-server.vercel.app/update-books/${params.id}`)
            },
            {
                path: '/all-books',
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
                // loader: () => fetch('https://wisdom-server.vercel.app/all-books', { credentials: 'include' })
            },
            {
                path: '/books-category/:category',
                element: <PrivateRoute><BookCategories></BookCategories></PrivateRoute>,
                loader: ({ params }) => fetch(`https://wisdom-server.vercel.app/books-category/${params.category}`)
            },
            {
                path: '/borrowed-books',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
            {
                path: '/book-details/:id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://wisdom-server.vercel.app/book-details/${params.id}`)
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