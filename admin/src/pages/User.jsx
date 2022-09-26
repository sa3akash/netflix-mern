import React, {useState} from 'react';
import "./style/User.css";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
import { Link } from 'react-router-dom';


const User = () => {
    const [inputData, setInputData] = useState({
        username: '',
        fullname: '',
        email: '',
        phone: '',
        date: '',
        address: ''
    })

    const hangleInputChange = (e) =>{
        setInputData(prev=> ({...prev, [e.target.name]: e.target.value}))
    }
    const handleUpdateSubmit = (e) =>{
        e.preventDefault();
        console.log(inputData);
    }
  return (
    <div className='user'>
        <div className="userHeader">
            <h3>Edit User</h3>
            <Link to="/users/create">
                <button>Add User</button>
            </Link>
        </div>
        <div className="userContainerShow">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg" alt="avater" />
                    <div className="userShowTitleTop">
                        <span>anna k</span>
                        <span>software engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="ShowBottomTitle">Account details</span>
                    <div className="userShowBottomInfo">
                        <PermIdentity />
                        <span>annak99</span>
                    </div>
                    <div className="userShowBottomInfo">
                        <CalendarToday />
                        <span>28-09-2003</span>
                    </div>
                    <span className="ShowBottomTitle">contact details</span>
                    <div className="userShowBottomInfo">
                        <PhoneAndroid />
                        <span>+8801 950145</span>
                    </div>
                    <div className="userShowBottomInfo">
                        <MailOutline />
                        <span>annak99@gmail.com</span>
                    </div>
                    <div className="userShowBottomInfo">
                        <LocationSearching />
                        <span className="cityName">sherpur, 2100</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className='userUpdateTitle'>Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder='annak99' name="username" onChange={hangleInputChange}/>
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="fname">Full Name</label>
                            <input type="text" id="fname" placeholder='Anna K' name="fullname" onChange={hangleInputChange}/>
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder='annak99@gmail.com' name="email" onChange={hangleInputChange}/>
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" placeholder='annak99@gmail.com' name="date" onChange={hangleInputChange}/>
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" placeholder='+880 1955-44' name="phone" onChange={hangleInputChange}/>
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" placeholder='Sherpur, 2100' name="address" onChange={hangleInputChange}/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg" alt="avater" />
                            <label htmlFor="publishFile"><Publish/></label>
                            <input type="file" name="" id="publishFile" style={{display: "none"}}/>
                        </div>
                        <button disabled={false} onClick={handleUpdateSubmit}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User;