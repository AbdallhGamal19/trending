import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";



export let contextuserData = createContext(0);

export default function ContextUserDataProvider({ children }) { 
    const [userData, setUserData] = useState(null);
    let saveUserData = () => {
        let encodedToken = localStorage.getItem('token');
        let decodedToken = jwtDecode(encodedToken);
        setUserData(decodedToken);
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            saveUserData();
        }

    }, [])

    let logout = () => {
        setUserData(null);
        localStorage.removeItem('token');
        return <Navigate to={'/login'} />;
    }
    return <contextuserData.Provider value={{ logout, saveUserData, userData }}>
        {children}
    </contextuserData.Provider>
}