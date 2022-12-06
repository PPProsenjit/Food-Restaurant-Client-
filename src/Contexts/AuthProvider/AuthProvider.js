import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth =getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userSignIn, setUserSignIn] = useState({});
    const[loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const signInWithUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    
    }
    
    const logOut =() =>{
       return signOut(auth)
    }

    const signInWithGoogle = ()=>{

        return signInWithPopup(auth, googleProvider);
    }
    const profileEdit =(profile) =>{
        return updateProfile(auth.currentUser, profile);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, CurrentUser =>{
            if (CurrentUser=== null || CurrentUser){
                setUser(CurrentUser);
            }
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    },[userSignIn])

    const authInfo = {
        user,
        loading,
        createUser,
        profileEdit,
        setUserSignIn,
        signInWithUser,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;