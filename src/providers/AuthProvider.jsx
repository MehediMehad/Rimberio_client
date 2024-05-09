import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import PropTypes from 'prop-types'; 
import { createContext, useState } from "react";
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

     
    // google login
    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    const userInfo ={
        user,
        loading,
        createUser,
        googleLogIn,
        setUser,
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