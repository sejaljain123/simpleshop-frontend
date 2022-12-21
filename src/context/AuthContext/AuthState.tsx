import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props: any) => { 
   
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  


    const login = async (formData: any) => {
   
        if(formData.username === process.env.REACT_APP_USERNAME && formData.password === process.env.REACT_APP_PASSWORD){
                setIsAuthenticated(true);
               
          }
            else{
                setIsAuthenticated(false);
            }
    };
    return (
        <AuthContext.Provider
            value={{isAuthenticated, login}}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
