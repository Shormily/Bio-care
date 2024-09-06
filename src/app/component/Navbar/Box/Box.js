import React from 'react';
import { FcViewDetails } from "react-icons/fc";
import { FcCallback, FcContacts, FcConferenceCall } from "react-icons/fc";
import { FaCapsules, FaFemale, FaHeartbeat, FaSyringe, FaBaby, FaTooth, FaVial, FaBacon, FaHandsWash, FaLaptopMedical, FaPrescriptionBottleAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation,Autoplay } from 'swiper/modules';

const Box = () => {
    const menuItems = [
        { href: '/', icon: <FaCapsules size={45} />, label: 'OTC Medicine', className: "text-blue-600" },
        { href: '/friends', icon: <FaFemale size={45} />, label: 'Women Choice', className: "text-pink-600" },
        { href: '/settings', icon: <FaHeartbeat size={45} />, label: 'Sexual Wellness', className: "text-red-600" },
        { href: '/messages', icon: <FaSyringe size={45} />, label: 'Diabetic Care', className: "text-green-600" },
        { href: '/messages', icon: <FaBaby size={45} />, label: 'Baby Care', className: "text-yellow-600" },
        { href: '/messages', icon: <FaTooth size={45} />, label: 'Dental Care', className: "text-blue-600" },
        { href: '/messages', icon: <FaVial size={45} />, label: 'Supplement', className: "text-purple-600" },
        { href: '/messages', icon: <FaBacon size={45} />, label: 'Diapers', className: "text-teal-600" },
        { href: '/messages', icon: <FaHandsWash size={45} />, label: 'Personal Care', className: "text-orange-600" },
        { href: '/messages', icon: <FaLaptopMedical size={45} />, label: 'Devices', className: "text-blue-600 " },
        { href: '/messages', icon: <FaPrescriptionBottleAlt size={45} />, label: 'Prescription Medicine', className: "text-red-600" },
    ];

    return (
        <>
            <div className='items-center justify-center m-auto py-4'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-4 gap-5 mt-12'>
                    <div className='bg-[#023020] rounded-lg p-3'>
                        <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                            <p className='px-2'><FcViewDetails size={30} /></p> Upload Prescription
                        </div>
                    </div>
                    <div className='bg-[#023020] rounded-lg p-3'>
                        <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                            <p className='px-2'><FcContacts size={30} /></p> Book Appointment
                        </div>
                    </div>
                    <div className='bg-[#023020] rounded-lg p-3'>
                        <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                            <p className='px-2'><FcConferenceCall size={35} /></p> Doctor Consultation
                        </div>
                    </div>
                    <div className='bg-[#023020] rounded-lg p-3'>
                        <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                            <p className='px-2'><FcCallback size={30} /></p> Call now: 01600-538143
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-3xl px-3 py-4 '>Product Categories</h1>
            <div className='px-3'>
                
                <Swiper navigation={true} modules={[Navigation,Autoplay]}  autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} slidesPerView={6} spaceBetween={10} className="mySwiper"  breakpoints={{
            640: {
              slidesPerView: 2,
              
            },
            600: {
              slidesPerView: 1,
              
            },
            580: {
              slidesPerView: 1,
              
            },
            550: {
              slidesPerView: 1,
              
            },
            500: {
              slidesPerView: 1,
              
            },
            440: {
              slidesPerView: 1,
              
            },
            460:{
              slidesPerView: 1,
              
            },
            420:{
              slidesPerView: 1,
              
            },
            415:{
              slidesPerView: 1,
              
            },
            410:{
              slidesPerView: 1,
              
            },
            409:{
              slidesPerView: 1,
              
            },
            400:{
              slidesPerView: 1,
              
            },
            389:{
              slidesPerView: 1,
             
            },
            321:{
              slidesPerView: 1,
              
            },
            310:{
              slidesPerView: 1,
             
            },
            377:{
              slidesPerView: 1,
              
            },
            426:{
              slidesPerView: 1,
              
            },
            430:{
              slidesPerView: 1,
             
            },
            768: {
              slidesPerView: 4,
              
            },
            1024: {
              slidesPerView: 6,
             
              },
              1364: {
                slidesPerView: 6,
               
              },
          }}>
                    {menuItems.map((item, index) => (
                        <SwiperSlide key={index} className='justify-center items-center m-auto text-center'>
                            <div className="max-w-sm p-6 py-12 bg-[#f0fdf4] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                {/* Center the icon and label */}
                                <div className='flex flex-col items-center justify-center'>
                                    <span className={`rounded-md ${item.className} mb-2`}>{item.icon}</span>
                                    <span className='text-[#000]'>{item.label}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Box;
