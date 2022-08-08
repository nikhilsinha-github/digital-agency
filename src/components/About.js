import React from 'react';
import '../styles/about.css';
import aboutImage1 from '../assets/about-image-1.png';
import aboutImage2 from '../assets/about-image-2.png';

export const About = () => {
    return (
        <section id="about">
            <div className="about-part1">
                <img src={aboutImage1} alt="" />
                <div className="text">
                    <div className="heading">
                        <div className="heading-title">
                            <h1>Welcome to Nsquare Digital</h1>
                            <p>a Specialized Design Studio</p>
                        </div>
                        <div className="content">
                            <h1>about us</h1>
                            <p>We strive to go above and beyond for our clients, fostering aelationship built on trust, confidence and honesty. Maybe it's our family orientation, but we think the most satisfying part of what we do is that we get toork with so many wonderful people. We're proud that we're a 10omen-ned business certified by the Women's Business velopment Center (WBDC). We're also proud that we put people first,ith monthly reward grams and team-building activities throughout the year. We strive to go above and beyond for our clients.<br /><br />Maybe it’s our family orientation, but we think the most satisfying part of what we do is that. building activities throughout the year. We strive to go above and bond for our clients, fostering a relationship built on trust, confidence and nestyaybe it’s  fostering a relationship our.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-part2">
                <img src={aboutImage2} alt="" />
                <div className="label">
                    <h2>Blessed you our lesser  fifth beast were cattle winged. It is a long established fact that a reader will be distracted</h2>
                </div>
            </div>
        </section>
    )
}
