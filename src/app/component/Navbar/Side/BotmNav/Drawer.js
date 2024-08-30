import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import { RiArrowRightSLine } from "react-icons/ri";
import { FaCapsules, FaFemale, FaHeartbeat, FaSyringe, FaBaby, FaTooth, FaVial, FaBacon, FaHandsWash, FaLaptopMedical, FaPrescriptionBottleAlt } from 'react-icons/fa';

export default function Drawer({ isOpen, onClose }) {
  const menuItems = [
    { href: '/', icon: <FaCapsules />, label: 'OTC Medicine', className: "text-blue-600 ml-2 " },
    { href: '/friends', icon: <FaFemale />, label: 'Women Choice', className: "text-pink-600" },
    { href: '/settings', icon: <FaHeartbeat />, label: 'Sexual Wellness', className: "text-red-600" },
    { href: '/messages', icon: <FaSyringe />, label: 'Diabetic Care', className: "text-green-600" },
    { href: '/messages', icon: <FaBaby />, label: 'Baby Care', className: "text-yellow-600" },
    { href: '/messages', icon: <FaTooth />, label: 'Dental Care', className: "text-blue-600" },
    { href: '/messages', icon: <FaVial />, label: 'Supplement', className: "text-purple-600" },
    { href: '/messages', icon: <FaBacon />, label: 'Diapers', className: "text-teal-600" },
    { href: '/messages', icon: <FaHandsWash />, label: 'Personal Care', className: "text-orange-600"},
    { href: '/messages', icon: <FaLaptopMedical />, label: 'Devices', className: "text-blue-600 " },
    { href: '/messages', icon: <FaPrescriptionBottleAlt />, label: 'Prescription Medicine', className: "text-red-600" },
  ];
  return (
    <>
      {/* Overlay */}
      <Transition show={isOpen} as="div">
        <Transition.Child
          as="div"  // Ensure we render a `div` element instead of a `Fragment`
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose}
        />
      </Transition>

      {/* Drawer */}
      <Transition show={isOpen} as="div">
        <Transition.Child
          as="div"  // Ensure we render a `div` element instead of a `Fragment`
          enter="transition-transform duration-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-300"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="fixed inset-y-0 left-0 w-72 bg-white shadow-md z-50"
        >
          <div className="p-4 flex items-center justify-between border-b">
            <div className="flex items-center space-x-2">
            <Image
                  src='/asset/logo.png'
                  width={50}
                  height={50}
                  alt="error image"
                  className="py-2"
                />   
              <span className="text-lg font-semibold">BioCare</span>
            </div>
            <button onClick={onClose}>
              <RxCross2 className="h-6 w-6 text-red-700" />
            </button>
          </div>
          <div className="p-4 text-gray-600">
            <p className="font-bold text-blue-600 mb-4">BioCare Cash: 0 Taka</p>
            <h3 className="text-md font-semibold mb-2">Categories</h3>
            <ul className="space-y-2">
            {menuItems.map((item, index) => (
                <Link href={item.href} key={index} legacyBehavior>
                  <a className={`flex items-center hover:bg-[#ecfccb] rounded-md  ${item.className}`}>
                    <span className="text-[20px] m-1  ">{item.icon}</span>
                    <span className='pl-2 text-[#000]'>{item.label}</span>
                    <span className="ml-auto"><RiArrowRightSLine size={25} /></span>
                  </a>
                </Link>
              ))}
           
             
            </ul>
          </div>
          <div className="p-4 flex justify-center space-x-4 border-t mt-auto">
            <a href="#" className="text-gray-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-500"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-gray-500"><i className="fab fa-linkedin"></i></a>
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
}
