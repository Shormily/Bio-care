"use client"
import Image from "next/image";
import Navbar from "./component/Navbar/page";
import Drawer from "./component/Navbar/Side/page";
import Footer from "./component/Navbar/Footer/Footer";
import BotmNav from "./component/Navbar/Side/BotmNav/BotmNav";
import ScrollToTop from "react-scroll-to-top";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Home() {
  return (
    <>
     
     
     
      <Drawer />
      
    
      
      <ScrollToTop
   style={{
    boxShadow: "none",
    backgroundColor: "#023020",
    borderRadius: "50%",
    right: 20,
    zIndex: 20,
    
  }}
  className="my-12 outline outline-2 outline-[#F0ECE5]"
  component={
    <MdKeyboardArrowUp
      style={{ fontSize: "20px", margin: "0 auto", color: "#fff" }}
      size={28}
    />
  }
   smooth
   top={500} />
   
    </>
  );
}
