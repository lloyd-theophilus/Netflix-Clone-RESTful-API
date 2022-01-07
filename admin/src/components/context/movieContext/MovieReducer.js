//Creating a reducer that will take our actions and update the context state
const MovieReducer = (state, action) => {
    switch (action.type){
        case 'GET_MOVIES_START':
            return {
                //This is the initial state 
                movies: [],
                isFetching: true,
                error: false,
            }
            case 'GET_MOVIES_SUCCESST':
                return {
                    //This is the initial state 
                    movies: action.payload,
                    isFetching: false,
                    error: false, 
                }
                case 'GET_MOVIES_FAILURE':
                    return {
                        //This is the initial state 
                        movies: [],
                        isFetching: false,
                        error: true,
                    }


                    case 'CREATE_MOVIE_START':
            return {
                //This is the initial state 
                ...state,
                isFetching: true,
                error: false,
            }
            case 'CREATE_MOVIE_SUCCESST':
                return {
                    //This is the initial state 
                    movies: [...state.movies, action.payload],
                    isFetching: false,
                    error: false, 
                }
                case 'CREATE_MOVIE_FAILURE':
                    return {
                        //This is the initial state 
                        ...state,
                        isFetching: false,
                        error: true,
                    }


                case 'DELETE_MOVIES_START':
            return {
                //This is the initial state 
                ...state,
                isFetching: true,
                error: false,
            }
            case 'DELETE_MOVIES_SUCCESST':
                return {
                    //This is the initial state 
                    movies: state.movies.filter((movie) => movie._id !== action.payload),
                    isFetching: false,
                    error: false, 
                }
                case 'GET_MOVIES_FAILURE':
                    return {
                        //This is the initial state 
                        ...state,
                        isFetching: false,
                        error: true,
                    }

                    default:
                        return {...state}
                }
            }

export default MovieReducer