import React, { Component } from 'react';
import './style.css';
import playstore from './logo1.png';
import appstore from './appstore.png';

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <header className="header1">
          <h1 className="title">NEWS TIMES</h1>
          <img src={playstore} alt="The Hindu Logo" className="play" />
          <img src={appstore} alt="The Hindu Logo" className="appstore" />
        </header>
        <div className="content">
          <div className="column">
            <h2>The Hindu</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Code of Editorial Values</a></li>
              <li><a href="#">News Archive</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Print Subscription</a></li>
              <li><a href="#">Digital Subscription</a></li>
              <li><a href="#">Subscribe to Newsletters</a></li>
              <li><a href="#">Rss Feeds</a></li>
              <li><a href="#">Readers Editor-Terms of Reference</a></li>
              <li><a href="#">Authors & Contributors</a></li>
            </ul>
          </div>
          <div className="column">
            <h2>Other Products</h2>
            <ul>
              <li><a href="#">RoofandFloor</a></li>
              <li><a href="#">STEP</a></li>
              <li><a href="#">Images</a></li>
              <li><a href="#">Classifieds - Print</a></li>
              <li><a href="#">Bookstore & Special Publications</a></li>
            </ul>
            <h2>Popular Sections</h2>
            <ul>
              <li><a href="#">Elections</a></li>
              <li><a href="#">Israeli–Palestinian conflict 2023</a></li>
              <li><a href="#">Latest News</a></li>
              <li><a href="#">National News</a></li>
              <li><a href="#">International News</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Life & Style</a></li>
              <li><a href="#">Food</a></li>
              <li><a href="#">Podcast</a></li>
              <li><a href="#">Showcase</a></li>
            </ul>
          </div>
          <div className="column">
            <h2>Business</h2>
            <ul>
              <li><a href="#">Agri-Business</a></li>
              <li><a href="#">Industry</a></li>
              <li><a href="#">Economy</a></li>
              <li><a href="#">Markets</a></li>
              <li><a href="#">Budget</a></li>
            </ul>
            <h2>Sport</h2>
            <ul>
              <li><a href="#">Cricket</a></li>
              <li><a href="#">Football</a></li>
              <li><a href="#">Hockey</a></li>
              <li><a href="#">Tennis</a></li>
              <li><a href="#">Athletics</a></li>
              <li><a href="#">Motorsport</a></li>
              <li><a href="#">Races</a></li>
              <li><a href="#">Other Sports</a></li>
            </ul>
          </div>
          <div className="column">
            <h2>States</h2>
            <ul>
              <li><a href="#">Andhra Pradesh</a></li>
              <li><a href="#">Karnataka</a></li>
              <li><a href="#">Kerala</a></li>
              <li><a href="#">Tamil Nadu</a></li>
              <li><a href="#">Telangana</a></li>
            </ul>
            <h2>Cities</h2>
            <ul>
              <li><a href="#">Bengaluru</a></li>
              <li><a href="#">Chennai</a></li>
              <li><a href="#">Coimbatore</a></li>
              <li><a href="#">Delhi</a></li>
              <li><a href="#">Hyderabad</a></li>
              <li><a href="#">Kochi</a></li>
              <li><a href="#">Kolkata</a></li>
              <li><a href="#">Kozhikode</a></li>
              <li><a href="#">Madurai</a></li>
              <li><a href="#">Mangaluru</a></li>
              <li><a href="#">Mumbai</a></li>
              <li><a href="#">Puducherry</a></li>
            </ul>
          </div>
          <div className="column">
            <h2>Trending on The Hindu</h2>
            <ul>
              <li><a href="#">India News</a></li>
              <li><a href="#">Vinesh Phogat disqualification CAS verdict LIVE</a></li>
              <li><a href="#">NIRF Ranking 2024 - IIT Madras</a></li>
              <li><a href="#">Musk Trump interview DDOS attack</a></li>
              <li><a href="#">Kolkata rape and murder case</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">India News</a></li>
              <li><a href="#">What is a DDOS attack?</a></li>
              <li><a href="#">Tech News</a></li>
              <li><a href="#">Jio Data traffic share touches 60%</a></li>
            </ul>
            <h2>Trending on Group Sites</h2>
            <ul>
              <li><a href="#">Stock Market Live Updates</a></li>
              <li><a href="#">Stocks to buy today</a></li>
              <li><a href="#">IND vs SL, 1st ODI</a></li>
              <li><a href="#">Olympics</a></li>
              <li><a href="#">CrowdStrike Releases Root Cause Analysis of Falcon Sensor BSOD Crash</a></li>
              <li><a href="#">Gold Rate Today</a></li>
              <li><a href="#">Silver Rate Today</a></li>
              <li><a href="#">India’s record heatwave vows to return</a></li>
              <li><a href="#">The Ambani wedding: A spectacle of excess in an age of inequality</a></li>
              <li><a href="#">Frontline Current Issue</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;