import {createContext, useReducer} from "react";
import {MovieReducer} from "./reducer/MovieReducer";


const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    isError: false
}

export const MovieContext = createContext(INITIAL_STATE);


const MovieContextProvider = ({children}) => {
    const [state, dispatch]= useReducer(MovieReducer, INITIAL_STATE)

    return (
        <MovieContext.Provider value={{movies: state.movies, isFetching: state.isFetching, isError: state.isError, dispatch}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;