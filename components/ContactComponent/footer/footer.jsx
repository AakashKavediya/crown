'use client'
import React,{useState} from 'react';
import './footer.css';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
const Footer = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    const listItems = [
    "VHF Repeater : Location : West Mumbai",
    "VHF Repeater : Location : Pune, Lohegaon, Near airport",
    "VHF Repeater : Location : Pune, Arai Hill",
  ];

  const repeaterData = [
    {
      frequency: "145.400 MHz",
      callsign: "VU2BPB",
      Station: "Mumbai Amateur Radio Institute",
    },
    {
      frequency: "144.800 MHz",
      callsign: "VU2ETD",
      Station: "Pune Hams - Ajeenkya DY Patil University",
    },
    {
      frequency: "434.100 MHz",
      callsign: "VU2DYQ",
      Station: "Pune Hams - Ajeenkya DY Patil University",
    },
  ];

 
  return (
    <footer className="zeta-footer">
  
      <div className="alpha-footer-container">
        <div className="beta-footer-grid">
          {/* Column 1 */}
          <div className="gamma-footer-column">
            <div className="delta-branding">
              <div className="epsilon-logo">OUR COLLABORTORS</div>
              {/* <div className="zeta-slogan">SOLOGAN COMPANY</div> */}
            </div>
            <ul className="eta-footer-links">
              <li><img src="./publicImage/amsat_logo.webp" alt="" /></li>
              <li><img src="./publicImage/arsi_logo.png" alt="" /></li>
              <li><img src="./publicImage/itu.png" alt="" /></li>
              {/* <li><img src="" alt="" /></li> */}
            </ul>
          </div>

               {/* Column 4 */}
          <div className="gamma-footer-column">
            <h4 className="theta-footer-heading">Amateur Radio HF/VHF/UHF Repeater Stations in India :</h4>
              <ul className="dropdown-list">
      {listItems.map((item, index) => (
        <li key={index} className="dropdown-item">
          <p className="dropdown-button" onClick={() => toggleDropdown(index)}>
            {item}
          </p>
          {activeIndex === index && (
            <div className="dropdown-content">
              <p><strong>Frequency:</strong> {repeaterData[index].frequency}</p>
              <p><strong>Callsign:</strong> {repeaterData[index].callsign}</p>
              <p><strong>Station:</strong> {repeaterData[index].Station}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
            <div id="followLinkCOontaner">
                <br /><br />
                <b>Follow Us </b><br /><br />
                <ul style={{ display: 'flex', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{listStyle:'none'}} ><Link href=""><FaInstagram size={24} color="black" /></Link></li>
                    <li style={{listStyle:'none'}}><Link href=""><FaLinkedin size={24} color="black" /></Link></li>
                    <li style={{listStyle:'none'}}><Link href=""><FaXTwitter size={24} color="black" /></Link></li>
                </ul><br />
                <ul>
                  <li style={{display:'flex',flexDirection:'row'}} ><b>Phone no: </b><p style={{marginLeft:5}}>98921 68052</p></li>
                  <li style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:8}} ><b>email ID: </b><code style={{marginLeft:5,color:'#6899e1',fontSize:18}}>somaiyahamclub@gmail.com</code></li>
                </ul>
            </div>
            <div id="contactDetail">

            </div>
          </div>

          {/* Column 4 */}
          <div className="gamma-footer-column">
            <h4 className="theta-footer-heading">ABOUT US</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.401931723234!2d72.86850597520461!3d19.046057982152377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf21727f6e19%3A0x473006136ad440dc!2sK.%20J.%20Somaiya%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1751796819554!5m2!1sen!2sin"
              width="95%"
              height="250px"
              style={{ border: 0, borderRadius:'20px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        
      </div>
      <div className="iota-copyright">
          ©Copyright All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;