import PropTypes from 'prop-types'; 
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    if (user) return children

    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};
PrivetRout.propTypes  ={
    children: PropTypes.node
}
export default PrivetRout;