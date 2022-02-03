import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate,  useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children}) => {
        let location = useLocation();
        const {user,isLoading} = useAuth();
        if(isLoading){return <CircularProgress/>};
        if(user?.email){
                return children ;
        };

        return <Navigate to="/login" state={{ from: location }} replace />;


};

export default PrivateRoute;