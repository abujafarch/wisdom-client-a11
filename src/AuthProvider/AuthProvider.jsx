import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [updateProfile, setUpdateProfile] = useState(false)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user from authState:', currentUser);
            if (updateProfile) {
                setUser(currentUser)
                setUpdateProfile(false)
            }
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [auth, updateProfile])

    const authInfo = { createUser, user, auth, setUpdateProfile, loginUser, googleLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;