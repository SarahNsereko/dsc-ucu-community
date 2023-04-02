import React, { useState } from 'react';
import { Link } from "react-router-dom";
import BasicButtonGroup from "../../Components/Homepagebuttons";
import './Home.css'
import  Slider from '../../Components/Slider'
import Homeimages from '../../Components/Homeimages'



function Home() {
  return (
    <div>
      <div>
        <h1 className="Welcomeword">Welcome to the UCU Google Student Developer's Club</h1>
      </div>
      <div className="Homepagepic">
      <Homeimages/>
      </div>
      <div>  <Slider/></div>
    
      <div className="Homegrid">
        <div className="grid-item">
          <h2>Want to join us?</h2>
          <p>Take the first steps to joining a world winning team. If you haven't registered yet, click "Sign up". Let's get to know you!</p>
          <div>
            <BasicButtonGroup path='/signup' buttonLabel='Signup' />
          </div>
        </div>
        <div className="grid-item">
          <h2>Already a member?</h2>
          <p>Welcome back! Login to access exclusive resources, connect with fellow members, and take part in exciting events.</p>
          <div>
            <BasicButtonGroup path='/login' buttonLabel='Login' />
          </div>
        </div>

        <div className="grid-item">
          <h2>Not yet convinced?</h2>
          <p>It's okay to be scared of taking the first steps but once you hear what community members from around the globe are saying ,maybe you'll change your mind</p>
                    <div>
                    <BasicButtonGroup path='https://www.youtube.com/watch?v=UGE13GR9_CU&t=1s' buttonLabel='Watch Video' />
                        </div>

</div>
      </div>
    </div>
  );
}

export default Home;
