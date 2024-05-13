import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname);
    if (loading) {
        return <Loader></Loader>
    }
    return (
        user ? children : <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;