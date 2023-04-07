import React from 'react';
import Clipped from '../../Components/Clipped';
import './Activities.css';

const Activities= () => {
  // Component logic here

  return (
    // JSX markup here
    <div>
     <Clipped/>
     <h1>Activities</h1>
     <div className="grid-containerb">
      <div className="grid-itemb">
    <h2>Workshops and Training Sessions </h2>    
<p>  GDSCs often conduct workshops and training sessions on various topics such as web development, mobile app development, machine learning, cloud computing, and more. These sessions are typically led by experienced students or invited industry experts and provide opportunities to learn new skills and technologies.</p>
      </div>
      <div className="grid-itemb">
        <h2>Hackathons and Coding Challenges</h2>
<p> GDSCs may organize hackathons or coding challenges, where students can participate individually or in teams to build innovative projects within a specified time frame. These events promote collaboration, creativity, and problem-solving skills.</p>
      </div>
      <div className="grid-itemb">
        <h2>Tech Talks and Guest Lectures</h2>
<p>GDSCs may invite guest speakers from the industry to give talks on trending technologies, share their experiences, and provide insights into the tech industry. These sessions offer valuable knowledge and inspiration for students.</p>
      </div>
      <div className="grid-itemb">
<h2>Networking and Career Development</h2>
<p> GDSCs may organize networking events, career fairs, or mentorship programs to connect students with professionals in the tech industry. These activities can help students build their professional network, gain insights into career opportunities, and enhance their employability.</p>
      </div>
      <div className="grid-itemb">
        <h2>Social and Fun Activities </h2>
<p> GDSCs may also organize social and fun activities such as game nights, coding challenges, hackathons, or coding competitions to build a sense of camaraderie among members and foster a supportive community.</p>
      </div>
      <div className="grid-itemb">
        <h2>Community</h2>
<p> GDSCs often collaborate on community projects to build applications, websites, or tools that address real-world problems. These projects provide an opportunity to work in a team, gain practical experience, and make a positive impact on the local community.</p>
      </div>
    </div>
    </div>
  );
};

export default Activities;
