import React from 'react';
import { FcServices, FcViewDetails } from "react-icons/fc";
import { FcCallback, FcContacts, FcConferenceCall } from "react-icons/fc";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { IoStar } from 'react-icons/io5';
import { TypeAnimation } from 'react-type-animation';
import "./Box.css";
import Reviews from '../Review/page';
import { Nunito } from 'next/font/google';
import { FcApproval } from "react-icons/fc";
import Product from '../product/page';

const nunito = Nunito({
  weight: ['400', '600', '700'], // Choose weights you need
  subsets: ['latin'],            // Include subsets (e.g., 'latin')
});


const Box = () => {
 

  return (
    <div className=''>
      <div
        className='items-center justify-center m-auto py-2'
      >
        <div
          className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-5 mt-8'
        >
          {/* Upload Prescription */}
          <div className='bg-[#023020] rounded-lg p-3 h-[100px]'>
            <div className='text-white py-1 flex flex-col justify-center items-center text-center'>
              <p className='px-2 pb-1'>
                <FcViewDetails size={30} />
              </p>
              <p>Upload Prescription</p>
            </div>
          </div>

          {/* Book Appointment */}
          <div className='bg-[#023020] rounded-lg p-3 h-[100px]'>
            <div className='text-white py-2 flex flex-col justify-center items-center text-center'>
              <p className='px-2 pb-1'>
                <FcContacts size={30} />
              </p>
              <p>Book Appointment</p>
            </div>
          </div>

          {/* Doctor Consultation */}
          <div className='bg-[#023020] rounded-lg p-3 h-[100px]'>
            <div className='text-white py-1 flex flex-col justify-center items-center text-center'>
              <p className='px-2 pb-1'>
                <FcConferenceCall size={35} />
              </p>
              <p>Doctor Consultation</p>
            </div>
          </div>

          {/* Call Now */}
          <div className='bg-[#023020] rounded-lg p-3 h-[100px]'>
            <div className='text-white py-1 flex flex-col justify-center items-center text-center'>
              <p className='px-2 pb-1'>
                <FcCallback size={30} />
              </p>
              <p>Call now: 01600-538143</p>
            </div>
          </div>
        </div>
      </div>
     
      

    </div>
  );
};

export default Box;
