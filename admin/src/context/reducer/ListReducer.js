
export const ListsReducer = (state, action) => {
    switch(action.type) {
        case "GET_LISTS_START" :
            return {
                lists: [],
                isFetching: true,
                isError: false
            }
        case "GET_LISTS_SUCCESS" :
            return {
                lists: action.payload,
                isFetching: false,
                isError: false
            }
        case "GET_LISTS_FAILURE" :
            return {
                lists: [],
                isFetching: false,
                isError: true
            }
        case "DELETE_LIST_START" :
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        case "DELETE_LIST_SUCCESS" :
            return {
                lists: state.lists.filter(list=>list._id !== action.payload),
                isFetching: false,
                isError: false
            }
        case "DELETE_LIST_FAILURE" :
            return {
                ...state,
                isFetching: false,
                isError: true
            }
        case "CREATE_LIST_START" :
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        case "CREATE_LIST_SUCCESS" :
            return {
                lists: [...state.lists, action.payload],
                isFetching: false,
                isError: false
            }
        case "CREATE_LIST_FAILURE" :
            return {
                ...state,
                isFetching: false,
                isError: true
            }
        case "UPDATE_LIST_START" :
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        case "UPDATE_LIST_SUCCESS" :
            return {
                lists: state.lists.map(list => list._id === action.payload._id && action.payload),
                isFetching: false,
                isError: false
            }
        case "UPDATE_LIST_FAILURE" :
            return {
                ...state,
                isFetching: false,
                isError: true
            }

        default : 
            return {...state}
    }
}