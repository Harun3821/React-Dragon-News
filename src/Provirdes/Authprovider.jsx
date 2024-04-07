import { createContext,  useEffect,  useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const Authprovider = ({children}) => {
const [user, setUser] = useState(null);

const [lodigen, setLoding] = useState(true) 

const createUser = (email, password)=>{
    setLoding(true);
   return createUserWithEmailAndPassword(auth, email, password)
}

const singIn = (email, password) =>{
     setLoding(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = ()=>{
    setLoding(true);
    return signOut(auth)
}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, currrentUser =>{
        console.log('user in the state chende', currrentUser)
        setUser(currrentUser);
        setLoding(false)
    })
    return ()=>{
        unSubscribe();
    }
},[])


    const authInfo = {
        user,
        lodigen,
        createUser,
        singIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;