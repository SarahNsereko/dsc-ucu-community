import React from 'react';
import Clipped from '../../Components/Clipped'

 
const Profile = () => {

  return (
    <div>
<Clipped/>
<h1 style={styles.welcomeText}>Welcome</h1>
    </div>
  );
};

const styles = {
  welcomeText: {
    fontFamily: ' cursive', // Replace 'YourCustomFont' with the name of the custom font you want to use
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadow: '2px 2px #000000',
  },
};

export default Profile;
