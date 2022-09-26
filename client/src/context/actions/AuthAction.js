export const loginStart = () =>({
    type: "LOGIN_START",
})

export const loginSuccess = (user) =>({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const loginFailure = () =>({
    type: "LOGIN_FAILURE",
})

// logout

export const logoutStart = () =>({
    type: "LOGOUT",
})


export const registerStart = () =>({
    type: "REGISTER_USER_START",
})

export const registerSuccess = (user) =>({
    type: "REGISTER_USER_SUCCESS",
    payload: user,
})

export const registerFailure = () =>({
    type: "REGISTER_USER_FAILURE",
})