import './user.css';
import {PermIdentity, PhoneIphone, Event, MailOutline, Room, Publish} from '@material-ui/icons'
import { Link } from 'react-router-dom';
export default function user() {
    return (
        <div className = 'User'>
            <div className="userTitleContainer">
                <h3 className="userTitle">Edit User</h3>
                <Link to = {'/newUser'}>
                <button className="userAddButton">Create</button>
               </Link>
               
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://media.istockphoto.com/photos/contemporary-african-man-smiling-on-blue-picture-id1181396797?k=20&m=1181396797&s=612x612&w=0&h=qH_DvWy6MZzTPanIBeQ6de6oP4d4cvYxdCL0ZgqjiVI=" alt="" className="userProfile" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Dominc King</span>
                            <span className="userShowJobTitle">UI/UX Designer</span>
                        </div>
                    </div>
                    <div className="userShowButton">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className = 'userShowIcon'/>
                        <span className="userShowTitle">DK_09</span>
                        </div>

                        <div className="userShowInfo">
                        <Event className = 'userShowIcon'/>
                        <span className="userShowTitle">14 - 12 - 1990</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneIphone className = 'userShowIcon'/>
                        <span className="userShowTitle">+233(0)5538572409</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutline className = 'userShowIcon'/>
                        <span className="userShowTitle">DK_09@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <Room className = 'userShowIcon'/>
                        <span className="userShowTitle">Accra | Ghana</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder = 'DK_09' className = 'userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Fullname</label>
                            <input type="text" placeholder = 'Dominic King' className = 'userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder = 'DK_09@gmail.com' className = 'userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder = '+233(0)5538572409' className = 'userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://media.istockphoto.com/photos/contemporary-african-man-smiling-on-blue-picture-id1181396797?k=20&m=1181396797&s=612x612&w=0&h=qH_DvWy6MZzTPanIBeQ6de6oP4d4cvYxdCL0ZgqjiVI=" alt="" className="userUpdateImg" />
                            <label htmlFor="file"><Publish className='userUploadIcon'/></label>
                            <input type="file" id='file' style = {{display: 'none'}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
                </div>
            </div>
            
        </div>
    )
}
