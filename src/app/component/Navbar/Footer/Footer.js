import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import "./Footer.css";



const Footer = () => {
  return (
    <>
      {/* <JoinOur/> */}
      {/* Footer Section */}
     
      <div className="bg-[#023020] justify-center items-center m-auto flex  font-inriaSans pt-12 pb-8 ">
        <div
          className="max-w-[1550px] justify-center items-center m-auto px-6  pt-12 pb-8
      "
        >
          {/* max-w-[1120px] m-auto pt-3 pb-3  flex items-center justify-between mx-auto */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-24  ">
            <div className="text-white">
                          <div className="flex">  <Image
                               width={50}
                               height={50}
                className="imgse text-white"
                src='/asset/logo.png'
                alt=""
              />
              <p className=" text-3xl font-medium mt-3 ">BioCare</p></div>
            
              <p className="py-2 text-[18px] font-light text-gray-200 ">
                Experience the joy of endless possibilities – one click at a
                time. Welcome to a world where happiness is just a box away.
              </p>
            </div>

            <div className="text-white">
              <p className="font-semibold mb-2 text-[22px]">Information</p>
              <div className="text-gray-200 pt-5 font-light text-[18px]">
                <p>Sign Up</p>
                <p>Newsletter</p>
                <p>Blogs</p>
                <p>Trading</p>
              </div>
            </div>
            <div className="text-white">
              <p className="font-semibold mb-2 text-[22px]">Platform</p>
              <div className="text-gray-200 pt-5 font-light text-[18px]">
                {" "}
                <p>About</p>
                <p>Contract</p>
                <p>Collection</p>
                <p>Product</p>
              </div>
            </div>
            <div>
             
            </div>

          </div>

          <hr className="" />
          <div className="flex justify-between  text-white  m-auto ">
            <p className="mt-8">
              {/* <PiInstagramLogoDuotone size={2} className="icn" /> */}
              <i className="fa-brands fa-facebook  shadow icn outline outline-[0.1px] outline-[#F0ECE5]"></i>{" "}
              <i className="fa-brands fa-instagram icn shadow outline outline-[0.1px] outline-[#F0ECE5]"></i>
              <i className="fa-brands fa-linkedin icn shadow outline outline-[0.1px] outline-[#F0ECE5]"></i>{" "}
            </p>
            <p className=" text-[18px] pb-6 justify-end items-end flex">
              2024 All rights reserved. &copy;2024 BioCare Bangladesh
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Footer;
