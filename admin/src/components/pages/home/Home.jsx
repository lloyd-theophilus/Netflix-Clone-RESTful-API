import Charts from '../../charts/Charts'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './Home.css'
import { Userdata } from '../../userData'
import WidgetLg from '../../Widgets/widgetLg/widgetLg'
import WidgetSm from '../../Widgets/widgetSm/widgetSm'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Home() {
    const MONTHS = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]

    const [userStats, setUserStats] = useState([])

    useEffect(()=>{
        const getStats = async () =>{
            try {
                const res = await axios.get('/users/stats', {
                    headers: {
                    token:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzZhYTVkZWE4OWFkZjhlYWJlODMwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTE0OTQzMCwiZXhwIjoxNjQxNTgxNDMwfQ.YQAXIwlzGw4bgduoWqcw2e6P6o9KGdmxAXbpCjpUY3s' 
                },
            }) 
            //Sroting the user data
            const statsList = res.data.sort(function (a, b){
                return a._id - b._id
            })
            statsList.map(item=>setUserStats(prev=>[...prev, {name:MONTHS[item._id-1], 'New User': item.total}]))
            } catch (error) {
                console.log(error)      
            }
        }
        getStats()
    }, [MONTHS])


    return (
        <div className = 'home'>
            <FeaturedInfo/>
            <Charts data = {userStats} 
            title = 'User Analytics'
             grid 
             dataKey='New User'
             />

            <div className="homewidget">
            <WidgetSm/>
            <WidgetLg/>
            </div>
        </div>
    )
}
