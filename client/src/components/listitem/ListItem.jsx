import  './listitem.scss'
import {PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined} from '@material-ui/icons';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListItem(index, item) {
    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState({})
    useEffect(()=>{
        const getMovie = async () =>{
            //Fetching movies data
            try {
                const res = await axios.get('/movies/find' + item, {
                    //Adding a webToken for authentication
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzZhYTVkZWE4OWFkZjhlYWJlODMwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTE0OTQzMCwiZXhwIjoxNjQxNTgxNDMwfQ.YQAXIwlzGw4bgduoWqcw2e6P6o9KGdmxAXbpCjpUY3s'
                    },
                })
                setMovie(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMovie()
    }, [item])
   
    return (
        //Link to the movie watch page
        <Link to={{pathname:'/watch', movie:movie}}>
        <div>
            <div className="listItem" 
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
            onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>

            <img src={movie.img} alt=""/>

            {isHovered &&(
                <> 
                 <video src = {movie.trailer} autoPlay={true} loop/>
       
            <div className="iteminfo">
                <div className="icons">
                    <PlayArrow className='icon'/>
                    <Add  className='icon'/>
                    <ThumbUpAltOutlined  className='icon'/>
                    <ThumbDownOutlined  className='icon'/>
                </div>
                <div className="itemInfoTop">
                    <span>{movie.duration}</span>
                    <span className='limit'>+{movie.limit}</span> 
                    <span>{movie.year}</span>
                </div>
                <div className="desc">
                    {movie.desc}
                </div>
                <div className="genre">{movie.genre}</div>
            </div></>
             )}
            </div>
        </div>
        </Link> 
    )
}
