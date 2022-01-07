//Now we import the AuthReducer here after exporting it

import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

//Here we create the initial state

const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
}

//Now we are exporting the context and passing the initial state
export const AuthContext = createContext(INITIAL_STATE)

//The next is to create our provider that will take a prop ({Children})
export const AuthContextProvider = ({children}) => {
    //Here we created a state and dispatch our actions, 
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])
    return(
        <AuthContext.Provider 
        value = {{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
            </AuthContext.Provider>
    )
}

