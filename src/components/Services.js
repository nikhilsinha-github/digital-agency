import React from 'react'
import '../styles/services.css';
import Divider from '@material-ui/core/Divider';
import marketAnalysis from '../assets/market_analysis.png';
import onPageSeo from '../assets/on_page_seo.png';
import offPageSeo from '../assets/off_page_seo.png';
import keywordAnalysis from '../assets/keyword_analysis.png';
import contentMarketing from '../assets/content_marketing.png';
import emailMarketing from '../assets/email_marketing.png';

export const Services = () => {
  const ServicesMap = [
    {heading: "Market Analysis", img: marketAnalysis, body: "Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz"}, 
    {heading: "On Page SEO", img: onPageSeo, body: "Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz"}, 
    {heading: "Off Page SEO", img: offPageSeo, body: "Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz"}, 
    {heading: "Keyword Analysis", img: keywordAnalysis, body: "Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz"}, 
    {heading: "Content Marketing", img: contentMarketing, body: "Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz"}, 
    {heading: "Email Marketing", img: emailMarketing, body: "Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz"}
  ];
  return (
    <section id="services">
      <div className="services-header">
        <h1>our services</h1>
        <div className="small-line">
          <Divider></Divider>
        </div>
        <p>Ahis is Photoshop's version of Lorem Ipsum. Proin gravidavelvsauctor. aliquet. Aenean sollicitudin, lorem quis bibend um auctor, nisi elequat ipsum,</p>
      </div>
      <div className="services_list">
        {ServicesMap.map((data)=>(
          <div key={data.heading} className="services_item">
            <img src={data.img} alt=""/>
            <h4>{data.heading}</h4>
            <p>{data.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
