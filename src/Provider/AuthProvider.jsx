
import { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase';

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
    const auth = getAuth(app)
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // sing up
    const register = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const login = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 

    // update user profile
    const updateUser = (user,name, photo) => {
        return updateProfile(user, { displayName: name, photoURL: photo })
    }

    // login with google
    const google = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logOut = () => {
        signOut(auth)
    }

    // observer 
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
        google,
        logOut,
        loader,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
