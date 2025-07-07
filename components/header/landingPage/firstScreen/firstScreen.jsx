'use client'
import './firstScreen.css';
import './card/swapCard';
import React, { useState } from 'react';
import CardSwap, { Card } from './card/swapCard';
import TypingText from './TypingText.jsx';

const FirstScreen = () => {

    const collection = [
        {
            shortdata: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            longData : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sint consequuntur provident assumenda, in, excepturi illo laboriosam, hic nam est totam nihil temporibus distinctio ipsam vitae cupiditate odio velit saepe!",
            heading : "heading 1",
            image : "https://i.pinimg.com/736x/df/e5/7f/dfe57f37b1fe72d384235efb042dd3cd.jpg"
        }, 
        {
          shortdata: "Data2",
            longData : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sint consequuntur provident assumenda, in, excepturi illo laboriosam, hic nam est totam nihil temporibus distinctio ipsam vitae cupiditate odio velit saepe!",
            heading : "heading 2",
            image : "https://i.pinimg.com/736x/df/e5/7f/dfe57f37b1fe72d384235efb042dd3cd.jpg"
        },
        {
          shortdata: "Data3",
            longData : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sint consequuntur provident assumenda, in, excepturi illo laboriosam, hic nam est totam nihil temporibus distinctio ipsam vitae cupiditate odio velit saepe!",
            heading : "heading 3",
            image : "https://i.pinimg.com/736x/df/e5/7f/dfe57f37b1fe72d384235efb042dd3cd.jpg"
        }
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
                            <img id='cardImage' src="https://i.pinimg.com/736x/df/e5/7f/dfe57f37b1fe72d384235efb042dd3cd.jpg" alt="" />
                          </Card>
                        ))
            }
                        

                    </CardSwap>
          </div>
        </div>
        {isModalOpen && (
          <div id='modal' style={{ display: 'block' }}>
            <div>
              <br /><br /><br /><br /><br />
              <div id='PopContainer' >
                <div id="popHeadingContainer">
                <img src={selectedCard?.image} alt="Loading..." id='popImage' />
                  
                </div>  
                <div id="popContent">
                <h3 id='popHeadingText'>{selectedCard?.heading}</h3>
                  <p id='popData' >{selectedCard?.longData}</p>
                  <button id='popButton' onClick={closeModal}> Close</button>
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
