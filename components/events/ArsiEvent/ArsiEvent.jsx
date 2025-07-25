import React from 'react';
import './ArsiEvent.css'; // This will contain the CSS

const ArsiEvent = () => {
  return (
    <main>
        <div id="extra">
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      <h2 id="Pagetitle">ARSI National Field Day & Hill Topping Contest 2025</h2>
      
      <div id="content">
        <div style={{ overflow: 'hidden' }}>
          <img id="Image" src="https://aakashkavediya.github.io/NLLproject-1/pics/arsi_2025.jpg" alt="Loading..." />
          <p>The Crown Club participated in the ARSI National Field Day and Hill Topping Contest 2025, a 31-hour event that encourages hands-on amateur radio communication in isolated locations. This annual event encourages ham radio operators to enhance their technical and communication skills while mimicking real-world emergency circumstances.
          The crew employed long wire antennas for HF bands (40m, 20m, and 15m) with CW, SSB, Digital, and QRP modes to make contacts across the country. To address previous power supply issues, they used a DC to DC power boost converter, which provided constant performance throughout the game.</p>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <img id="ImageOdd" src="https://aakashkavediya.github.io/NLLproject-1/pics/arsipic.jpg" alt="Loading..." />
          <p>Satellite tracking was a major feature of the event, with the crew successfully using QFH and Yagi antennas to follow NOAA, ISS, and other LEO satellites, providing crucial insights into space communication. Furthermore, a Republic Day Flag Hoisting Ceremony was held to instill a sense of national pride and unity in the participants.
          The ARSI National Field Day and Hill Topping Contest provided an exciting chance for students to participate in amateur radio activities, satellite tracking, and technical tests in a tough outdoor setting. The team made significant progress by expanding their successful connections, overcoming earlier challenges, and improving their skills across many communication modes.</p>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <img id="Image" src="https://aakashkavediya.github.io/NLLproject-1/pics/arsi_flaghosting.jpg" alt="Loading..." />
          <p>While the team celebrated its accomplishments, the event also highlighted areas for development, particularly in VHF and UHF band transmissions. These observations will guide the club's approach to future events, encouraging continued talent development and technological breakthroughs.
          The ARSI National Field Day and Hill Topping Contest remains a vital event that combines teaching, experimentation, and invention, inspiring participants to excel in amateur radio techniques.</p>
        </div>
      </div>
    </main>
  );
};

export default ArsiEvent;