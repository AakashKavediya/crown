
import './Image_Decoding.css'
const Image_Decoding = () => {
    return(
        <div id='Image_Decoding_Container'>
            <div id="extra">
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <h1>ISS SSTV Image Decoding by Club Members</h1>
           
            <p>In an exciting global HAM radio initiative, members of our amateur radio club, including Supriya Bhide (VU3ZJY), successfully decoded Slow Scan Television (SSTV) images sent from the International Space Station (ISS). These images were part of the “NASA On The Air” event, commemorating 35 years of human spaceflight through the ARISS (Amateur Radio on the ISS) program.The students employed antennas, SDR receivers, and decoding software to capture and reconstruct these images transmitted from space in real-time. This endeavor required accurate satellite tracking and a strong grasp of radio operations.Both Supriya Bhide and Umesh Sir ( VU3CDI ), who independently decoded the images, received official SSTV certificates from ARISS to recognize their successful reception. This achievement adds to the club's many proud moments in participating in real-world space communication experiments.</p>
             {/* <div id="imageTab">
                <img src="/publicImage/imageDecoder1.jpg" alt="loading..." />
                <img src="/publicImage/imageDecoder2.jpg" alt="loading..." />
            </div> */}
            <div id="imageTab">
                <img src="/publicImage/imageDecoder1.jpg" alt="loading..." />
                <img src="/publicImage/imageDecoder2.jpg" alt="loading..." />
                <img src="/publicImage/imageDecoder3.jpg" alt="loading..." />
                <img src="/publicImage/imageDecoder4.jpg" alt="loading..." />
            </div>
            
              <div id="imageTab">
                <p>In another proud moment for our amateur radio club, members successfully received and decoded Slow Scan Television (SSTV) images transmitted directly from the International Space Station (ISS) during the ARISS (Amateur Radio on the International Space Station) event commemorating the 50th anniversary of the Apollo-Soyuz mission and the 40th anniversary of the STS-51F mission.</p>
                <img src="/publicImage/imageDecoder5.jpg" alt="loading..." />
                <img src="/publicImage/imageDecoder6.jpg" alt="loading..." />
            </div>
            <div id="mergeImage">
                <div id="mergeContect">
                    <p>Among those who took part in this exciting global radio event was New Leap Labs (VU2CWN), where the image was received using a Baofeng UV-5R handheld transceiver and decoded with the Robot36 app on July 20, 2025, during a scheduled ISS pass. The SSTV signal, transmitted from the Russian segment of the ISS, was captured in real time using precise satellite tracking and amateur radio techniques.</p>
                    <p>This hands-on activity involved not only technical skills in radio reception and image decoding but also a deeper connection with the history of human spaceflight. In recognition of the successful image reception, an official SSTV Award Certificate (No. 282703) was issued by ARISS, adding yet another achievement to our club’s growing legacy in space communication initiatives.</p>
                </div>
                <div id="mergeImg">
                    <img src="/publicImage/imageDecoder7.jpg" alt="loading..." />
                </div>
            </div>
        </div>
    )
}

export default Image_Decoding;