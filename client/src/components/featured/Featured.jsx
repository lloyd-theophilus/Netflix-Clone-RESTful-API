import './featured.scss'
import {PlayArrow, InfoOutlined} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Featured({ type }) {
    //Getting a random content on the home page
    const [content, setContent] = useState({})
    useEffect(()=>{
        const getRandomContent = async() =>{
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    //Adding a webToken for authentication
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzZhYTVkZWE4OWFkZjhlYWJlODMwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTE0OTQzMCwiZXhwIjoxNjQxNTgxNDMwfQ.YQAXIwlzGw4bgduoWqcw2e6P6o9KGdmxAXbpCjpUY3s'
                    }
                })
                setContent(res.data[0])
            } catch (error) {
                console.log(error)
            }
        }
        getRandomContent()
    }, [type])
    return (
        <div className='featured'>
            
            {type && (
                <div className="category">
                    <span>{type ==='movies' ? 'Movies' : 'Series'}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value='adventure'>Adventure</option>
                        <option value='comedy'>Comedy</option>
                        <option value='crime'>Crime</option>
                        <option value='fantasy'>Fantasy</option>
                        <option value='historical'>Historical</option>
                        <option value='horror'>Horror</option>
                        <option  value='romance'>Romance</option>
                        <option value='sci-fi'>Sci-fi</option>
                        <option value='thriller'>Thriller</option>
                        <option value='western'>Western</option>
                        <option value='animation'>Animation</option>
                        <option value='drama'>Drama</option>
                        <option value='documentary'>Documentary</option>
                    </select>
                </div>
            )}
           <img width= '100%' className='background' src={content.img} alt="" />
          <div className="info">
          <img src={content.imgTitle} alt="" />
          <span className='desc'>
                {content.desc}
          </span>
          <div className="buttons">
              <button className='play'>
                  <PlayArrow/>
                  <span>Play</span>
              </button>
              <button className='more'>
                  <InfoOutlined/>
                  <span>Info</span>
              </button>
          </div>
         </div> 
        </div>
    )
}
