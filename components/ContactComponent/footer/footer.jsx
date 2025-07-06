import React from 'react';
import './footer.css';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="zeta-footer">
  
      <div className="alpha-footer-container">
        <div className="beta-footer-grid">
          {/* Column 1 */}
          <div className="gamma-footer-column">
            <div className="delta-branding">
              <div className="epsilon-logo">Our Collaborators</div>
              {/* <div className="zeta-slogan">SOLOGAN COMPANY</div> */}
            </div>
            <ul className="eta-footer-links">
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
            </ul>
          </div>

               {/* Column 4 */}
          <div className="gamma-footer-column">
            <h4 className="theta-footer-heading">Amateur Radio HF/VHF/UHF Repeater Stations in India :
Compiled by Jose Jacob, VU2JOS,National Institute of Amateur Radio,NIAR.Please click the link below.</h4>
            <ul>
                <li><p>For VHF/UHF Repeaters :Location Wise:</p></li>
                <li><p>For VHF/UHF Repeaters :Frequency Wise:</p></li>
                <li><p>For VHF/UHF Repeaters :Callsign Wise:</p></li>
                <li><p>For VHF/UHF Nets :Nets Time Wise:</p></li>
                <li><p>For VHF/UHFNets:Location Wise:</p></li>
            </ul>
            <div id="followLinkCOontaner">
                <br /><br />
                <b>Follow Us </b><br /><br />
                <ul style={{ display: 'flex', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{listStyle:'none'}} ><Link href=""><FaInstagram size={24} color="black" /></Link></li>
                    <li style={{listStyle:'none'}}><Link href=""><FaLinkedin size={24} color="black" /></Link></li>
                    <li style={{listStyle:'none'}}><Link href=""><FaXTwitter size={24} color="black" /></Link></li>
                </ul>
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