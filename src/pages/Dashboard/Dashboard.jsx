import React, {useEffect} from 'react';
import Clipped from '../../Components/Clipped';
// import User from "../../Components/User";
// import imageSrc from '../../img/signup6.jpg';

const Dashboard= () => {

    const userData = JSON.parse(localStorage.getItem('UserData'))
    console.log(userData);
  
  return (
    <div>
      <Clipped/>
      {/* <User/> */}
    <h1 style={{ fontFamily: 'cursive' }}>Welcome {userData.fullName}</h1> 
      
    </div>
  );
};

export default Dashboard;
