import { getAuth } from "firebase/auth";
import PropTypes from 'prop-types'; 
import { createContext } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {



    const info ={
        name:'mehedi'
    }
    return (
        <AuthContext.Provider value={info} >
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes  ={
    children: PropTypes.node
}
export default AuthProvider;