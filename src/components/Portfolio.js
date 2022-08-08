import React from 'react';
import '../styles/portfolio.css';
import PortfolioImage from '../assets/portfolio.png';

export const Portfolio = () => {
  return (
    <div id="portfolio">
        <div className="portfolio-content">
            <h2>Products and services that <br/>spark enthusiasm</h2>
            <p>Ahis is Photoshop's version of Lorem Ipsum. Proin gravidavelvsauctor. aliquet. Aenean sollicitudin, lorem quis bibend um auctor, nisi elequat ipsum, nec sagittis em nibh id elit. Duis sed odio ametnibvulpuicursus  sit amet  mauris h id elit. Duis sed odio</p>
        </div>
        <img src={PortfolioImage} alt="" />
    </div>
  )
}
