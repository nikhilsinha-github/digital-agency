import React from 'react'
import '../styles/footer.css'
import FooterImage from '../assets/footer_image.png';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_upper_section">
        <img src={FooterImage} alt="" />
        <div className="footer_options">
          <div className="options_heading">
            <h4>Workflows</h4>
            <ul>
              <li>Market analysis</li>
              <li>On Page SEO</li>
              <li>Keyword analysis</li>
              <li>Email Marketing</li>
            </ul>
          </div>
          <div className="options_heading">
            <h4>Useful Links</h4>
            <ul>
              <li>Market analysis</li>
              <li>Market analysis</li>
              <li>Market analysis</li>
              <li>Market analysis</li>
            </ul>
          </div>
          <div className="options_heading">
            <h4>Company</h4>
            <ul>
              <li>Market analysis</li>
              <li>Market analysis</li>
              <li>Market analysis</li>
              <li>Market analysis</li>
            </ul>
          </div>
          <div className="options_heading">
            <h4>Subscribe</h4>
            <ul>
              <li>Market analysis</li>
              <li>Market analysis</li>
              <li>Market analysis</li>
              <li>Market analysis</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <div className="footer_icons"></div>
        <div className="copyright">Copyright © All Rights Reserved 2022 | Designed and developed By Nikhil Sinha</div>
      </div>
    </div>
  )
}
