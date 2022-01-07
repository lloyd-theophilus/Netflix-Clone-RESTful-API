//Now we import the AuthReducer here after exporting it

import { createContext, useReducer } from "react";
import MovieReducer from "./MovieReducer";

//Here we create the initial state

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false,
}

//Now we are exporting the context and passing the initial state
export const MovieContext = createContext(INITIAL_STATE)

//The next is to create our provider that will take a prop ({Children})
export const MovieContextProvider = ({children}) => {
    //Here we created a state and dispatch our actions, 
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE)

    return(
        <MovieContext.Provider 
        value = {{
            movies: state.movies,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
            </MovieContext.Provider>
    )
}


export default MovieContext