// for context api

import { createContext,useContext } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const storeTokenInLS=(serverToken)=>{
        return localStorage.setItem('token', serverToken);
    }; // now it has become reusable function because of context api

    return(
    <AuthContext.Provider value={{storeTokenInLS}}>
        {children}
    </AuthContext.Provider>
    )
};

export const useAuth=()=>{
    const AuthContextValue= useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("use Auth used outside of Provider");
    }

    return AuthContextValue;
}; // Now all the data is init

//Always remember to wrap in main file
