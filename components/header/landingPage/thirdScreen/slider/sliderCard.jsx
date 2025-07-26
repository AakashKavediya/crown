"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Required for navigation
import "./autoSlider.css"; // Ensure CSS file exists

const Slider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardCount = 8;
  const autoScrollInterval = 8000;
  const router = useRouter();

  const cards = [
    {
      image: "/publicImage/grpqrp24.jpg",
      heading: "QRP DAY 2024",
      shortData: `The Crown Club enthusiastically participated in the QRP Contest, which was conducted by the Amateur Radio Society of India. This event improved students' knowledge of low-power amateur radio (QRP) operations, antenna setup, and communication protocols, giving an invaluable hands-on learning opportunity. The event began with expert speeches by experienced ham operators such as Dr. Umesh Shinde, Chandrashekhar Kulkarni, Shrimat Kamath, and Sarla Sharma. They discussed the evolution of ham radio, antenna principles, and the role of amateur radio groups in promoting communication technologies. The 40m, 20m, 15m, and 10m bands received special attention due to their importance in worldwide communication.`,
      route: "/events/QRBDay",
    },
    {
      image: "/publicImage/arsi_2025.jpg",
      heading: "ARSI National Field Day & Hill Topping Contest 2025",
      shortData: `The Crown Club participated in the ARSI National Field Day and Hill Topping Contest 2025, a 31-hour event that encourages hands-on amateur radio communication in isolated locations. This annual event encourages ham radio operators to enhance their technical and communication skills while mimicking real-world emergency circumstances. The crew employed long wire antennas for HF bands (40m, 20m, and 15m) with CW, SSB, Digital, and QRP modes to make contacts across the country. To address previous power supply issues, they used a DC to DC power boost converter.`,
      route: "/events/ArsiEvent",
    },
    {
      image: "/publicImage/LARC.png",
      heading: "LARC Hyderabad 2017 – Antenna Making Contest",
      shortData: `The LARC (Lamakaan Amateur Radio Convention) that took place in Hyderabad in 2017 was a notable occasion designed to promote ingenuity and technical advancement among amateur radio enthusiasts. The convention included a variety of captivating sessions such as antenna construction competitions, technical workshops, and keynote speeches delivered by distinguished hams, making it a standout event in the Indian amateur radio scene. Two representatives from the Crown Club, Akshay Jain and Jatin Bhosale, took part in the Antenna Making Contest, where they crafted a Moxon Yagi antenna for the VHF 145 MHz.`,
      // route: "/events/ASRIevents2024 ",
    },
    {
      image: "/publicImage/pic1.jpg",
      heading: "ARSI National Field Day and Hill Topping Contest 2024",
      shortData: `The Crown Club participated in the ARSI National Field Day and Hill Topping Contest 2024, which was held on January 27-28, 2024, under the supervision of Dr. Umesh Shinde. The event's goal was to assess amateur radio communication skills in outdoor settings, therefore teams were required to set up their own radio stations on hilltops. The team consisted of 11 people (8 undergraduate students and 3 seasoned alumni), who chose a hilltop in Satara for their operations. They entered Category A (20m and 40m HF bands) and constructed stacked half-wave dipole antennas using bamboo and insulated copper wires.`,
      route: "/events/ASRIevents2024",
    },
    
    {
      image: "/publicImage/newSlide1.png",
      heading: "ARSI Regional Meet",
      shortData: `Following the successful ARSI regional meeting held in Chennai in early February 2023, a similar gathering was proposed for Mumbai, coordinated by the regional team which includes Jatin (VU2KWJ) and Huzefa (VU2HIT) The aim of these regional meetings is to promote awareness of ARSI’s position as the sole member society from India in IARU-Region 3 and to illustrate how contributions from individual members can enhance ARSI’s interactions with regulatory bodies like WPC and improve its status in the global amateur radio community...`,
      route: "/events/ARSIRegionalMeet"
    },
    {
      image: "/publicImage/CVMumbai.jpg",
      heading: "CQ Mumbai",
      shortData: `The Crown Club participated in the ARSI National Field Day and Hill Topping Contest 2024, which was held on January 27-28, 2024, under the supervision of Dr. Umesh Shinde. The event's goal was to assess amateur radio communication skills in outdoor settings, therefore teams were required to set up their own radio stations on hilltops. The team consisted of 11 people (8 undergraduate students and 3 seasoned alumni), who chose a hilltop in Satara for their operations. They entered Category A (20m and 40m HF bands) and constructed stacked half-wave dipole antennas using bamboo and insulated copper wires, calibrated for optimal performance with a VNA equipment. These antennas were connected to an ICOM 718 transceiver using RG58 A/U coaxial wires.`,
      route: "/events/CQmumbai",
    },
    {
      image: "/publicImage/imageDecoder7.jpg",
      heading: "ISS SSTV Image Decoding by Club Members",
      shortData: `In an exciting global HAM radio initiative, members of our amateur radio club, including Supriya Bhide (VU3ZJY), successfully decoded Slow Scan Television (SSTV) images sent from the International Space Station (ISS). These images were part of the “NASA On The Air” event, commemorating 35 years of human spaceflight through the ARISS (Amateur Radio on the ISS) program.The students employed antennas, SDR receivers, and decoding software to capture and reconstruct these images transmitted from space in real-time. This endeavor required accurate satellite tracking and a strong grasp of radio operations.Both Supriya Bhide and Umesh Sir...`,
      route: "/events/ImageDecoder",
    },
    {
      image: "/publicImage/laptop.png",
      heading: "BeliefSat-0: A Mission by Student Voices Over the Spectrum",
      shortData: `BeliefSat-0 is a student-built satellite developed by the passionate members of CROWN — the Club for Radio Operations and Wireless Network — at K.J. Somaiya Institute of Technology, Mumbai. This mission stands as a tribute to 100 years of Amateur Radio in India and serves the global HAM radio community with pride and purpose.  Launched aboard ISRO's PSLV as part of the POEM (PSLV Orbital Experimental Module) initiative by IN-SPACe, BeliefSat-0 operates in a 350 km orbit at 9° inclination. It functions as a UHF to VHF FM voice repeater and APRS digipeater, enhancing communication capabilities for HAM radio operators worldwide.`,
      // route: "/events/ImageDecoder",
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

  const currentIndexRef = useRef(currentIndex);
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % cardCount;
      scrollToCard(nextIndex);
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, []);

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
                <button
                  className="read-more-btn"
                  onClick={() => router.push(card.route)}
                >
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
            “When everything else fails, amateur radio will still be there—and
            thriving.” — W. Craig Fugate, Former FEMA Administrator
          </p>
        </marquee>
      </div>
    </div>
  );
};

export default Slider;
