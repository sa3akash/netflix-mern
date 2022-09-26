import {createContext, useReducer} from "react";
import {ListsReducer} from "./reducer/ListReducer";


const INITIAL_STATE = {
    lists: [],
    isFetching: false,
    isError: false
}

export const ListsContext = createContext(INITIAL_STATE);


const ListsContextProvider = ({children}) => {
    const [state, dispatch]= useReducer(ListsReducer, INITIAL_STATE)

    return (
        <ListsContext.Provider value={{lists: state.lists, isFetching: state.isFetching, isError: state.isError, dispatch}}>
            {children}
        </ListsContext.Provider>
    )
}

export default ListsContextProvider;