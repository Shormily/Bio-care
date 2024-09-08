"use client";
import { useState } from "react";
import {
  FaCapsules,
  FaFemale,
  FaHeartbeat,
  FaSyringe,
  FaBaby,
  FaTooth,
  FaVial,
  FaBacon,
  FaHandsWash,
  FaLaptopMedical,
  FaPrescriptionBottleAlt,
} from "react-icons/fa";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Banner from "../Banner/Banner";
import ProductCard from "../ProductCard/ProductCard";
// swiper slider start
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
// swiper end

export default function Drawer() {
  const menuItems = [
    {
      href: "/",
      icon: <FaCapsules />,
      label: "OTC Medicine",
      className: "text-blue-600 ml-2 ",
    },
    {
      href: "/friends",
      icon: <FaFemale />,
      label: "Women Choice",
      className: "text-pink-600",
    },
    {
      href: "/settings",
      icon: <FaHeartbeat />,
      label: "Sexual Wellness",
      className: "text-red-600",
    },
    {
      href: "/messages",
      icon: <FaSyringe />,
      label: "Diabetic Care",
      className: "text-green-600",
    },
    {
      href: "/messages",
      icon: <FaBaby />,
      label: "Baby Care",
      className: "text-yellow-600",
    },
    {
      href: "/messages",
      icon: <FaTooth />,
      label: "Dental Care",
      className: "text-blue-600",
    },
    {
      href: "/messages",
      icon: <FaVial />,
      label: "Supplement",
      className: "text-purple-600",
    },
    {
      href: "/messages",
      icon: <FaBacon />,
      label: "Diapers",
      className: "text-teal-600",
    },
    {
      href: "/messages",
      icon: <FaHandsWash />,
      label: "Personal Care",
      className: "text-orange-600",
    },
    {
      href: "/messages",
      icon: <FaLaptopMedical />,
      label: "Devices",
      className: "text-blue-600 ",
    },
    {
      href: "/messages",
      icon: <FaPrescriptionBottleAlt />,
      label: "Prescription Medicine",
      className: "text-red-600",
    },
  ];
  const products = [
    {
      name: "Pantonix",
      genericName: "Pantoprazole",
      manufacturer: "Incepta Pharmaceuticals Ltd.",
      price: 6.3,
      originalPrice: 7.0,
      image: "/asset/pantonix.jpg",
    },
    {
      name: "Fexo",
      genericName: "Fexofenadine Hydrochloride",
      manufacturer: "Square Pharmaceuticals PLC.",
      price: 8.1,
      originalPrice: 9.0,
      image: "/asset/fexo.jpg",
    },
    {
      name: "Neuro-B",
      genericName: "Vitamin B1 + B6 + B12",
      manufacturer: "Square Pharmaceuticals PLC.",
      price: 270.0,
      originalPrice: 300.0,
      image: "/asset/neuro-b.jpg",
    },
    {
      name: "Maxpro",
      genericName: "Esomeprazole Magnesium Trihydrate",
      manufacturer: "Renata Limited",
      price: 6.3,
      originalPrice: 7.0,
      image: "/asset/maxpro.jpg",
    },
  ];

  return (
    <div className="flex space-x-2 m-4">
    {/* Sidebar */}
    <div className="lg:w-[21%] hidden lg:block">
      <div className="bg-[#f0fdf4] p-2 overflow-auto scroll-y-auto rounded-lg h-screen">
        <Swiper
          slidesPerView={"auto"}
          freeMode={true}
          scrollbar={true}
          mousewheel={true}
          className="h-screen mx-4"
        >
          <SwiperSlide>
            <nav className="flex flex-col gap-4 space-y-2 mt-4">
              {menuItems.map((item, index) => (
                <Link href={item.href} key={index} legacyBehavior>
                  <a
                    className={`flex items-center hover:bg-[#ecfccb] rounded-md ${item.className}`}
                  >
                    <span className="text-[20px] m-1 inline-block">
                      {item.icon}
                    </span>
                    <span className="pl-2 text-[#000] inline-block whitespace-nowrap">
                      {item.label}
                    </span>
                    <span className="ml-auto">
                      <RiArrowRightSLine size={25} />
                    </span>
                  </a>
                </Link>
              ))}
            </nav>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  
    {/* Main Content */}
    <div className="lg:max-w-[79%] mx-8">
      {/* Swiper start */}
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="rounded-xl xs:mr-8"
      >
        <SwiperSlide>
          <div className="rounded-2xl w-full p-3"> {/* Added padding here */}
            <Image
              src="/asset/bio.png"
              objectFit="cover"
              alt="error image"
              height={1500}
              width={1500}
              className="w-full xs:h-auto md:h-[520px]"
            />
          </div>
        </SwiperSlide>
  
        <SwiperSlide>
          <div className="rounded-2xl w-full p-3"> {/* Added padding here */}
            <Image
              src="/asset/se.png"
              objectFit="cover"
              alt="error image"
              height={1500}
              width={1500}
              className="w-full xs:h-auto md:h-[520px]"
            />
          </div>
        </SwiperSlide>
  
        <SwiperSlide>
          <div className="rounded-2xl w-full p-3"> {/* Added padding here */}
            <Image
              src="/asset/t.png"
              objectFit="cover"
              alt="error image"
              height={1500}
              width={1500}
              className="w-full xs:h-auto md:h-[520px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Swiper end */}
  
      <Banner />
    </div>
  </div>
  

  );
}

//
