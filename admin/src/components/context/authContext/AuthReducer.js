//Creating a reducer that will take our actions and update the context state
const AuthReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN_START':
            return {
                //This is the initial state 
                user: null,
                isFetching: true,
                error: false,
            }
            case 'LOGIN_SUCCESST':
                return {
                    //This is the initial state 
                    user: action.payload,
                    isFetching: false,
                    error: false,
                }
                case 'LOGIN_FAILURE':
                    return {
                        //This is the initial state 
                        user: null,
                        isFetching: false,
                        error: true,
                    }

                    case 'LOGOUT':
                        return {
                            //This is the initial state 
                            user: null,
                            isFetching: false,
                            error: false,
                        }
                    default:
                        return {...state}
                }
            }

export default AuthReducer