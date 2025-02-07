import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profile} alt="" width={300}/>
            <h1><span>I'm Smit Movadiya,</span> Backend Developer based in INDIA</h1>
            <p>I fell in love with programming and I have at least learnt something, I think…🤷‍♂️ I'm skilled in Backend technologies like Node.js, Express, and MongoDB</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero