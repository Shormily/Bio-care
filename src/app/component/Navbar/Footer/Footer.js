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
          <div className="grid lg:grid-cols-3 pt-7 md:grid-cols-2 sm:grid-cols-1 gap-24  ">
            <div className="text-white ">
              <div className="flex gap-4">  <Image
                width={70}
                height={70}
                className="imgse text-white"
                src='/asset/logo.png'
                alt=""
              />
                <p className=" text-4xl font-bold mt-3 ">BioCare</p></div>
              <hr className="mt-4 p-2" />
              <p className="py-2 text-[16px] font-light text-gray-200 ">
                Experience the joy of endless possibilities – one click at a
                time. Welcome to a world where happiness is just a box away.
              </p>
              <hr className="mt-4 p-2 " />
              <div className="text-gray-200   text-semibold font-light text-[16px]">
                <p className="py-2">About US</p>
                <p className="py-2">Terms & Condition</p>
                <p className="py-2">Privacy Policy</p>
                <p className="py-2">Contact Us </p>
                <p className="py-2">Carrer </p>
              </div>
            </div>

            <div className="text-white">
              <p className="font-semibold mb-2 text-[22px] ">Information</p>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  height: "2px",
                  width: "60px"
                }}
              />
              <div className=" pt-5    text-[16px]">
                {" "} <p className="py-2 text-gray-200 mt-8">Email: biocarebdteam@gmail.com</p>
                <p className="py-2 text-gray-200">Phone : 01600-538143</p>
                <p className="py-2">Address: Sylhet</p>
                <p className="py-2">Level: 3, Road: 14, Block: C 180/6,
                  Abdullah Park, 23/C Banasree Main Rd,
                  Dhaka-1219</p>
                <p className="py-2">Trade License: TRAD/DNCC/131766/2022</p>

                <div className="flex justify-between  text-white  m-auto ">
                  <p className="mt-8">
                    {/* <PiInstagramLogoDuotone size={2} className="icn" /> */}
                    <i className="fa-brands fa-facebook  shadow icn outline outline-[0.1px] outline-[#F0ECE5]"></i>{" "}
                    <i className="fa-brands fa-instagram icn shadow outline outline-[0.1px] outline-[#F0ECE5]"></i>
                    <i className="fa-brands fa-linkedin icn shadow outline outline-[0.1px] outline-[#F0ECE5]"></i>{" "}
                  </p>

                </div>
              </div>
            </div>
            <div className="text-white">
              <p className="font-semibold mb-2 text-[22px]">Payment</p>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  height: "2px",
                  width: "60px"
                }}
              />
              <div className="text-gray-200 pt-5 font-light text-[18px] mb-5">

                <p className="text-white"></p>
                <Image
                  width={1000}
                  height={1000}
                  className="imgse text-white mt-4"
                  src='/asset/ssl.png'
                  alt=""
                />

              </div>
            </div>



            <div>

            </div>

          </div>

          <hr />


          <p className=" text-[18px] text-white  pt-6 text-center">
            2024 All rights reserved. &copy; ©2024 BioCare Bangladesh
          </p>

        </div>
      </div>

    </>
  );
};

export default Footer;
