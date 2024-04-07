import { useContext } from "react";
import { AuthContext } from "./Authprovider";

import{Navigate, useLocation} from "react-router-dom";


const Privetes = ({children}) => {

const {user,  lodigen} = useContext(AuthContext)
const location = useLocation()
console.log(location.pathname);
     
    if(lodigen){
        return <span className="loading loading-infinity loading-lg"></span>;
    }      

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;

};

export default Privetes;