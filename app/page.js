import Image from "next/image";
import './page.css'
import Header from "@/components/header/header";
import FirstScreen from "@/components/header/landingPage/firstScreen/firstScreen";
import SecondScreen from "@/components/header/landingPage/secondScreen/secondScreen";
import ThirdScreen from "@/components/header/landingPage/thirdScreen/thirdScreen";
import Footer from "@/components/ContactComponent/footer/footer";
export default function Home() {
  return (
    <div id="mainContainer" >
      <Header />
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <Footer />
    </div>
  );
}
