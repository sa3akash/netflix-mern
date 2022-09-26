
const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                isFetching: true,
                isError: false,
            }
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isFetching: false,
                isError: false,
            }
        case 'LOGIN_FAILURE':
            return {
                user: null,
                isFetching: false,
                isError: true,
            }
        case 'LOGOUT':
            return {
                user: null,
                isFetching: false,
                isError: false,
            }

            case 'REGISTER_USER_START':
                return {
                    user: null,
                    isFetching: true,
                    isError: false,
                }
            case 'REGISTER_USER_SUCCESS':
                return {
                    user: action.payload,
                    isFetching: false,
                    isError: false,
                }
            case 'REGISTER_USER_FAILURE':
                return {
                    user: null,
                    isFetching: false,
                    isError: true,
                }
        default:
            return{...state}
        }
}


export default AuthReducer;