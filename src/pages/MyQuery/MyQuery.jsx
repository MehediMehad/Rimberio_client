import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyQuery = () => {

    const {user} = useContext(AuthContext)


    return (
        <div>
            
        </div>
    );
};

export default MyQuery;