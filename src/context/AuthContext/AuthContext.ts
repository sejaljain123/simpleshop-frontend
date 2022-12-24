import { createContext } from "react";

 const AuthContext = createContext({
    isAuthenticated: false,
    loginState: (formData : {}) => {},
    loading: false,
    error: "",
 });

 export default AuthContext;