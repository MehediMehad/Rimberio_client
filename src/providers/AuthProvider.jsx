import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types'; 
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // create user
    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    //  login user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
     
     
     // google login
     const googleLogIn = () =>{
         setLoading(true)
         return signInWithPopup(auth, googleProvider)
        }

    // logout
    const logOut = async () =>{
        setUser(null)
        const {data} = await axios(`https://assignment-eleven-server-chi-two.vercel.app/logout`, {withCredentials:true})
        console.log(data);
        return signOut(auth)
    }
    
    
    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
            setLoading(false)
            if (currentUser) {
                setUser(currentUser)
            }
        })
        return () => {
            unSubscribe()
        }
    }, [])
    
    
    // updeteprofile
    const updateProfileUser = (name, photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,

        })
    }
    const userInfo ={
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        logOut,
        googleLogIn,
        updateProfileUser
    }
    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes  ={
    children: PropTypes.node
}
export default AuthProvider;