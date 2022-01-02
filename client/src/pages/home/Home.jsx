import './home.scss'
import { Navbar } from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home({type}) {
    /*Using a usestate to fetch a list of movies from API route (axios)*/
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? '?type' + type: ''}${genre ? '&genre' + genre: ''}`, {
                        //Adding a webToken for authentication
                        headers: {
                            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzZhYTVkZWE4OWFkZjhlYWJlODMwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTE0OTQzMCwiZXhwIjoxNjQxNTgxNDMwfQ.YQAXIwlzGw4bgduoWqcw2e6P6o9KGdmxAXbpCjpUY3s'
                        }
                    }
                    )
                    setLists(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getRandomLists()
    },
    [type, genre]
    )
    return (
        <div className='home'>
            <Navbar/>
            <Featured type={type}/>
            {lists.map(list=>{
                <List list={list}/>
            })}
            
        </div>
    )
}
