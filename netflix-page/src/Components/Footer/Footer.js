import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css"
function Footer() {
  return (
    <div className='footer-outer-container'>
        <div className='footer-inner-container'>
            <div className='footer-icons'>
                <FacebookIcon />
                <InstagramIcon />
                <YouTubeIcon />

            </div>
            <div className='footer-data'>
                <div>
                    <ul>
                        <li>Audio Description</li>
                        <li>Investor Relations</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Help Center</li>
                        <li>JObs</li>
                        <li>Cookie Preferences</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Gift Cards</li>
                        <li>Terms of Use</li>
                        <li>Corporate Informations</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Media Center</li>
                        <li>Privacy</li>
                        <li>Contact Use</li>
                    </ul>
                </div>

            </div>
            <div className='service-code'>
                <p>Service Code</p>

            </div>
            <div className='copy-write'>
                &copy; 1997-2024 Netflix, Inc.
           </div>

        </div>
      
    </div>
  )
}export default Footer;
