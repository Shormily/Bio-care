'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaCapsules, FaFemale, FaHeartbeat, FaSyringe, FaBaby, FaTooth, FaVial, FaBacon, FaHandsWash, FaLaptopMedical, FaPrescriptionBottleAlt } from 'react-icons/fa';

import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";


export default function Sidebar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const menus = [
      { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
      { name: "Profile", link:"/",  icon: TbReportAnalytics, },
      { name: "Manage All Orders", link: "/", icon: FiMessageSquare,  },
      { name: "Add Cards", link: "/", icon: FiShoppingCart, margin: true},
     
      { name: "Home", link: "/", icon: AiOutlineUser },
      { name: "profile-edit", icon: FiFolder ,margin: true},
      { name: "Saved", icon: AiOutlineHeart, },

  ];
    const [open, setOpen] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    return (
      <>
      
      <div className="dash-design bg-[#14532d] sidebr banner-text overflow-x-auto h-full">

<div className="flex  gap-6   h-full ">

    <div
        className={`  min-h-screen ${open ? "w-72" : "w-16"
            } duration-500 text-white px-5`}
    >

        <div className="py-3 flex justify-end ">

            <HiMenuAlt3
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
            />
        </div>

        {/* <div  className="sm:hidden z-10">
<label className="hamburger" >
<input className="hidden" type="checkbox" />
<svg onClick={handleNav} viewBox="0 0 32 32">
<path
className="line line-top-bottom"
d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
/>
<path className="line" d="M7 16 27 16" />
</svg>

</label>
</div> */}
        <div className="flex flex-col gap-4 relative ">
            {/* {menus?.map((menu, i) => (
                <Link
                  href={menu?.link}
                    key={i}
                    className={` ${menu?.margin && "mt-5"
                        } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#f2bc7a29] rounded-md`}
                >
                    <div>{React.createElement(menu?.icon, { size: "25" })} </div>
                    <h2
                        style={{
                            transitionDelay: `${i + 3}00ms`,
                        }}
                        className={`whitespace-pre text-[17px] duration-500 ${!open && "opacity-0 translate-x-28  overflow-hidden"
                            }`}
                    >
                        {menu?.name}
                    </h2>
                    <h2
                        className={`${open && "hidden"
                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                        {menu?.name}
                    </h2>
                </Link>
            ))} */}
                            {menus?.map((menu, i) => {
                                    return (
                                        <>
                                            <div className='px-12 flex justify-between '>
                                                <p className='mb-4 font-medium'>{menu?.name}</p>
                            
                                            </div>
                                            <Link href="/womens-choice">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaFemale className="text-pink-600" />
            <span>Women's Choice</span>
          </p>
        </Link>

                                        </>
                                    )

                                })}
        </div>
    </div>

</div>
</div>
            
            {/* naves */}
            <div className={`fixed inset-y-0 left-0 bg-white text-gray-800 w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">MedEasy</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          ☰
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-2">
        <Link href="/">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaCapsules className="text-blue-600" />
            <span>OTC Medicine</span>
          </p>
        </Link>
        <Link href="/womens-choice">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaFemale className="text-pink-600" />
            <span>Women's Choice</span>
          </p>
        </Link>
        <Link href="/sexual-wellness">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaHeartbeat className="text-red-600" />
            <span>Sexual Wellness</span>
          </p>
        </Link>
        <Link href="/diabetic-care">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaSyringe className="text-green-600" />
            <span>Diabetic Care</span>
          </p>
        </Link>
        <Link href="/baby-care">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaBaby className="text-yellow-600" />
            <span>Baby Care</span>
          </p>
        </Link>
        <Link href="/dental-care">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaTooth className="text-blue-600" />
            <span>Dental Care</span>
          </p>
        </Link>
        <Link href="/supplement">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaVial className="text-purple-600" />
            <span>Supplement</span>
          </p>
        </Link>
        <Link href="/diapers">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaBacon className="text-teal-600" />
            <span>Diapers</span>
          </p>
        </Link>
        <Link href="/personal-care">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaHandsWash className="text-orange-600" />
            <span>Personal Care</span>
          </p>
        </Link>
        <Link href="/devices">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaLaptopMedical className="text-blue-600" />
            <span>Devices</span>
          </p>
        </Link>
        <Link href="/prescription-medicine">
          <p className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <FaPrescriptionBottleAlt className="text-red-600" />
            <span>Prescription Medicine</span>
          </p>
        </Link>
      </nav>
    </div>
      </>
    
  );
}
