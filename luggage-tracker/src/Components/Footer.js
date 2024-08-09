import React from 'react'
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import Linkedin from '@mui/icons-material/LinkedIn'

function Footer() {
  return (
    <div className="footer">
      <span className="text-muted">© 2024 Practice Project. All rights reserved.</span>
      <div>
        <a href="/privacy-policy">Privacy Policy</a> |
        <a href="/terms-of-service">Terms of Service</a>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/unnatibhalekar/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
        <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </div>
      <div className="contact-info">
        <p>Contact us: <a href="mailto:unnatibhalekar12345@gmail.com">unnatibhalekar12345@gmail.com</a></p>
      </div>
    </div>
  )
}

export default Footer