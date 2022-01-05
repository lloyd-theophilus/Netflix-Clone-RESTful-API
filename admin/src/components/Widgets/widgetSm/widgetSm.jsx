import './widgetSm.css'
import {Visibility} from '@material-ui/icons';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([])
    useEffect(()=>{
        const getNewUsers = async () =>{
            //Sorting new users
            try {
                const res = await axios.get('/users?new=true', {
                    headers: {
                    token:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzZhYTVkZWE4OWFkZjhlYWJlODMwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTE0OTQzMCwiZXhwIjoxNjQxNTgxNDMwfQ.YQAXIwlzGw4bgduoWqcw2e6P6o9KGdmxAXbpCjpUY3s' 
                },
            }) 
              setNewUsers(res.data)
            } catch (error) {
                console.log(error)      
            }
        }
        getNewUsers()
    }, [])

    return (
        <div className = 'WidgetSm'>
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
               {newUsers.map((user) => (
                    //mapping and displaying new user
                <li className="widgetSmListItem">
                    <img src = {user.profilePic || 'data:image/jpeg;base64,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'} ait= 'User Image' className="wedgetSmImg"></img>
                    <div className="wedgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className = 'widgetSmIcon'/>
                        Display
                    </button>
                </li>
                 ))}
            </ul>
        </div>
    )
}
