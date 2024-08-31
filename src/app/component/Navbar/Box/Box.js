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
            <div className="justify-center items-center   bg-[#e2f8e9]  m-4 mt-2 rounded-lg">
                <div
                    className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  justify-center items-center m-auto px-2"
                >
                    <div className="flex flex-col gap-5 text-start justify-center items-cente m-auto">
                        <div

                            className="flex flex-col gap-6 font-bold bg-clip-text bg-gradient-to-r from-emerald-950 to-lime-500  w-auto h-auto"
                        >
                            <p className="text-transparent  bg-clip-text bg-gradient-to-r from-emerald-950 to-lime-800">
                                {" "}
                                <span className='text-[40px] '>Dr. Mohiuzzaman Saikat </span>
                            </p>
                        </div>
                        <p className="text-white ">
                            <span className="text-danger ">
                                <TypeAnimation
                                    sequence={[
                                        "> Hi, I am MBBS Doctor",
                                        1000,

                                        // Same substring at the start will only be typed out once, initially
                                        "> This is my HealthCare Website",
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        // wait 1s before replacing "Mice" with "Hamsters"
                                        "",
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    className=" font-semibold text-transparent herotext bg-clip-text bg-gradient-to-r from-emerald-950 to-lime-800"
                                />
                            </span>
                        </p>
                    </div>
                    <div className='flex flex-row gap-5 py-3 justify-center items-center m-auto'>
                        <div><Image
                            
                            src='/asset/sai.jpg'
                            width={200}
                            height={200}
                            alt="error image"
                            className="mb-4 p-1 bg-white"
                        />
                        <Image
                            src='/asset/saik.jpg'
                            width={200}
                            height={200}
                            alt="error image"
                            className="mb-4 p-1 bg-white"
                            /></div>
                        <div>  <Image
                            src='/asset/saik.jpg'
                            width={200}
                            height={250}
                            alt="error image"
                            className="mb-4 p-1 bg-white"
                        />
                        <Image
                            src='/asset/sa.jpg'
                            width={200}
                            height={200}
                            alt="error image"
                            className="mb-4 p-1 bg-white"
                        /></div>
                        
                      
                    </div>
                </div>
            </div>
            

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-4 gap-5'>
                <div className='bg-[#023020] rounded-lg p-3'>
                    <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                        <p className='px-2'> <FcViewDetails size={24} /></p> Upload Prescription</div>
                </div>
                <div className='bg-[#023020] rounded-lg p-3'>
                    <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                        <p className='px-2'> <FcContacts size={24} /></p> Book Appoinment</div>
                </div>
                <div className='bg-[#023020] rounded-lg p-3'>
                    <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                        <p className='px-2'> <FcConferenceCall size={24} /></p> Doctor Consulation</div>
                </div>
                <div className='bg-[#023020] rounded-lg p-3'>
                    <div className='text-white py-4 justify-center items-center m-auto text-center flex'>
                        <p className='px-2'> <FcCallback size={24} /></p> Call now: 01600-538143</div>
                </div>


            </div>
        </div>
    );
};

export default Box;