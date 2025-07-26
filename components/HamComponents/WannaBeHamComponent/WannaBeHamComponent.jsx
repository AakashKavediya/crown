import React from 'react';
import './WannaBeHamComponent.css';

const ASOCExam = () => {
  return (
    <main className="zetaMainContainer">
        <div id="extra">
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      <h2 className="gammaArticleContent deltaTitle ">ASOC EXAM</h2>
      <div className="betaContentWrapper">
        <article className="gammaArticleContent">
          <ol>
            <li>
              <b>Structure and Content of the Exam  </b>
              <ul>
                <li>The ASOC exam is divided into two primary sections:  </li>
                <li>Written Test: Addresses radio theory, electronics, and regulations.  </li>
                <li>Restricted Grade: Consists of 50 questions (25 on radio theory, 25 on regulations), with a duration of 1 hour.</li>
                <li>General Grade: Comprises 100 questions (50 on radio theory, 50 on regulations), lasting 2 hours.  </li>
                <li>Morse Code Test: Only necessary for General Grade, involving sending and receiving at a speed of 8 words per minute.  </li>
                <li>The written test format is objective (multiple choice). </li>
              </ul>
            </li>
            <li>
              <b>Requirements for Passing  </b>
              <ul>
                <li>Restricted Grade: A minimum of 40% is required in each section.</li>
                <li>General Grade: A minimum of 50% is needed in each section, with an aggregate score of 60%, and successful completion of the Morse code test.  </li>
              </ul>
            </li>
            <li>
              <b>Application Procedure </b>
              <ul>
                <li>Applications must be completed online through the SaralSanchar portal.  </li>
                <li>Necessary documents include proof of age, nationality, passport-size photographs, and the designated fee. </li>
                <li>Exams are held at Wireless Monitoring Stations in major urban centers, with frequency varying by location (monthly in metropolitan areas, less frequently in smaller towns).  </li>
              </ul>
            </li>
            <li>
              <b>License Duration and Fees  </b>
              <ul>
                <li>License duration: 20 years (₹1,000) or lifetime (₹2,000).  </li>
                <li>Exam fees: Usually ₹100 per grade, ₹200 for both grades.</li>
              </ul>
            </li>
            <li>
              <b>Exemptions  </b>
              <ul>
                <li>Individuals holding specific professional radio certificates may qualify for the Restricted Grade without taking the exam. </li>
                <li>Engineering graduates with appropriate degrees or diplomas are exempt from Section A of Part I.</li>
              </ul>
            </li>
            <li>
              <b>Licenses for Clubs/Institutions</b>
              <ul>
              <li>Organizations (including clubs, schools, and colleges) can obtain licenses if a designated office-bearer possesses a General Grade license.  </li>
              </ul>
            </li>
            <li>
              <b>Contribution to Society</b>
              <ul>
                <li>Highlight the significance of amateur radio in emergency response, scientific research, and community service. </li>
              </ul>
            </li>
          </ol>
          <br />
        </article>
      </div>
    </main>
  );
};

export default ASOCExam;