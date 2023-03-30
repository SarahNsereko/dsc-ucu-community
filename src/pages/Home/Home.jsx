import React from "react";
import { Link } from "react-router-dom";
import BasicButtonGroup from "../../Components/signup_login_buttons";

function Home() {
    
  return (
    <div>
      <div>
    <h1 className="Welcomeword">Welcome to the UCU Google Student Developer's Club</h1>
    {/* <Link to='/login' >LOGIN</Link> */}
      </div>

    <div className="Homepagepic">
    <img src="src/img/Together5.jpg"/>
    </div>

    <div className="Aboutgrid">
    <div className="grid-item">
      <h2>About Us</h2>
      <p>Google Developer Student Clubs (DSCs) are community groups for university and college students interested in learning about Google technologies and developer tools. These clubs are open to any student, regardless of their academic background or major.</p>
    </div>
      <div className="grid-item">
       <h2>World Class Mentors</h2> 
       <p>Our Mentors are typically experienced professionals in the field of technology, and can offer valuable insights and expertise to students who are just starting out. DSCs are present in universities and colleges all around the world and are a great way for students to connect with like-minded individuals, learn new skills, and make an impact in their communities through technology.</p>
        </div>
      <div className="grid-item">
        <h2>Developer growth</h2>
        <p>Google Student Developer Programs provide opportunities for students to connect with other students, mentors, and professionals in the industry. These connections can help students learn about different career paths, gain valuable advice and insights, and even secure internships or job opportunities.</p>
        </div>
        <div className="grid-item">
          <h2>Want to join us?</h2>
          <p>Take the first steps to joining a world winning team .If you havent registerd yet clik sign up .If you already have an account login</p>
          <div className="signupandlogin">
            <BasicButtonGroup/>
          </div>
        </div>

   </div>
</div>
 
  );
}

export default Home;