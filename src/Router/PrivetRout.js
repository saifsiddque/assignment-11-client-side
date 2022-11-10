import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../src/Context/UserContext';

const PrivetRout = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <button className="btn loading my-40 ml-28">loading</button>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={ {from: location} } replace></Navigate>
};

export default PrivetRout;