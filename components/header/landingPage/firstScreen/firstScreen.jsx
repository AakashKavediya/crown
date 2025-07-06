'use client'
import './firstScreen.css';
import './card/swapCard'
import CardSwap, { Card } from './card/swapCard';
import TypingText from './TypingText.jsx';
const FirstScreen = () => {
    return(
        <div id='Container' >
            <main>
                <div id="mainContent">
                <div id='mainHeadingg' >
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
            >
                <Card>
                <h3 id='cardHeading' >#Heading Here</h3>
                <p id='cardPara'>One Line of Content can be written here</p>
                <img id='cardImage' src="https://i.pinimg.com/736x/df/e5/7f/dfe57f37b1fe72d384235efb042dd3cd.jpg" alt="" />
                </Card>
                 <Card>
                <h3 id='cardHeading' >#Heading Here</h3>
                <p id='cardPara'>One Line of Content can be written here</p>
                <img id='cardImage' src="https://i.pinimg.com/736x/06/81/ba/0681ba803e920177b44ea9dcd9f2cdb4.jpg" alt="" />
                </Card>
                 <Card>
                <h3 id='cardHeading' >#Heading Here</h3>
                <p id='cardPara'>One Line of Content can be written here</p>
                <img id='cardImage' src="https://i.pinimg.com/736x/60/a6/be/60a6bea192a748d30823ddad1571825d.jpg" alt="" />
                </Card>
               
            </CardSwap>
                </div>
                </div>
            </main>
        </div>
    )
}

export default FirstScreen
