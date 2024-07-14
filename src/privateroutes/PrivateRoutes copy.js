import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../components/context/Authcontext';

function PrivateRoutes() {

    const userName = localStorage.getItem("user_name");
    const Auth = localStorage.getItem("auth");
    const userType = localStorage.getItem('user_type');
    const loggedInUser = { userName, Auth, userType }

    return (
        <div>
            <AuthContext.Provider value={loggedInUser}>
                {userName ? <Outlet /> : <Navigate to="/" />}
            </AuthContext.Provider>
        </div>
    )
}




export default PrivateRoutes