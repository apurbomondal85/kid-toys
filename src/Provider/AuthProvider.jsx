
import { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase';
import { Children } from 'react';

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
    const auth = getAuth(app)
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const register = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 
    const updateUser = (user,name, photo) => {
        return updateProfile(user, { displayName: name, photoURL: photo })
    }

    const logOut = () => {
        signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        });
        return () => unsubscribe();
    }, [])

    const userInfo = {
        user,
        register,
        login,
        updateUser,
        logOut,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
