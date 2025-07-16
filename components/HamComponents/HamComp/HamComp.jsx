import React from 'react';
import './HamComp.css';
import Link from 'next/link';
const HamRadioHistory = () => {
  return (
    <main className="mainContainer">
        <div id="extra">
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      <div className="introSection">
        <h1>The Journey of Crown: How It Was Established</h1>
       
        <div className="contentBase">
          <article>
            <h6 className="sectionTitle"></h6>
            
            <h6>ABOUT HAM RADIO</h6>
            <p><b style={{color: "#333333"}}>What is Ham?</b></p>
            <p>Ham radio or amateur radio is a non-commercial radio communication service that allows licensed operators to experiment in radio technology, reach worldwide contacts, and provide emergency communications during disasters. Ham radio is not commercial broadcasting or cellular communication. It is a two-way interactive medium by which operators converse using speech, Morse code (CW), and digital modes over high-frequency (HF), very high-frequency (VHF), and ultra-high-frequency (UHF) bands.
            </p>
            <p>Ham radio is often seen as the "original social network," one with connections that transcend the internet based systems. Today it plays an important role in scientific research, disaster management, and, indeed, space exploration by means of amateur radio satellites and ISS communication.  
            </p><br />
          </article>
        </div>
      </div>
      
      <div className="contentWrapper">
        {/* <div className="leftContent">
          <h6>HISTORY</h6> 
          <p>Ham radio entered India in the 1920s, when British and Indian engineers began experimenting with radio communication systems. The first Indian amateur operator was Amarendra Chandra Gooptu (VU2AC), who was licensed in 1921.
          </p>           
          <p>He stated that some key moments in the development of Indian amateur radio are as follows:
          </p>
          <p>1947: Independent India gets the amateur radio service regulated by the government.</p>
          <p>1950s-60s: The rise of radio clubs and licensing by the Wireless and Telegraphy Act of 1933.</p>
          <p>1984: The <Link style={{color: "rgb(42, 113, 255)"}} href="/ham/arsi">Amateur Radio Society of India</Link> (ARSI) was formed, becoming the national body representing Indian hams on the international level.</p>
          <p>2004: The advent of digital radio modes and internet-linked repeater networks, modernizing ham radio operations in India.
          </p>
          <p>India has over 20,000 licensed amateur radio operators today, participating in voluntary groups contributing a lot to emergency communication, scientific research, and development works in radio technology. 
          </p>
        </div> */}
        <div className="rightContent">
            <p><big>Contribution of Indian Hams to different sectors</big></p><br />
            <ol>
              <li><b id='listHeading' >Disaster Communication and Emergency Response</b>
                <ul>
                  <li><p>1991 Uttarkashi Earthquake-Indian hams provided emergency communications support when the telephone service network failed.</p></li>
                  <li><p>1999 Odisha Super Cyclone-Ham radio operators relayed information from disaster-stricken areas to the relief agencies.</p></li>
                  <li><p>2001 Gujarat Earthquake-Hams set up emergency communication links for coordinating rescue operations, when all other forms of communications were down.</p></li>
                  <li><p>2004 Indian Ocean Tsunami-Amateur radio networks helped in linking up the affected areas even before the official relief began.</p></li>
                  <li><p>2013 Uttarakhand Floods--Ham Radio operators provided real-time information to help with rescue operations at the site.</p></li>
                </ul>
              </li>
              <li id='listHeading'>
                <b>Scientific and Space Contributions</b>
                <ul>
                  <li><p>Indian ham operators have contributed to radio astronomy and meteorological data collection.</p></li>
                  <li><p>Quite a few scientists who have worked for ISRO are amateur radio operators and have used amateur radio in their satellite telemetry experiments.</p></li>
                  <li><p>Indian hams are always in the process of tracking and communicating with satellites, including the ISS.</p></li>
                </ul>
              </li>
              <li id='listHeading'>
                <b>Contests, DXing, and International Recognition</b>
                <ul>
                  <li><p>Indian Hams are very active in international radio contests and have gained a remarkable standing in DXing.</p></li>
                  <li><p>Events such as ARRL Field Day, CQ World Wide DX Contest, and JOTA are places where Indian players participate widely.</p></li>
                  <li><p>The Indian operators have made contacts with rare DXCC entities, boosting the presence of India in the global ham radio grid.</p></li>
                </ul>
              </li>
              <li id='listHeading'><b>Promoting Amateur Radio and STEM Education</b>
                <ul>
                  <li><p>Organizations such as ARSI and NIAR(National Institute of Amateur Radio) have introduced ham radio into the school and university curriculum.</p></li>
                  <li><p>Indian hams conduct workshops on RF engineering, Morse code, and emergency communication for students.</p></li>
                  <li><p>Some of the Indian universities have incorporated ham radio-based projects in their aerospace and satellite research programs.</p></li>
                </ul>
              </li>
            </ol>
          </div> 
        
        <div className="rightContainer">
          {/* <div className="rightContent">
            <p><big>Contribution of Indian Hams to different sectors</big></p>
            <ol>
              <li><b>Disaster Communication and Emergency Response</b>
                <ul>
                  <li><p>1991 Uttarkashi Earthquake-Indian hams provided emergency communications support when the telephone service network failed.</p></li>
                  <li><p>1999 Odisha Super Cyclone-Ham radio operators relayed information from disaster-stricken areas to the relief agencies.</p></li>
                  <li><p>2001 Gujarat Earthquake-Hams set up emergency communication links for coordinating rescue operations, when all other forms of communications were down.</p></li>
                  <li><p>2004 Indian Ocean Tsunami-Amateur radio networks helped in linking up the affected areas even before the official relief began.</p></li>
                  <li><p>2013 Uttarakhand Floods--Ham Radio operators provided real-time information to help with rescue operations at the site.</p></li>
                </ul>
              </li>
              <li>
                <b>Scientific and Space Contributions</b>
                <ul>
                  <li><p>Indian ham operators have contributed to radio astronomy and meteorological data collection.</p></li>
                  <li><p>Quite a few scientists who have worked for ISRO are amateur radio operators and have used amateur radio in their satellite telemetry experiments.</p></li>
                  <li><p>Indian hams are always in the process of tracking and communicating with satellites, including the ISS.</p></li>
                </ul>
              </li>
              <li>
                <b>Contests, DXing, and International Recognition</b>
                <ul>
                  <li><p>Indian Hams are very active in international radio contests and have gained a remarkable standing in DXing.</p></li>
                  <li><p>Events such as ARRL Field Day, CQ World Wide DX Contest, and JOTA are places where Indian players participate widely.</p></li>
                  <li><p>The Indian operators have made contacts with rare DXCC entities, boosting the presence of India in the global ham radio grid.</p></li>
                </ul>
              </li>
              <li><b>Promoting Amateur Radio and STEM Education</b>
                <ul>
                  <li><p>Organizations such as ARSI and NIAR(National Institute of Amateur Radio) have introduced ham radio into the school and university curriculum.</p></li>
                  <li><p>Indian hams conduct workshops on RF engineering, Morse code, and emergency communication for students.</p></li>
                  <li><p>Some of the Indian universities have incorporated ham radio-based projects in their aerospace and satellite research programs.</p></li>
                </ul>
              </li>
            </ol>
          </div> */}
          <h6>HISTORY</h6>
          <br /> 
          <p>Ham radio entered India in the 1920s, when British and Indian engineers began experimenting with radio communication systems. The first Indian amateur operator was Amarendra Chandra Gooptu (VU2AC), who was licensed in 1921.
          </p>           
          <p>He stated that some key moments in the development of Indian amateur radio are as follows:
          </p>
          <p>1947: Independent India gets the amateur radio service regulated by the government.</p>
          <p>1950s-60s: The rise of radio clubs and licensing by the Wireless and Telegraphy Act of 1933.</p>
          <p>1984: The <Link style={{color: "rgb(42, 113, 255)"}} href="/ham/arsi">Amateur Radio Society of India</Link> (ARSI) was formed, becoming the national body representing Indian hams on the international level.</p>
          <p>2004: The advent of digital radio modes and internet-linked repeater networks, modernizing ham radio operations in India.
          </p>
          <p>India has over 20,000 licensed amateur radio operators today, participating in voluntary groups contributing a lot to emergency communication, scientific research, and development works in radio technology. 
          </p>
        </div>
      </div>
    </main>
  );
};

export default HamRadioHistory;