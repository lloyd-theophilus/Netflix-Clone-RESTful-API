
//Accessing movies
export const getMoviesStart = () =>({
    type: 'GET_MOVIES_START',
})

export const getMoviesSuccess = (movies) =>({
    type: 'GET_MOVIES_SUCCESS',
    payload: movies
})


export const getMoviesFailuret = () =>({
    type: 'GET_MOVIES_FAILURE',
})


//Creating a movies
export const createMovieStart = () =>({
    type: 'CREATE_MOVIE_START',
})

export const createMovieSuccess = (movie) =>({
    type: 'CREATE_MOVIE_SUCCESS',
    payload: movie
})


export const createMovieFailuret = () =>({
    type: 'CREATE_MOVIE_FAILURE',
})




//Handling  movie deletion
export const deleteMovieStart = () =>({
    type: 'DELETE_MOVIES_START',
})

export const deleteMovieSuccess = (id) =>({
    type: 'DELETE_MOVIES_SUCCESS',
    payload: id
})


export const delereMovieFailuret = () =>({
    type: 'DELETE_MOVIES_FAILURE',
})