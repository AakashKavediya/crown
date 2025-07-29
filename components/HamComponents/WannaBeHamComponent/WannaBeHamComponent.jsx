import React from 'react';
import './WannaBeHamComponent.css';

const ASOCExam = () => {
  return (
    <main className="zetaMainContainer">
        <div id="extra">
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      <h2 className="gammaArticleContent" style={{fontWeight:900}} > <b> ASOC EXAM</b></h2><br />
      <div className="betaContentWrapper">
        <article className="gammaArticleContent">
          <p>The examination for ham radio licensing is referred to as the Amateur Station Operator’s Certificate Examination (ASOC examination). This exam is administered by the Wireless Planning and Coordination (WPC) division of the Ministry of Communications in New Delhi at various Wireless Monitoring Stations across the nation.</p>
          <p>The Amateur Station Operator Certificate enables people to establish and manage personal radio stations for leisure, experimentation, or emergency communication purposes HAM operators play a crucial role in emergency communication and disaster management, offering supplementary communication assistance in times of crisis. To obtain this certificate, candidates must successfully complete an exam focused on radio operations and regulations, which guarantees that operators are well-informed and able to comply with WPC and ITU standards. </p>
          <br />
          <b style={{fontWeight:600}} >Categories of Amateur Licenses in India  </b>
          <p>Amateur Wireless Telegraph Station Licence, Restricted Grade.   </p>
          <p>Amateur Wireless Telegraph Station Licence, General Grade.  </p>
          <b style={{fontWeight:600}}>Who is eligible for Amateur licenses in India?  </b>
          <p>The Amateur license will be issued to citizens of India above 12 years of age who pass the ASOC exam.   </p>
          <p>The holders of the Certificate of Proficiency like Radio Communication Operators </p>
          <p>General or Radio Telegraph Operators First or Second Class Certificate are eligible for Restricted Grade Amateur license without writing any exams.  </p>
          <p>Applicants holding Degree in Engineering/Science or Diploma in Engineering and having studied Electronics or Telecommunications are exempted from appearing in Section A of Part I of the test.  </p>
          <p>Licences are also given to Radio Club, society, school, college or any institution interested in this hobby, provided that their office-bearer has a General Licence. </p>
          <br />
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
         <div style={{ fontWeight: 100 }}>
  <b>Useful Links: </b>
  <ul>
    <p><a style={{ fontWeight: 100, textDecoration: 'none' }} href="https://www.eservices.dot.gov.in/sites/default/files/user-mannual/ASOC%20Manual%20%282%29.pdf">Registration Guide</a><br /></p>
    <p><a style={{ fontWeight: 100, textDecoration: 'none' }} href="https://www.saralsanchar.gov.in/index.php">License Application Portal</a><br /></p>
    <p><a style={{ fontWeight: 100, textDecoration: 'none' }} href="https://bharatkosh.gov.in/">Payment Portal</a><br /></p>
    <p><a style={{ fontWeight: 100, textDecoration: 'none' }} href="https://www.saralsanchar.gov.in/circular/licenses_issued/FAQ_for_HAM.pdf">HAM FAQ'S</a><br /></p>
  </ul>
</div>



        </article>
      </div>
    </main>
  );
};

export default ASOCExam;