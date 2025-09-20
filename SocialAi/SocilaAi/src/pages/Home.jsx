import React from 'react'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';


import AdjustIcon from '@mui/icons-material/Adjust';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ImageIcon from '@mui/icons-material/Image';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const SocialMediaLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon-link">
    {children}
  </a>
);



const Home = () => {
  return (
    <>
    <header className='home-hedder'>
      <p className='mine-heading'>Al-Powered Content Creation</p>
      <h1 className='main-heading'>Generate & Post <span class="gradient-text">Social</span>  <span class="gradient-text">Content</span> Instantly</h1>
      <h2 className='main-contant'>Create platform-optimized captions and images with AI, 
        then automatically post to Instagram, Facebook, LinkedIn, X and  Pinterest. 
        Save hours of work while boosting engagement.</h2>
      
      <div className='main-buttons'>
      <Link to="/login" >
      <button>Start Creating Free</button>
      </Link>
      <button>Watch Demo</button>
      </div>
      <div className='socila-media-apps'>
        <div className='apps'>
        <InstagramIcon style={{ fontSize: "35px" }}/>
        </div>
        <div className='apps'>
        <LinkedInIcon style={{ fontSize: "35px" }}/>
        </div>
        <div className='apps'>
        <XIcon style={{ fontSize: "35px" }}/>
        </div>
        <div className='apps'>
        <FacebookIcon style={{ fontSize: "35px" }}/>
        </div>
      </div>
    </header>


    <section className='needs-social'>
      <h1>Everything You Need for Social Success</h1>
      <p>Powerful Al tools designed for modern content creators</p>

      <div className='features-grid'>
        <div className='card'>
          <AdjustIcon style={{ color: "#A259FF" , fontSize: "40px" }}/>
        <h3>Platform Optimization</h3>
        <p>AI automatically adapts content for each platform's best practices and audience preferences.</p>
        </div>
        <div className='card'>
          <AutoAwesomeIcon style={{ color: "#3A82F7" , fontSize: "40px"}}/>
        <h3>AI Content Generation</h3>
        <p>Generate engaging captions and stunning images using advanced AI models trained on viral content.</p>
        </div>
        <div className='card'>
          <AccessTimeIcon style={{ color: "#0ABF53", fontSize: "40px" }}/>
        <h3>Auto-Posting</h3>
        <p>Schedule and automatically post to multiple platforms simultaneously with optimal timing.</p>
        </div>
        <div className='card'>
        <ImageIcon style={{ color: "#EA4C89" , fontSize: "40px"}}/>
        <h3>AI Image Generation</h3>
        <p>Create visually appealing, high-quality images tailored for social media using AI-powered tools. </p>
        </div>
        <div className='card'>
          <SyncAltIcon style={{ color: "#A259FF", fontSize: "40px" }}/>
        <h3>Multi-Platform Support</h3>
        <p>Native integrations with Instagram, LinkedIn, Twitter/X, and more platforms coming soon.</p>
        </div>
      </div>
    </section>
    <section className='ready-to-go'>
      <h2>Ready to Transform Your Social Media?</h2>
      <p>Join thousands of creators and brands already using SocialAl to grow their audience</p>
      <Link to="/login">
      <button>Start Your Free Trial</button>
      </Link>
    </section>
    <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h1 className="title">Get in touch</h1>
            <p className="subtitle">Fill in the form to start a conversation</p>
            <div className="info-list">
              <p className="info-item">
                <span className="icon">📍</span> City Visakhapatnam, Rushikonda -530045 </p>
              <p className="info-item">
                <span className="icon">📞</span> 1234567890
              </p>
              <p className="info-item">
                <span className="icon">📧</span> contact@business.com
              </p>
              <div className="social-media">
            <h2 className="social-media-title">Follow Us</h2>
            <p className="social-media-description">
              Connect with us on social media!
            </p>
            <div className="social-media-links">
            <SocialMediaLink href="https://www.instagram.com/"> <InstagramIcon fontSize="large" /> </SocialMediaLink>
              <SocialMediaLink href="https://www.youtube.com"><YouTubeIcon fontSize='large'/></SocialMediaLink>
              <SocialMediaLink href="https://www.whatsapp.com"><WhatsAppIcon fontSize='large'/></SocialMediaLink>
              <SocialMediaLink href="https://www.facebook.com"><FacebookIcon fontSize='large'/></SocialMediaLink>
              <SocialMediaLink href="https://www.twitter.com/"><XIcon fontSize='large'/></SocialMediaLink>
            </div>
          </div>
            </div>
          </div>
          <form className="contact-form" >
            <div>
              <h2 className="contact-heading">Get In Touch With Us!</h2>
              <p className="contact-heading1">
                Thank you for choosing SocialAi ! Please share some details about
                your business needs to help us assist you better. We’ll get back
                to you within 48 hours.
              </p>
            </div>
            <label>
              <span>Full name</span>
              <input  type="text" name="Name" placeholder="Name" />
            </label>
            <label>
              <span>Email address</span>
              <input  type="email" name="email" placeholder="sample@gmail.com"  />
            </label>
            <label>
              <span>Message</span>
              <textarea rows="3" name="message" placeholder="Your message"  ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <footer className="footer">
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-section">
          <h2 className="footer-title">About Us</h2>
          <p className="footer-text">
          Create platform-optimized captions and images with AI, then automatically post to Instagram, Facebook, LinkedIn, X and Pinterest. Save hours of work while boosting engagement.
          </p>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/" className="link">Services</Link></li> 
          <li><Link to="/" className="link">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Follow Us</h2>
          <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-group">
              <FacebookIcon style={{ color: '#3b5998' }} />
              <span>Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-group">
              <XIcon style={{ color: '#1DA1F2' }} />
              <span>Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-group">
              <InstagramIcon style={{ color: '#E4405F' }} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
      © 2025 M Balaji Reddy. All Rights Reserved.
      </div>
    </footer>
    </>
  )
}

export default Home
