import React from 'react';
import './ARSIComponent.css';
import Link from 'next/link';
const ARSIInfo = () => {
    return (
    <main>
        <div id="mnbv">
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
   
      
      <article className="lkjhContainer">
        <h2 id='boldHeading' >ARSI</h2><br />
        <p>The Amateur Radio Society of India (ARSI) serves as the national body for amateur radio in India. Based at New Delhi, ARSI was formed to promote and regulate amateur radio activities and serves as the primary link between Indian ham radio operators and the international regulatory bodies like the <Link href="/ham/iaru">International Amateur Radio Union (IARU)</Link>. This voluntary organization works for the advancement of science in the communication sector and the establishment of a strong amateur radio culture. Also, the organization helps in emergency communications efforts all over India.</p>
        <br />
        
        <h3>OBJECTIVES OF ARSI</h3>
        <ol>
          <li><p>Promoting Amateur Radio</p>
            <ul className="poiuList">
              <li><p>Persuading individuals to take up amateur radio as a science and technical hobby.</p></li>
              <li><p>Conduct of awareness programs, workshops, and public demonstrations.</p></li>
            </ul>
          </li>
          <li><p>Regulatory and Licensing Support</p>
            <ul className="poiuList">
              <li><p>Helping individuals to obtain amateur radio licenses by assisting them through the licensing process as done by WPC (Wireless Planning & Coordination Wing, Government of India).</p></li>
              <li><p>Constant updating about Indian licensing laws, exam formats, and frequency allocations.</p></li>
            </ul>
          </li>
          <li><p>Emergency Communication & Disaster Relief</p>
            <ul className="poiuList">
              <li><p>Building up emergency radio networks to render aid during natural disasters, blackout, and communication breakdowns.</p></li>
              <li><p>Conducts disaster response drills aimed at preparing operators for real-world emergency situations.</p></li>
              <li><p>Assist the governments, NGOs, and local authorities during floods, earthquakes, and cyclones by relaying necessary communication.</p></li>
            </ul>
          </li>
          <li><p>Technical Innovation & Research</p>
            <ul className="poiuList">
              <li><p>Encouraging experimentation with RF circuits, antennas, digital communication modes, and satellite communication.</p></li>
              <li><p>Supporting the building up of amateur satellites and telemetry projects.</p></li>
            </ul>
          </li>
          <li><p>Contests, DXing, and International Cooperation</p>
            <ul className="poiuList">
              <li><p>Organizing and holding contests for amateur radio, including: ARSI VHF/UHF contests, DX contests, and Morse (CW) contests.</p></li>
              <li><p>Encouraging active participation in international ham radio events and promoting working with hams worldwide.</p></li>
            </ul>
          </li>
          <li><p>Establishing and Affording Ham Clubs</p>
            <ul className="poiuList">
              <li><p>Assistance in the schools and communities establishing ham radio clubs.</p></li>
              <li><p>Provision of technical assistance, resources, and mentorship to maintain club operations.</p></li>
              <li><p>Encouragement for students and young professionals to incorporate ham radio in academic and engineering projects.</p></li>
            </ul>
          </li>
        </ol>
        
        <br />
        <h3>How ARSI Assists Individuals in Becoming Ham Operators</h3>
        <ul className="ytreList">
          <li><p>Licensing Assistance</p></li>
          <p>ARSI gives information on the Amateur Station Operator's Certificate Examination, which is a prerequisite to becoming a licensed ham radio operator in India.</p>
          <p>The Examination covers radio regulations, basic electronics, propagation, operating procedures, and Morse Codes, this being applicable to a few classes of licenses.</p>
          <p>ARSI helps candidates with syllabus, mock tests, and registration formalities-fixed for the exam conducted by the WPC, Ministry of Communications, India.</p>
          
          <li><p>Training and Skill Development</p></li>
          <p>ARSI conducts workshops and training programs to develop skills on practical radio operations, antenna building, and receiving Morse codes.</p>
          <p>Offers technical resources and mentorship programs to the aspiring hams.</p>
          
          <li><p>Equipment Guidance</p></li>
          <p>Helps the new hams choose and set up their first transceiver, antenna, and other radio-related equipment.</p>
          <p>Provides information on the legal way to import and operate amateur radio equipment in India.</p>
          
          <li><p>Call Sign Assignment and Frequency Regulations</p></li>
          <p>ARSI sees to it that newly licensed ham operators receive their unique call signs.</p>
          <p>Informs hams about frequency bands, power limits, and lawful operating procedures.</p>
        </ul>
      </article>
      <br />
    </main>
  );
};

export default ARSIInfo;