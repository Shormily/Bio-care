import React from 'react';
import { FcViewDetails } from "react-icons/fc";
import { FcCallback, FcContacts, FcConferenceCall } from "react-icons/fc";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Box = () => {
  const menuItems = [
    { href: '/', icon: "/asset/me.png", label: 'OTC Medicine', className: "text-blue-600" },
    { href: '/friends', icon: "/asset/woman.png", label: 'Women Choice', className: "text-pink-600" },
    { href: '/settings', icon: "/asset/well.png", label: 'Sexual Wellness', className: "text-red-600" },
    { href: '/messages', icon: "/asset/diab.png", label: 'Diabetic Care', className: "text-green-600" },
    { href: '/messages', icon: "/asset/baby.png", label: 'Baby Care', className: "text-yellow-600" },
    { href: '/messages', icon: "/asset/teeth.png", label: 'Dental Care', className: "text-blue-600" },
    { href: '/messages', icon: "/asset/suple.png", label: 'Supplement', className: "text-purple-600" },
    { href: '/messages', icon: "/asset/per.jpg", label: 'Diapers', className: "text-teal-600" },
    { href: '/messages', icon: "/asset/perso.png", label: 'Personal Care', className: "text-orange-600" },
    { href: '/messages', icon: "/asset/meci.png", label: 'Devices', className: "text-blue-600 " },
    { href: '/messages', icon: "/asset/pre.png", label: 'Prescription Medicine', className: "text-red-600" },
  ];

  return (
    <>
      <div className='items-center justify-center m-auto py-2'>
  <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-4 gap-5 mt-8'>
    {/* Upload Prescription */}
    <div className='bg-[#023020] rounded-lg p-3'>
      <div className='text-white py-4 flex flex-col justify-center items-center text-center'>
        <p className='px-2 pb-1'>
          <FcViewDetails size={30} />
        </p>
        <p>Upload Prescription</p>
      </div>
    </div>

    {/* Book Appointment */}
    <div className='bg-[#023020] rounded-lg p-3'>
      <div className='text-white py-4 flex flex-col justify-center items-center text-center'>
        <p className='px-2 pb-1'>
          <FcContacts size={30} />
        </p>
        <p>Book Appointment</p>
      </div>
    </div>

    {/* Doctor Consultation */}
    <div className='bg-[#023020] rounded-lg p-3'>
      <div className='text-white py-4 flex flex-col justify-center items-center text-center'>
        <p className='px-2 pb-1'>
          <FcConferenceCall size={35} />
        </p>
        <p>Doctor Consultation</p>
      </div>
    </div>

    {/* Call Now */}
    <div className='bg-[#023020] rounded-lg p-3'>
      <div className='text-white py-4 flex flex-col justify-center items-center text-center'>
        <p className='px-2 pb-1'>
          <FcCallback size={30} />
        </p>
        <p>Call now: 01600-538143</p>
      </div>
    </div>
  </div>
</div>

      <h1 className='text-2xl font-bold px-3 py-4 mt-5 '>Product Categories</h1>
      <div className='px-3'>
        <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} slidesPerView={6} spaceBetween={10} className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 2 },
            600: { slidesPerView: 2 },
            580: { slidesPerView: 1 },
            554: { slidesPerView: 2 },
            500: { slidesPerView: 1 },
            389: { slidesPerView: 1 },
            320: { slidesPerView: 1 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1364: { slidesPerView: 6 },
            1615: { slidesPerView: 5 },
        }}>
          {menuItems.map((item, index) => (
            <SwiperSlide key={index} className='justify-center items-center m-auto text-center'>
              <div className="max-w-sm p-6 py-6  border shadow-lg border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                {/* Center the icon and label */}
                <div className='flex flex-col items-center justify-center'>
                  <Image className={`rounded-md mb-2`}
                    src={item.icon}
                    alt="error image"
                    height={100}
                    width={100}
                  />
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
