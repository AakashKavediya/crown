import './secondScreen.css'
import ScrollFloat from './text/heading/ScrollFloat'
import ScrollReveal from './text/text/ScrollReveal'
const SecondScreen = () => {
    return(
        <div className='secondaryContainer' >
            <div >
                {/* <div id="secondaryHeading">
                <ScrollFloat
                    animationDuration={5}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=70%'
                    scrollEnd='bottom bottom-=60%'
                    stagger={.05}
                    >
                    CROWN: Student-Led Radio Revolution
                </ScrollFloat>
                </div> */}
                <h2 id="secondaryHeading">CROWN: Student-Led Radio Revolution</h2>
                <div id="SecondaryContent">
                {/* <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={10}
                blurStrength={10}
                >
                The Club for Radio Operations and Wireless Network (CROWN) is a student-managed club that seeks to foster the practice of amateur radio communication, radio frequency engineering, and wireless networking among students. It was formed as an attempt to leverage the significance of radio communication technology in modern engineering, emergency services, and global connectivity by serving as a center of technical education and innovative hands-on work in wireless technology.  
                </ScrollReveal>
                 <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={10}
                blurStrength={10}
                >
                CROWN combines theoretical knowledge with hands-on experience by allowing students to create actual radio systems, engage in ham radio communications on national and international levels, and gain insights into sophisticated communication systems.  
                </ScrollReveal> */}
                </div>
                <p id='SecondaryContent' >The Club for Radio Operations and Wireless Network (CROWN) is a student-managed club that seeks to foster the practice of amateur radio communication, radio frequency engineering, and wireless networking among students. It was formed as an attempt to leverage the significance of radio communication technology in modern engineering, emergency services, and global connectivity by serving as a center of technical education and innovative hands-on work in wireless technology.</p>
                <p id='SecondaryContent'>CROWN combines theoretical knowledge with hands-on experience by allowing students to create actual radio systems, engage in ham radio communications on national and international levels, and gain insights into sophisticated communication systems.</p>
            </div>
            <div id="SecondaryBoxContainer">
                <div id="odd">
                    <b>Mission</b>
                    <p>To provide practical training, workshops, and global participation in amateur radio to impart fundamental knowledge and skills in radio communication, RF technology, and emergency response to the students.</p>
                </div>
                <div id="even">
                    <b>Vision</b>
                    <p>The student ham radio club of India which trains students in telecom, space communication, emergency services, and radio-based research projects.</p>
                    <p>Amateur radio (ham radio) acts as an anchor to engineering, emergency communications, and international connectivity.</p>
                </div>
            </div>
        </div>
    )
}

export default SecondScreen
