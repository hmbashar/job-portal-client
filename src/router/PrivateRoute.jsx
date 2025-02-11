import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContent";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>;
    }

    if(user){
        return children;
    }

    return <Navigate to="/signin" state={location?.pathname}>SingIn</Navigate>

};

export default PrivateRoute;