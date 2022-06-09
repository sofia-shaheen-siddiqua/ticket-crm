import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';



const RequiredAuth = ({ role }) => {
    console.log(role)
    let location = useLocation();
    return (
        localStorage.getItem('userType') === role ? (<Outlet />)
            : (<Navigate to='/unauthorised' state={{ from: location }} />)
    )

}

export default RequiredAuth