import React from 'react';
import { FcViewDetails } from "react-icons/fc";
import { FcCallback, FcContacts, FcConferenceCall } from "react-icons/fc";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { ImCloudDownload } from "react-icons/im";

import Image from 'next/image';

const Box = () => {
    return (
        <div className='items-center justify-center m-auto py-4'>
            

            {/* Swiper start */}
            
               
                    <div
                        className='rounded-2xl w-full'
                    >
                        <Image
                            src='/asset/ban.png'
                            // layout="fill"
                            objectFit="cover"
                            alt="error image"
                            height={1500}
                            width={1500}
                            // className="lg:h-[483px] md:h-96 sm:h-36 sm:w-24 md:w-full  rounded-lg"
                       className='w-full xs:h-auto md:h-[483px]'
                        />
                        
                    </div> 
            
               
               
               
            {/* Swiper end */}

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-4 gap-5 mt-12'>
                <div className='bg-[#023020] rounded-lg p-3'>
                    <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                        <p className='px-2'><FcViewDetails size={24} /></p> Upload Prescription
                    </div>
                </div>
                <div className='bg-[#023020] rounded-lg p-3'>
                    <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                        <p className='px-2'><FcContacts size={24} /></p> Book Appointment
                    </div>
                </div>
                <div className='bg-[#023020] rounded-lg p-3'>
                    <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                        <p className='px-2'><FcConferenceCall size={24} /></p> Doctor Consultation
                    </div>
                </div>
                <div className='bg-[#023020] rounded-lg p-3'>
                    <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                        <p className='px-2'><FcCallback size={24} /></p> Call now: 01600-538143
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Box;
