import React, { useState } from "react";
import AuthContext from "./AuthContext";
import login from "../../api/login";
import { useNavigate } from "react-router-dom";

const AuthState = (props: any) => { 
   
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate  = useNavigate();
    const loginState = async (formData: any) => {
       setLoading(true);
       const response = await login(formData.username, formData.password);
       if(!response){
           setError('Invalid Credentials');
           setLoading(false);
           return;
       }
       if(response.success){
        setIsAuthenticated(true);
        setLoading(false);
        navigate('/dashboard');
         }
    };

    return (
        <AuthContext.Provider
            value={{isAuthenticated, loginState, loading, error}}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
