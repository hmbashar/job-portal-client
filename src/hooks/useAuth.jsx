import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContent";

const useAuth = () => {
    const context = useContext(AuthContext);
    
    return context;
};

export default useAuth;