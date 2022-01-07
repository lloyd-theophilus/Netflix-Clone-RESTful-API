import { delereMovieFailuret,
     deleteMovieStart, 
     deleteMovieSuccess, 
     getMoviesFailuret, 
     getMoviesStart, 
     getMoviesSuccess,
     createMovieSuccess,
     createMovieStart,
     createMovieFailuret
     } from "./MovieAction"
import axios from 'axios'

export const getMovies = async(dispatch) => {
   dispatch(getMoviesStart())

    try {
        //Generating an access token for user sign in to access movies
        const res = await axios.get('/movies', {
            headers: {
                token: 'Bearer' + JSON.parse(localStorage.getItem('user')).accessToken,
            }
        })
        dispatch(getMoviesSuccess(res.data))
    } catch (error) {
      dispatch(getMoviesFailuret())
    }
}


export const deleteMovie = async(id, dispatch) => {
    dispatch(deleteMovieStart())
 
     try {
         //Generating an access token for user sign in to access movies
        await axios.delete('/movies' + id, {
             headers: {
                 token: 'Bearer' + JSON.parse(localStorage.getItem('user')).accessToken,
             }
         })
         dispatch(deleteMovieSuccess(id))
     } catch (error) {
       dispatch(delereMovieFailuret())
     }
 }



 export const createMovie = async(movie, dispatch) => {
    dispatch(createMovieStart())
 
     try {
         //Generating an access token for user sign in to access movies
       const res = await axios.post('/movies', movie, {
             headers: {
                 token: 'Bearer' + JSON.parse(localStorage.getItem('user')).accessToken,
             }
         })
         dispatch(createMovieSuccess(res.data))
     } catch (error) {
       dispatch(createMovieFailuret())
     }
 }