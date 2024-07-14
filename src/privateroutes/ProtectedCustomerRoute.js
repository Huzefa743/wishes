import React,{useState} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../components/context/Authcontext';

const  ProtectedUserRoute = () => {
   
    const [parent, setParent] = useState(localStorage.getItem("user_type")==="customer"?true:null);

    return parent ? <Outlet /> : <Navigate to="/" />;
}
export default ProtectedUserRoute