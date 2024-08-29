import Image from "next/image";
import Navbar from "./component/Navbar/page";
import Drawer from "./component/Navbar/Side/page";
import Footer from "./component/Navbar/Footer/Footer";
import BotmNav from "./component/Navbar/Side/BotmNav/BotmNav";

export default function Home() {
  return (
    <>
     
      <Navbar />
     
      <Drawer />
      <BotmNav/>
      <Footer/>
    </>
  );
}
