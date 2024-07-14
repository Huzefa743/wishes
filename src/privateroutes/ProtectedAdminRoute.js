import react, {useState} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../components/context/Authcontext';

const  ProtectedRoute = () => {
    const [manager, setmaneger] = useState(localStorage.getItem("user_type")==="admin"?true:null);

    return manager ? <Outlet /> : <Navigate to="/" />;
}

  export default ProtectedRoute