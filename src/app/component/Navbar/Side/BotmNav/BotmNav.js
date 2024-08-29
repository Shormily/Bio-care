'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Drawer from './Drawer'; // Import the Drawer component

export default function BottomNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 bg-white shadow-lg p-2 flex justify-around items-center md:hidden">
        <button className="lg:hidden text-[#000] p-2" onClick={toggleDrawer}>
          <FaBars size={24} />
        </button>
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} /> {/* Use the Drawer component */}
      </div>
    </>
  );
}
