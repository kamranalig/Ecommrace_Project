import React from 'react';
import "./HeroSection.css"; 
const HeroSection = () => {
  return (
    <div className='container mt-5'>
      <div className='row hero_section'>
        <div className='col pt-4'>
          <h1 className='heading'>CUSTOMIZED PRINTED TEES</h1>
          <p>Nam at congue diam etiam erat lectus, finibus eget commodo quis, congue diam etiam erat lectus.</p>
          <button type="button" className="btn btn-outline-dark">EXPLORE STORE</button>
        </div>
        <div className='col'>
          <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2020/02/boy-t2.png" alt="hero section img" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection;