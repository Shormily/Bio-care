import Image from 'next/image';
import React from 'react';
import { FcApproval, FcServices } from 'react-icons/fc';
import { TypeAnimation } from 'react-type-animation';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: ['400', '600', '700'], // Choose weights you need
  subsets: ['latin'],            // Include subsets (e.g., 'latin')
});

const About = () => {
    return (
        <>
             <div className="justify-center items-center p-5    mt-2 rounded-lg">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center items-center m-auto px-2">
          <div
            className=' py-3 justify-center items-center m-auto'
          // flex flex-row gap-5
          >
            <div>
              <Image
                src='/asset/dr.png'
                width={400}
                height={300}
                alt="error image"
                className="mb-4 w-full h-96 p-1 bg-white mt-12"
              />
              {/* <Image
                                src='/asset/sa.jpg'
                                width={200}
                                height={200}
                                alt="error image"
                                className="mb-4 p-1 bg-white"
                            /> */}
            </div>
          </div>
          <div className="flex flex-col gap-5 md:text-start xs:text-center px-4 ">
            <div
            // className="gap-6 font-bold bg-clip-text bg-gradient-to-r from-emerald-950 to-lime-500 w-auto h-auto"
            >
              <p
                className='font-bold text-xl text-transparent bg-gradient-to-r from-emerald-950 to-lime-300 bg-clip-text  mb-4 flex gap-2'
              >
                <FcServices size={30} />
                <span className={nunito.className}>
                  About Us BioCare
                </span>
              </p>
              {/* <p className="text-primary  text-xl font-medium  pb-2 flex gap-2"><FcServices size={30} />Why Choose Us?</p> */}
              <p className={nunito.className}>
                <span className='font-bold text-2xl  '>We Have Medicare Plan Options for You!</span>

              </p>
              <p className='text-[14px] text-gray-500 mt-3 text-justify'>At Bio Care , we are dedicated to enhancing lives through innovative healthcare solutions. Established in 2008, we have grown into a trusted name in the pharmaceutical and medical industries. Our mission is to provide accessible, high-quality healthcare products and services that empower individuals and communities to live healthier, happier lives.

                Driven by a passion for science and well-being, Bio Care Medicine focuses on cutting-edge research, sustainable practices, and patient-centric care. Our products range from essential medicines and health supplements to advanced therapeutic solutions. Each product is meticulously developed with a commitment to safety, efficacy, and affordability.</p>

                <p className='  text-[#000] text-gray-500 text-[14px] mt-2'>  <TypeAnimation
                  sequence={[
                    "> Hi, I am MBBS Doctor",
                    1000,
                    "> This is my HealthCare Website",
                    1000,
                    "",
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-950 to-lime-800"
                /></p>
            </div>
           
            <p className="text-white">
            
              <span className='flex gap-3 text-[#000] text-gray-500 text-[14px] '> <FcApproval size={20} /> Prescription and Over-the-Counter Medications</span>
              
              <span className='flex gap-3 text-[#000] text-gray-500 text-[14px] mt-2'> <FcApproval size={20}  />Nutritional Supplements and Wellness Products</span>
              <span className='flex gap-3 text-[#000] text-gray-500 text-[14px] mt-2'> <FcApproval size={20} />Specialized Treatments for Chronic Illnesses</span>
              <span className='flex gap-3 text-[#000] text-gray-500 text-[14px] mt-2'> <FcApproval size={20}  />Global Pharmaceutical Partnerships and Distribution</span>
            </p>
          </div>

        </div>
      </div>
            
        </>
    );
};

export default About;