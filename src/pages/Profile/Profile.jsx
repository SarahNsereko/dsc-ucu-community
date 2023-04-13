import React from 'react';
import Clipped from '../../Components/Clipped'
import './Profile.css';
 
const Profile = () => {

  const userData = JSON.parse(localStorage.getItem('UserData'))
  console.log(userData);
  return (
    <div>
<Clipped/>
<div className='profiletab'>
<h1 >Your Profile</h1>
<div class="parent-container">
  <div class="round-image"></div>
</div>

 <p><b>Name:</b> {userData.fullName}</p>
 <p><b>Email:</b> {userData.email}</p>
 <p><b>Phone:</b> {userData.phone}</p>
 </div>
    </div>
  );
};




export default Profile;
