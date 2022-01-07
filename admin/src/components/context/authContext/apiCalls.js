import axios from 'axios'
import { loginFailure, loginSuccess, loginStart } from './AuthAction'

//Creating an apiCall for user login and importing our AuthActions
export const login = async(user, dispatch) => {
    dispatch(loginStart())
    try {
        const res = await axios.post('auth/login', user)
        //If login is successful, then we can go to the admin dashboard
        res.data.isAdmin && dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}