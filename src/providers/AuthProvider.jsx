import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import PropTypes from 'prop-types'; 
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // create user
     const createUser =(email, password) =>{

        setLoading(true);
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
        
        //  observer 
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
        
        
        const userInfo ={
        user,
        loading,
        createUser,
        googleLogIn,
        setUser,
        signInUser,
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