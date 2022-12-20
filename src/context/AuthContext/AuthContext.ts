import { createContext } from "react";

 const AuthContext = createContext({
    isAuthenticated: false,
    login: (formData : {}) => {},
 });

 export default AuthContext;