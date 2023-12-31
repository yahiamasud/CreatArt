import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.confing';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const singInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    };

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        return signOut(auth);
    };

    const profile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            // get and set token
            if(createUser){
                axios.post(`https://assignment-server-12-yahiamasud.vercel.app/jwt`,{email:createUser.email})
                .then(data =>{
                    localStorage.setItem('toke',data.data.token)
                })
            }
            else{
                localStorage.removeItem('token')
            }
            

            setLoading(false);
        })
        return () => {
            unsubscribe();
        }

    }, [])

    const Authinfo = {
        user,
        loading,
        createUser,
        singIn,
        singInGoogle,
        profile,
        logOut

    };
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;