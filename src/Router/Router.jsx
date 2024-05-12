import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../layout/Home/Home";
import Login from "../layout/Login/Login";
import Register from "../layout/Register/Register";
import AddBooks from "../layout/AddBooks/AddBooks";
import UpdateBooks from "../layout/UpdateBooks/UpdateBooks";
import AllBooks from "../layout/AllBooks/AllBooks";
import BookCategories from "../layout/BookCategory/BookCategories";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                element: <AddBooks></AddBooks>
            },
            {
                path: '/update-books',
                element: <UpdateBooks></UpdateBooks>
            },
            {
                path: '/all-books',
                element: <AllBooks></AllBooks>
            },
            {
                path: '/category-books',
                element: <BookCategories></BookCategories>
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