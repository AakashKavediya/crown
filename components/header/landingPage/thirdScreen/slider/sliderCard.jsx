"use client";
import React, { useEffect, useRef, useState } from "react";
import "./autoSlider.css";

const Slider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardCount = 5;
  const autoScrollInterval = 3000;

  const cards = [
    {
      image: "/publicImage/grpqrp24.jpg",
      heading: "QRP DAY 2024",
      shortData: `The Crown Club enthusiastically participated in the QRP Contest, which was conducted by the Amateur Radio Society of India. This event improved students' knowledge of low-power amateur radio (QRP) operations, antenna setup, and communication protocols, giving an invaluable hands-on learning opportunity. The event began with expert speeches by experienced ham operators such as Dr. Umesh Shinde, Chandrashekhar Kulkarni, Shrimat Kamath, and Sarla Sharma. They discussed the evolution of ham radio, antenna principles, and the role of amateur radio groups in promoting communication technologies. The 40m, 20m, 15m, and 10m bands received special attention due to their importance in worldwide communication.`,
      longData: `The Crown Club enthusiastically participated in the QRP Contest, which was conducted by the Amateur Radio Society of India. This event improved students' knowledge of low-power amateur radio (QRP) operations, antenna setup, and communication protocols, giving an invaluable hands-on learning opportunity. The event began with expert speeches by experienced ham operators such as Dr. Umesh Shinde, Chandrashekhar Kulkarni, Shrimat Kamath, and Sarla Sharma. They discussed the evolution of ham radio, antenna principles, and the role of amateur radio groups in promoting communication technologies. The 40m, 20m, 15m, and 10m bands received special attention due to their importance in worldwide communication.`,
    },
    {
      image: "/publicImage/arsi_2025.jpg",
      heading: "ARSI National Field Day & Hill Topping Contest 2025",
      shortData: `The Crown Club participated in the ARSI National Field Day and Hill Topping Contest 2025, a 31-hour event that encourages hands-on amateur radio communication in isolated locations. This annual event encourages ham radio operators to enhance their technical and communication skills while mimicking real-world emergency circumstances. The crew employed long wire antennas for HF bands (40m, 20m, and 15m) with CW, SSB, Digital, and QRP modes to make contacts across the country. To address previous power supply issues, they used a DC to DC power boost converter.`,
      longData: `The Crown Club participated in the ARSI National Field Day and Hill Topping Contest 2025, a 31-hour event that encourages hands-on amateur radio communication in isolated locations. This annual event encourages ham radio operators to enhance their technical and communication skills while mimicking real-world emergency circumstances. The crew employed long wire antennas for HF bands (40m, 20m, and 15m) with CW, SSB, Digital, and QRP modes to make contacts across the country. To address previous power supply issues, they used a DC to DC power boost converter.`,
    },
    {
      image: "/publicImage/LARC.png",
      heading: "LARC Hyderabad 2017 – Antenna Making Contest",
      shortData: `The LARC (Lamakaan Amateur Radio Convention) that took place in Hyderabad in 2017 was a notable occasion designed to promote ingenuity and technical advancement among amateur radio enthusiasts. The convention included a variety of captivating sessions such as antenna construction competitions, technical workshops, and keynote speeches delivered by distinguished hams, making it a standout event in the Indian amateur radio scene. Two representatives from the Crown Club, Akshay Jain and Jatin Bhosale, took part in the Antenna Making Contest, where they crafted a Moxon Yagi antenna for the VHF 145 MHz.`,
      longData: `The LARC (Lamakaan Amateur Radio Convention) that took place in Hyderabad in 2017 was a notable occasion designed to promote ingenuity and technical advancement among amateur radio enthusiasts. The convention included a variety of captivating sessions such as antenna construction competitions, technical workshops, and keynote speeches delivered by distinguished hams, making it a standout event in the Indian amateur radio scene. Two representatives from the Crown Club, Akshay Jain and Jatin Bhosale, took part in the Antenna Making Contest, where they crafted a Moxon Yagi antenna for the VHF 145 MHz.`,
    },
    {
      image: "/publicImage/pic1.jpg",
      heading: "ARSI National Field Day and Hill Topping Contest 2024",
      shortData: `The Crown Club participated in the ARSI National Field Day and Hill Topping Contest 2024, which was held on January 27-28, 2024, under the supervision of Dr. Umesh Shinde. The event's goal was to assess amateur radio communication skills in outdoor settings, therefore teams were required to set up their own radio stations on hilltops. The team consisted of 11 people (8 undergraduate students and 3 seasoned alumni), who chose a hilltop in Satara for their operations. They entered Category A (20m and 40m HF bands) and constructed stacked half-wave dipole antennas using bamboo and insulated copper wires.`,
      longData: `The Crown Club participated in the ARSI National Field Day and Hill Topping Contest 2024, which was held on January 27-28, 2024, under the supervision of Dr. Umesh Shinde. The event's goal was to assess amateur radio communication skills in outdoor settings, therefore teams were required to set up their own radio stations on hilltops. The team consisted of 11 people (8 undergraduate students and 3 seasoned alumni), who chose a hilltop in Satara for their operations. They entered Category A (20m and 40m HF bands) and constructed stacked half-wave dipole antennas using bamboo and insulated copper wires.`,
    },
    {
      image: "/publicImage/CVMumbai.jpg",
      heading: "CQ Mumbai",
      shortData: `The Crown Club participated in the ARSI National Field Day and Hill Topping Contest 2024, which was held on January 27-28, 2024, under the supervision of Dr. Umesh Shinde. The event's goal was to assess amateur radio communication skills in outdoor settings, therefore teams were required to set up their own radio stations on hilltops. The team consisted of 11 people (8 undergraduate students and 3 seasoned alumni), who chose a hilltop in Satara for their operations. They entered Category A (20m and 40m HF bands) and constructed stacked half-wave dipole antennas using bamboo and insulated copper wires, calibrated for optimal performance with a VNA equipment. These antennas were connected to an ICOM 718 transceiver using RG58 A/U coaxial wires.`,
      longData: `The Crown Club participated in the ARSI National Field Day and Hill Topping Contest 2024, which was held on January 27-28, 2024, under the supervision of Dr. Umesh Shinde. The event's goal was to assess amateur radio communication skills in outdoor settings, therefore teams were required to set up their own radio stations on hilltops. The team consisted of 11 people (8 undergraduate students and 3 seasoned alumni), who chose a hilltop in Satara for their operations. They entered Category A (20m and 40m HF bands) and constructed stacked half-wave dipole antennas using bamboo and insulated copper wires, calibrated for optimal performance with a VNA equipment. These antennas were connected to an ICOM 718 transceiver using RG58 A/U coaxial wires.`,
    },
  ];

  const scrollToCard = (index) => {
    const slider = sliderRef.current;
    const cardWidth = slider.offsetWidth;
    slider.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const nextCard = () => {
    const nextIndex = (currentIndex + 1) % cardCount;
    scrollToCard(nextIndex);
  };

  const prevCard = () => {
    const prevIndex = (currentIndex - 1 + cardCount) % cardCount;
    scrollToCard(prevIndex);
  };

  // Ref for current index to avoid stale closure in interval
  const currentIndexRef = useRef(currentIndex);
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Use ref to get latest index
      const nextIndex = (currentIndexRef.current + 1) % cardCount;
      scrollToCard(nextIndex);
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, []); // Only set up interval once

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="slider-container">
      <div>
        <h1 id="thirdHeading">EVENTS AND ACHIEVEMENT</h1>
      </div>
      <div id="sliderHolder">
        <button className="nav-button prev" onClick={prevCard}>
          &#10094;
        </button>

        <div className="slider" ref={sliderRef}>
          {cards.map((card, index) => (
            <div className="slider-card" key={index}>
              <img src={card.image} id="slideImage" alt="loading..." />
              <div id="sliderContent">
                <h2>{card.heading}</h2>
                <p>{card.shortData}</p>
                <button className="read-more-btn" onClick={() => openModal(card)}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-button next" onClick={nextCard}>
          &#10095;
        </button>
      </div>

      <div id="floatingTextContainer">
        <marquee id="textFlow" behavior="scroll" direction="left">
          <p id="scrollingText">
            “When everything else fails, amateur radio will still be there—and thriving.” — W. Craig Fugate, Former FEMA Administrator
          </p>
        </marquee>
      </div>

      {isModalOpen && (
        <div id="modal" style={{ display: "block" }}>
          <div>
            <br /><br /><br /><br /><br />
            <div id="PopContainer">
              <div id="popHeadingContainer">
                <img src={selectedCard?.image} alt="Loading..." id="popImage" />
              </div>
              <div id="popContent">
                <h3 id="popHeadingText">{selectedCard?.heading}</h3>
                <p id="popData">{selectedCard?.longData}</p>
                <button id="popButton" aria-label="Close modal" onClick={closeModal}>
                  Close
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
