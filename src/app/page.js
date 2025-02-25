"use client"
import Image from "next/image";
import ScrollToTop from "react-scroll-to-top";
import { MdKeyboardArrowUp } from "react-icons/md";
import Drawer from "./component/Navbar/Side/page";
// import Allsection from "./component/Navbar/allsection";
// import Drawer from "@/component/Navbar/Side/page";

export default function Home() {
  return (
    <div className="m-auto max-w-[1800px]">
      <Drawer />
      
     {/* <Allsection/> */}
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
   
    </div>
  );
}
