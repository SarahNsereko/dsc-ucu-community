import React, {useEffect} from 'react';
import Clipped from '../../Components/Clipped';
// import User from "../../Components/User";
// import imageSrc from '../../img/signup6.jpg';
import './Dashboard.css';

const Dashboard= () => {

    const userData = JSON.parse(localStorage.getItem('UserData'))
    console.log(userData);
  
  return (
    <div>
      <Clipped/>
      {/* <User/> */}
      <div className="userhome">


    
    <h1 style={{ fontFamily: 'cursive' }}>Welcome {userData.fullName}</h1> 
    <p>Feel Free to navigate through the options on the left .Start exploring!</p>
    </div>
    </div>
  );
};

export default Dashboard;
