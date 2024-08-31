'use client';
import { useState } from 'react';
import { FaCapsules, FaFemale, FaHeartbeat, FaSyringe, FaBaby, FaTooth, FaVial, FaBacon, FaHandsWash, FaLaptopMedical, FaPrescriptionBottleAlt } from 'react-icons/fa';
import Link from 'next/link';
import { RiArrowRightSLine } from "react-icons/ri";
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import Banner from '../Banner/Banner';
import ProductCard from '../ProductCard/ProductCard';

export default function Drawer() {
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
  const products = [
    {
      name: 'Pantonix',
      genericName: 'Pantoprazole',
      manufacturer: 'Incepta Pharmaceuticals Ltd.',
      price: 6.3,
      originalPrice: 7.0,
      image: '/asset/pantonix.jpg',
    },
    {
      name: 'Fexo',
      genericName: 'Fexofenadine Hydrochloride',
      manufacturer: 'Square Pharmaceuticals PLC.',
      price: 8.1,
      originalPrice: 9.0,
      image: '/asset/fexo.jpg',
    },
    {
      name: 'Neuro-B',
      genericName: 'Vitamin B1 + B6 + B12',
      manufacturer: 'Square Pharmaceuticals PLC.',
      price: 270.0,
      originalPrice: 300.0,
      image: '/asset/neuro-b.jpg',
    },
    {
      name: 'Maxpro',
      genericName: 'Esomeprazole Magnesium Trihydrate',
      manufacturer: 'Renata Limited',
      price: 6.3,
      originalPrice: 7.0,
      image: '/asset/maxpro.jpg',
    },
  ];

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div className=' lg:w-[16%]'>
        <div className='hidden lg:block   bg-[#f0fdf4] overflow-auto scroll-y-auto rounded-lg m-4 p-3  h-[40rem] scroll-mr-6 '>
      {/* mx-auto w-64 h-[40rem] overflow-auto scroll-auto */}
        <Swiper
          direction={'vertical'}
          slidesPerView={'auto'}
          freeMode={true}
          scrollbar={true}
          mousewheel={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
          className=" h-screen"
        >
          <SwiperSlide>
            <nav className="flex flex-col gap-4 space-y-2 mt-4">
              {menuItems.map((item, index) => (
                <Link href={item.href} key={index} legacyBehavior>
                  <a className={`flex items-center hover:bg-[#ecfccb] rounded-md  ${item.className}`}>
                    <span className="text-[20px] m-1  ">{item.icon}</span>
                    <span className='pl-2 text-[#000]'>{item.label}</span>
                    <span className="ml-auto"><RiArrowRightSLine size={25} /></span>
                  </a>
                </Link>
              ))}
            </nav>
          </SwiperSlide>
        </Swiper>
      </div></div>
      

      {/* Main Content */}
      <div className="p-6  md:w-full sm:w-full lg:w-[84%]">
        <h1 className="text-2xl">Main Content Area</h1>
        <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
        <Banner/>
      </div>
    </div>
  );
}
