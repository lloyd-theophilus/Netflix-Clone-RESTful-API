//Creating a context API for three different actions
export const loginStart = () =>({
    type: 'LOGIN_START',
})

//If the login is successful, it will return a user
export const loginSuccess = (user) =>({
    type: 'LOGIN_SUCCESS',
    payload: user
})

export const loginFailure = () =>({
    type: 'LOGIN_FAILURE',
})



//Creating a context API for three different actions
export const logout = () =>({
    type: 'LOGOUT',
})
