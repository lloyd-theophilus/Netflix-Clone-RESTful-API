import './Sidebar.css'
import {LineStyle, Timeline,TrendingUp, PermIdentity, PlayCircleOutline, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, BusinessCenter, Error} from '@material-ui/icons'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    return (
        <div className = 'sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                    <Link to ='/Home' className='link'>
                    <li className="sidebarListItems active">
                        <LineStyle className = 'sidebarIcon'/>
                        Home
                        </li>
                    </Link>
            
                        <li className="sidebarListItems">
                        <Timeline className = 'sidebarIcon' />
                        Analytics
                        </li>
                        <li className="sidebarListItems">
                        <TrendingUp className = 'sidebarIcon' />
                        Sales
                        </li>
                    </ul> 
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">

                    <Link to ='/users' className='link'>
                    <li className="sidebarListItems">
                        <PermIdentity className = 'sidebarIcon'/>
                        Users
                        </li>
                    </Link>

                    <Link to ='/movies' className='link'>
                    <li className="sidebarListItems">
                        <PlayCircleOutline className = 'sidebarIcon' />
                        Movies
                        </li>
                    </Link>
                       
                    <Link to ='/transactions' className='link'>
                    <li className="sidebarListItems">
                        <AttachMoney className = 'sidebarIcon' />
                        Trnsactions
                        </li>
                    </Link>

                    <Link to ='/reports' className='link'>
                    <li className="sidebarListItems">
                        <BarChart className = 'sidebarIcon' />
                        Reports
                        </li>
                    </Link>      
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                    <Link to ='/mail' className='link'>
                    <li className="sidebarListItems">
                        <MailOutline className = 'sidebarIcon'/>
                        Mail
                        </li>
                    </Link>
                        
                    <Link to ='/feedback' className='link'>
                    <li className="sidebarListItems">
                        <DynamicFeed className = 'sidebarIcon' />
                        Feedback
                        </li>
                    </Link>
                        
                    <Link to ='/messages' className='link'>
                    <li className="sidebarListItems">
                        <ChatBubbleOutline className = 'sidebarIcon' />
                        Messages
                        </li>
                    </Link>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                    <Link to ='/manage' className='link'>
                    <li className="sidebarListItems">
                        <BusinessCenter className = 'sidebarIcon'/>
                        Manage
                        </li>
                    </Link>
                    <Link to ='/analytics' className='link'>
                    <li className="sidebarListItems">
                        <Timeline className = 'sidebarIcon' />
                        Analytics
                        </li>
                    </Link>
                    <Link to ='/report' className='link'>
                    <li className="sidebarListItems">
                        <Error className = 'sidebarIcon' />
                        Report
                        </li>
                    </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
