import './Slider.css';
import React, { useState } from 'react';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handlePrevClick = () => {
      setActiveIndex(activeIndex === 0 ? 2 : activeIndex - 1);
    };
  
    const handleNextClick = () => {
      setActiveIndex(activeIndex === 2 ? 0 : activeIndex + 1);
    };
  
    const slides = [
      {
        title: 'About Us',
        description: 'Google Developer Student Clubs (GDSC) is a program initiated by Google to provide students with an opportunity to learn more about Google technologies and developer tools. GDSC was first launched in 2017 as a pilot program in India, and has since then expanded to over 100 countries including Uganda.GDSC events and activities are organized by student volunteers who are passionate about technology and want to make an impact in their communities. The program provides resources and support to help students plan and host events, workshops, hackathons, and other activities that promote learning and collaboration.'
      },
      {
        title: 'World Class Mentors',
        description: 'Our Mentors are experienced professionals in the field of technology, and can offer valuable insights and expertise to students who are just starting out. The mentors come from a diverse range of backgrounds and bring a variety of skills and perspectives to the table. They help students to develop their skills and navigate the complex world of technology, providing valuable insights and advice along the way.'
      },
      {
        title: 'Developer Growth',
        description: 'Google Student Developer Programs provide opportunities for students to connect with other students, mentors, and professionals in the industry. These connections can help students learn about different career paths, gain valuable advice and insights, and even secure internships or job opportunities.This community can provide you with opportunities to network, collaborate, and share ideas with others who are passionate about technology. You can learn from your peers and gain new perspectives on the industry'
      }
    ];
  
    return (
      <div className="slider-section">
        <div className="carousel-container">
          <div className="carousel__slide active">
            <h2>{slides[activeIndex].title}</h2>
            <p>{slides[activeIndex].description}</p>
          </div>
        </div>
        <div className="carousel-controls">
          <button className="carousel-control prev" onClick={handlePrevClick}>
            Prev
          </button>
          <button className="carousel-control next" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    );
  };


  export  default Carousel;