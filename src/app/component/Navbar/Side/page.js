'use client';
import { useState } from 'react';
import { FaHome, FaUserFriends, FaCog, FaEnvelope } from 'react-icons/fa';
import { FaCapsules, FaFemale, FaHeartbeat, FaSyringe, FaBaby, FaTooth, FaVial, FaBacon, FaHandsWash, FaLaptopMedical, FaPrescriptionBottleAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', icon: <FaCapsules />, label: 'OTC Medicine', className: "text-blue-600 ml-5" },
    { href: '/friends', icon: <FaFemale />, label: 'Women Choice', className: "text-pink-600" },
    { href: '/settings', icon: <FaHeartbeat />, label: 'Sexual Wellness', className: "text-red-600" },
    { href: '/messages', icon: <FaSyringe />, label: 'Diabetic Care', className: "text-green-600" },
    { href: '/messages', icon: <FaBaby />, label: 'Baby Care', className: "text-yellow-600" },
    { href: '/messages', icon: <FaTooth />, label: 'Dental Care', className: "text-blue-600" },
    { href: '/messages', icon: <FaVial />, label: 'Supplement', className: "text-purple-600" },
    { href: '/messages', icon: <FaBacon />, label: 'Diapers', className: "text-teal-600" },
    { href: '/messages', icon: <FaHandsWash />, label: 'Personal Care', className: "text-orange-600" },
    { href: '/messages', icon: <FaLaptopMedical />, label: 'Devices', className: "text-blue-600" },
    { href: '/messages', icon: <FaPrescriptionBottleAlt />, label: 'Prescription Medicine', className: "text-red-600" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`flex flex-col bg-[#f9fafb] h-screen overflow-y-auto transition-width duration-300 ease-in-out ${
          isOpen ? 'w-52' : 'w-16'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 focus:outline-none hover:bg-green-700 hover:text-white"
        >
          ☰
        </button>
        <nav className="flex flex-col space-x-4 mt-4">
          {menuItems.map((item, index) => (
            <Link href={item.href} key={index} legacyBehavior>
              <a className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${item.className}`}>
                <span className="text-2xl">{item.icon}</span>
                <span
                  className={`ml-2 transition-opacity text-[#000] duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-6 flex-grow">
        <h1 className="text-2xl">Main Content Area</h1>
        <p>This is the main content area and write some thing.</p>
      </div>
    </div>
  );
}
