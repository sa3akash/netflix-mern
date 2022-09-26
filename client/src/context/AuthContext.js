import {createContext, useEffect, useReducer} from "react";
import AuthReducer from "./reducer/AuthReducer";


const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    isError: false,
}

export const AuthContext = createContext(INITIAL_STATE)

// make provider for AuthContext
const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
    
    return(
        <AuthContext.Provider value={{user: state.user, isFetching: state.isFetching, isError: state.isError, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;