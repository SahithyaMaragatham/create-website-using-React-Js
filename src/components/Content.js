import React, { Component } from 'react';
import './style.css';
import video from './video1.mp4';
import img1 from'./ol1.jpg'; 
import img2 from'./ol2.jpg'; 
import img3 from'./ol3.jpg'; 
import img4 from'./ol4.jpg'; 
import video3 from './jav1.mp4';
import video4 from './swim.mp4';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <video className='content1' width="700" controls>
          <source src={video} type="video/mp4" />
        </video>
        <p className='para1'>Hindenburg row: Congress announces nationwide protest on August 22 for SEBI chief’s resignation, JPC probe
Securities and Exchange Board of India (SEBI) Chairperson Madhabi Puri Buch. File
Announcement was made after Congress chief Mallikarjun Kharge held a meeting with all general secretaries, State unit chiefs and AICC State in-charges as the party gets battle-ready for the upcoming Assembly polls.Securities and Exchange Board of India (SEBI) Chairperson Madhabi Puri Buch. File | Photo Credit: PTI,Hindenburg row: Congress announces nationwide protest on August 22 for SEBI chief’s resignation, JPC probe
Securities and Exchange Board of India (SEBI) Chairperson Madhabi Puri Buch.

Amid the raging row over the Hindenburg allegations, the Congress on Tuesday (August 13, 2024) announced that it will hold a nationwide agitation on August 22 demanding SEBI Chief Madhabi Puri Buch's resignation and a Joint Parliamentary Committee probe into the Adani issue.BJP spokesperson Sudhanshu Trivedi said the recent rise of ’do ladke’ , in an apparent reference to Congress’ Rahul Gandhi and SP’s Akhilesh Yadav, had resulted in criminals becoming emboldened in Uttar Pradesh,Hindenburg row: Congress announces nationwide protest on August 22 for SEBI chief’s resignation</p>
       <div className='cont1'>
        <div className="olymbic">
          <img src={img1} alt="The Hindu Logo" className="img" />
          <img src={img2} alt="The Hindu Logo" className="img" />
        
        </div>
        <div className='olymbic'>
        <img src={img3} alt="The Hindu Logo" className="img" />
        <img src={img4} alt="The Hindu Logo" className="img" />
        </div>
        <video className='swim' width="500" controls>
          <source src={video4} type="video/mp4" />
        </video>
        </div>
        
           

      </div>
      
    );
  }
}

export default Content;