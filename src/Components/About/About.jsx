import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" width={300}/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a passionate learner, a dedicated and detail-oriented backend developer with a passion for creating efficient, rebust, scalable and efficient web application using backend technologies,</p>
                        <p>I am currently pursuing my BE from LDRP Institute of Technology and Research in Gandhinagar specialisation in Computer Engineering.</p>
                        <p>My passion for development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project and constantly seekig new avenues to improve both my personal and professional abilities.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"58%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{width:"75%"}}/></div>
                        <div className="about-skill"><p>Node JS</p> <hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>JAVA</p> <hr style={{width:"58%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Intern</h1>
                    <p>CodeSoft</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Learning New</h1>
                    <p>Technologies</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Passionate</h1>
                    <p>Student</p>
                </div>
            </div>
            
            
        </div>
)
}

export default About