'use client'
import './firstScreen.css';
import './card/swapCard';
import React, { useState } from 'react';
import CardSwap, { Card } from './card/swapCard';
import TypingText from './TypingText.jsx';
// Ensure this path is correct

const FirstScreen = () => {

    const collection = [
        {
            shortdata: "A transceiver integrates the functions...",
            longData : "A transceiver integrates the functions of both transmitting and receiving in a single device, allowing for smooth two-way communication across HF, VHF, or UHF bands. Amateur radio operators utilize transceivers to transmit voice, Morse code, and digital signals globally. The ICOM IC-718, commonly used in amateur clubs, operates on HF bands, supports SSB, CW, and AM, and is praised for its simplicity, dependability, and performance—making it perfect for students and field operations. Transceivers are essential components of every ham station, whether for contests, emergency communications, or exploring RF systems.",
            heading : "IC-ICOM 718",
            image : "/publicImage/transceiver.jpg"
        }, 
        {
          shortdata: "The NanoVNA (Vector Network Analyzer) is...",
            longData : "The NanoVNA (Vector Network Analyzer) is a compact device designed to analyze RF components such as antennas, filters, and cables. It enables amateur radio operators to measure parameters like SWR (Standing Wave Ratio), impedance, and return loss, ensuring their antennas are properly tuned and effective for transmission. Featuring a graphical display of Smith charts and frequency response, the NanoVNA allows operators to observe how antennas function across various bands. It's an essential tool in the ham operator's kit — assisting in antenna design, diagnosing feedline issues, and ensuring clear, optimized signals for both local and long-distance communications.",
            heading : "Nano VNA",
            image : "/publicImage/vna.png"
        },
        {
          shortdata: "The inverted-V dipole is a...",
            longData : "The inverted-V dipole is a popular antenna among amateur radio operators because of its efficient operation and straightforward setup. In terms of structure, it is a modified version of the standard dipole, with both arms angled downwards from a central support point, which lowers the installation height compared to a horizontal dipole.Amateur radio enthusiasts frequently employ the inverted-V for HF band usage (80m, 40m, 20m, 15m, 10m) when space or tower height is constrained. This configuration delivers strong omnidirectional coverage and advantageous takeoff angles, making it suitable for long-distance (DX) communication.For field competitions, emergency installations, or portable operations, it's easy construction, small footprint, and capability for multiband tuning render it an excellent option.",
            heading : "Multiband HF set-up",
            image : "/publicImage/invertedV.jpg"
        },
        {
          shortdata: "The SWR meter is a crucial...",
            longData : "The SWR meter is a crucial instrument for amateur radio enthusiasts and satellite hobbyists. It is used to evaluate the performance of an antenna system by measuring the ratio of reflected power to transmitted power. By calculating the SWR, operators can determine if their antenna is properly matched to the feedline, ensuring minimal signal reflection and effective transmission. An SWR meter is vital during ham radio operations for fine-tuning antennas to avoid potential damage to the transmitter and to improve signal quality. When employed in satellite communications, an SWR meter helps confirm that the antenna system is successfully transmitting and receiving signals from satellites, thereby enhancing communication efficiency.",
            heading : "Lunaris G6 SWR meter",
            image : "/publicImage/swr.png"
        },
        // {
        //   shortdata: "Data3",
        //     longData : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sint consequuntur provident assumenda, in, excepturi illo laboriosam, hic nam est totam nihil temporibus distinctio ipsam vitae cupiditate odio velit saepe!",
        //     heading : "heading 3",
        //     image : "https://i.pinimg.com/736x/df/e5/7f/dfe57f37b1fe72d384235efb042dd3cd.jpg"
        // }
    ] 
        
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (cardIndex) => {
    setSelectedCard(collection[cardIndex]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  


  return (
    <div id='Container'>
      <main>
        <div id="mainContent">
          <div id='mainHeadingg'>
            <h2>
              <TypingText text="EMPOWERING STUDENTS THROUGH AMATEUR RADIO & WIRELESS TECHNOLOGY" speed={40} />
            </h2>
            <p>Fostering innovation, communication, and hands-on learning in the world of radio frequency. Where students take the lead—from building antennas to connecting continents.</p>
          </div>
          <div id='swapingCard'>
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={3000}
                        pauseOnHover={false}
                        onCardClick={openModal}
                    >         
                       
                         {
                collection.map((info, idx) => (
                          <Card key={idx} onClick={() => openModal(idx)}>
                            <h3 id='cardHeading'>{info.heading}</h3>
                            <p id='cardPara'>{info.shortdata}</p>
                            <img id='cardImage' src={info.image} alt="" />
                          </Card>
                        ))
            }
                    </CardSwap>
          </div>
        </div>
          {isModalOpen && (
            <div id='modal' style={{ display: 'block' }}>
              <div>
                <br /><br /><br />
                <div id='PopContainer' >
                  <div id="popHeadingContainer">
                  <img src={selectedCard?.image} alt="Loading..." id='popImage' />
                  </div>  
                  <div id="popContent">
                  <h3 id='popHeadingText'>{selectedCard?.heading}</h3>
                    <p id='popData' >{selectedCard?.longData}</p>
                    <button id='popButton' onClick={closeModal}> Close</button>
                    <br />
                  </div>
                </div>
                
              </div>
            </div>
          )}
      </main>
    </div>
  );
};

export default FirstScreen;
