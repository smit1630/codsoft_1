import React from 'react'
import './Footer.css'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import footer_logo from '../../assets/footer_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" width={200} />
                    <p>I am a Backend developer from INDIA and specializing in web and software development.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
                <div className="footer-social">
                    <div className="social-link">
                        <a href="https://x.com/being_smovadiya" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/smit-movadiya-8339482a2p" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/smit1630" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <p className="footer-bottom-left">© 2024 Smit Movadiya. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
