import React from 'react';
import "./style/CreateUser.css";

const CreateUser = () => {
  return (
    <div className='createUser'>
        <h3 className="newUserTitle">Add New User</h3>
        <form className="newUserForm">
            <div className="newUserFormItem">
                <label>Username</label>
                <input type="text" placeholder='shakilmh626'/>
            </div>
            <div className="newUserFormItem">
                <label>Full Name</label>
                <input type="text" placeholder='Shakil Ahmed'/>
            </div>
            <div className="newUserFormItem">
                <label>Email</label>
                <input type="email" placeholder='shakillmh626@gmail.com'/>
            </div>
            <div className="newUserFormItem">
                <label>Password</label>
                <input type="password" placeholder='Password'/>
            </div>
            <div className="newUserFormItem">
                <label>Date of Birth</label>
                <input type="date"/>
            </div>
            <div className="newUserFormItem">
                <label>Phone</label>
                <input type="text" placeholder='+880 19555'/>
            </div>
            <div className="newUserFormItem">
                <label>Address</label>
                <input type="text" placeholder='Sherpur, 2100'/>
            </div>
            <div className="newUserFormItem">
                <label>Gender:</label>
                <div className="newUserGenderContainer">
                    <input type="radio" name='gender' id='male' value="male"/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name='gender' id='female' value="female"/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name='gender' id='custom' value="others"/>
                    <label htmlFor="custom">Others</label>
                </div>
            </div>
            <div className="newUserFormItem">
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="addUserButton">Create a User</button>
        </form>
    </div>
  )
}

export default CreateUser