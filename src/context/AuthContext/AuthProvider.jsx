import AuthContext from "./AuthContent";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import Swal from "sweetalert2";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        if(loading){
            Swal.fire({
                title: 'Processing',
                html: 'Please wait...',
                didOpen: () => {
                    Swal.showLoading()
                }
            });
        }
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('current user', currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;