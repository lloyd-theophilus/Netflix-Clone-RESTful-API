import './newUser.css'

export default function newUser() {
    return (
        <div className = 'NewUser'>
            <h3 className="newUserTitle">New User</h3>
            <form className="newUserform">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder = 'Michael'/>
                </div>
                <div className="newUserItem">
                    <label>Fullname</label>
                    <input type="text" placeholder = 'Michael King'/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder = 'michaelking@gmail.com'/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder = 'password'/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder = 'Enter phone number'/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder = 'Independence Avenue, ST56, Accra'/>
                </div>
                <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name= 'Gender' id = 'male' value = 'male' />
                    <label for="male">Male</label>
                    <input type="radio" name= 'Gender' id = 'female' value = 'female' />
                    <label for="femail">Female</label>
                    <input type="radio" name= 'Gender' id = 'other' value = 'other' />
                    <label for="other">Other</label>
                </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
