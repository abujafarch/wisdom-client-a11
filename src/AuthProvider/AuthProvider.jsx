import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [theme, setTheme] = useState(false)
    const [user, setUser] = useState(null)
    const [updateProfile, setUpdateProfile] = useState(false)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        // setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user from authState:', currentUser);

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            if (updateProfile) {
                setUser(currentUser)
                setUpdateProfile(false)
            }
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                axios.post('https://wisdom-server.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
            else {
                axios.post('https://wisdom-server.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })
        return () => {
            unSubscribe()
        }
    }, [auth, updateProfile, user])

    const authInfo = { createUser, logOut, loading, user, auth, setUpdateProfile, loginUser, googleLogin, setLoading, theme, setTheme }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;