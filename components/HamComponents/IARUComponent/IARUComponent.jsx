import './IARUComponent.css'
import React from 'react';

const IARUInfo = () => {
  return (
    <main>
      <div id="extra">
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>

      <article className="contentSection">
        <h1 id='IARUheading' >IARU</h1>
        <br />
        <p>The IARU is the worldwide organization that represents amateur radio operators. It was founded in 1925 and, since then, the aim of IARU has been the protection and promotion of amateur radio interests, frequency coordination, and support of radio spectrum for non-commercial, experimental, and emergency communication.</p>
        <br />
        <p>The amateur radio community-regional subdivisions of IARU are:</p>
        <p>IARU Region 1 - Europe, Africa, the Middle East and Northern Asia</p>
        <p>IARU Region 2 - North and South Americas</p>
        <p>IARU Region 3 - Asia-Pacific, including India, Japan, Australia, and Southeast Asia.</p>
        <p>Policies in each region are made to be in alignment with ITU Regulations in order to have smooth operation and fair use of radio frequencies across the globe.
          The band plan for the International Amateur Radio Union (IARU) Region 3 offers a suggested range of frequency divisions for amateur (ham) radio operators in these nations. These divisions aim to reduce interference, encourage effective spectrum use, and align amateur radio operations throughout the region.
        </p>
      </article>

      <h2 style={{textAlign: "center", marginBottom: "1rem"}}>ITU Band Plan</h2>
      <table className="frequencyTable">
        <thead>
          <tr>
            <th>ITU Band</th>
            <th>Band Name</th>
            <th>Lower End</th>
            <th>Upper End</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5, LF</td>
            <td>2200 metres</td>
            <td>135.7 kHz</td>
            <td>137.8 kHz</td>
          </tr>
          <tr>
            <td>6, MF</td>
            <td>630 metres</td>
            <td>472 kHz</td>
            <td>479 kHz</td>
          </tr>
          <tr>
            <td>6, MF</td>
            <td>160 metres</td>
            <td>1.8 MHz</td>
            <td>2.0 MHz</td>
          </tr>
          <tr>
            <td>7, HF</td>
            <td>80 metres</td>
            <td>3.5 MHz</td>
            <td>3.9 MHz</td>
          </tr>
          <tr>
            <td>7, HF</td>
            <td>60 metres</td>
            <td>5.351.5 MHz</td>
            <td>5.366.5 MHz</td>
          </tr>
          <tr>
            <td>7, HF</td>
            <td>40 metres</td>
            <td>7.0 MHz</td>
            <td>7.3 MHz</td>
          </tr>
          <tr>
            <td>7, HF</td>
            <td>30 metres</td>
            <td>10.1 MHz</td>
            <td>10.15 MHz</td>
          </tr>
          <tr>
            <td>7, HF</td>
            <td>20 metres</td>
            <td>14 MHz</td>
            <td>14.35 MHz</td>
          </tr>
          <tr>
            <td>7, HF</td>
            <td>17 metres</td>
            <td>18.068 MHz</td>
            <td>18.168 MHz</td>
          </tr>
          <tr>
            <td>7, HF</td>
            <td>15 metres</td>
            <td>21 MHz</td>
            <td>21.45 MHz</td>
          </tr>
          <tr>
            <td>7, HF</td>
            <td>12 metres</td>
            <td>24.89 MHz</td>
            <td>24.99 MHz</td>
          </tr>
          <tr>
            <td>7, HF</td>
            <td>10 metres</td>
            <td>28 MHz</td>
            <td>29.7 MHz</td>
          </tr>
          <tr>
            <td>8, VHF</td>
            <td>6 metres</td>
            <td>50 MHz</td>
            <td>54 MHz</td>
          </tr>
          <tr>
            <td>8, VHF</td>
            <td>2 metres</td>
            <td>144 MHz</td>
            <td>148 MHz</td>
          </tr>
          <tr>
            <td>9, UHF</td>
            <td>70 centimetres</td>
            <td>434 MHz</td>
            <td>438 MHz</td>
          </tr>
          <tr>
            <td>9, UHF</td>
            <td>23 centimetres</td>
            <td>1240 MHz</td>
            <td>1300 MHz</td>
          </tr>
        </tbody>
      </table>

      <article className="contentSection">
        <p>Reasons for the Frequency Allocations in Region 3</p>
        <p>The primary purpose of having designated frequency allocations within each ITU region is to effectively manage the global radio spectrum and minimize interference among various users and services. Each region has distinct needs for broadcasting, commercial, and governmental spectrum, which can differ based on geography, population density, and current spectrum utilization.</p>
        <br />
        <p>IARU Region 3 band plans are created to:</p>
        <ul className="featureList">
          <li>Facilitate coordination of amateur radio activities across multiple countries, thereby reducing cross-border interference.</li>
          <li>Encourage alignment with other ITU regions whenever feasible, while addressing local and regional specifications.</li>
          <li>Offer direction for national regulators and amateur operators regarding preferred frequencies for various modes (CW, SSB, digital, satellite, etc.).</li>
          <li>Enhance international collaboration in emergency communications and contests.</li>
        </ul>
      </article>
    </main>
  );
};

export default IARUInfo;