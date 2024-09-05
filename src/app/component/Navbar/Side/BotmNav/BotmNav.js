'use client';
import { RiMenu2Line } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from 'react';

import { BsBagHeart } from "react-icons/bs";
import Drawer from './Drawer'; // Import the Drawer component
import { FaRegUser } from "react-icons/fa6";

export default function BottomNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 bg-white shadow-lg p-2 flex justify-around items-center z-20">
        <button className="lg:hidden text-[#000] p-2 z-20" onClick={toggleDrawer}>
           <RiMenu2Line size={24}/> 
        </button>
        <button className="lg:hidden text-[#000] p-2">
           <IoHomeOutline size={24}/> 
        </button>
        <button className="lg:hidden text-[#000] p-2">
           <BsBagHeart size={24}/> 
        </button>
        <button className="lg:hidden text-[#000] p-2">
           <FaRegUser size={24}/> 
        </button>
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} /> {/* Use the Drawer component */}
      </div>
    </>
  );
}
