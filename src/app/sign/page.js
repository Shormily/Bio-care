'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FcDocument, FcFeedback, FcGoogle, FcReading } from 'react-icons/fc';
import ScrollToTop from 'react-scroll-to-top';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import "./globals.css";
import { useRouter } from 'next/navigation';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useFormik } from 'formik';

const initialValues = {
    name: "",
    email: "",
    password: "",
    
}


const page = () => {
    const router = useRouter();
 const {values, handleChange,errors, handleSubmit} =  useFormik({
        initialValues,
        onSubmit: async (values) => {
            console.log(values);
            router.push('/')
        }
 })
 const [showPassword, setShowPassword] = useState(false); // State to track password visibility

 const handleClickShowPassword = () => setShowPassword(!showPassword); // Toggle password visibility
 const handleMouseDownPassword = (event) => event.preventDefault(); // Prevent focus loss when clicking

    return (
        <>
            <div className="flex justify-center items-center mx-auto p-4">
                <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-3 lg:gap-12">
    
                    {/* Second section */}
                    <div className="w-full lg:w-1/2">
                        {/* Logo Section */}
                        <Link href="/" className="flex gap-2 justify-center items-center pl-2 mt-12">
                            <Image
                                src="/asset/logo.png"
                                width={50}
                                height={50}
                                alt="Logo"
                                className="py-2"
                            />
                            <p className="font-bold text-2xl lg:text-3xl">Register Now</p>
                        </Link>

                        {/* Form Section */}
                        <form onSubmit={handleSubmit} action=''>
                            <div className="max-w-[600px] py-4 mx-auto">
                                <div className="group pb-3 mx-5">
                                    <span className="icon pb-4">
                                        <FcReading size={25} />
                                    </span>
                                    <input
                                        className="inputs shadow-lg w-full"
                                        type="text"
                                        placeholder="Name"
                                        value={values.name}
                                        onChange={handleChange}
                                        name="name"
                                        required
                                    />
                                </div>

                                <div className="group pt-8 mx-5">
                                    <span className="icon">
                                        <FcFeedback size={20} />
                                    </span>
                                    <input
                                        className="inputs shadow-lg w-full"
                                        type="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        name="email"
                                        required
                                    />
                                </div>

                                <div className="group pt-8 mx-5 relative">
                                    <span className="icon">
                                        <FcDocument size={20} />
                                    </span>
                                    <input
                                        className="inputs shadow-lg w-full pr-10"
                                        type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                       id='password'
                                        placeholder="Enter your password"
                                        value={values.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                        <button
                                            type="button"
                                            className="text-gray-500 mt-8"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-8 mx-5">
                                    <button type='submit' className="btnsign font-medium w-full text-center bg-[#4a940ef3] shadow-lg py-2 lg:py-3">
                                    Register Now
                                    </button>
                                </div>
                            </div>

                            <Link href="/login" className="flex justify-center items-center mx-auto mt-4">
                                <p className="hover:text-red-800 font-semibold">
                                    You have an account? Please Log In
                                </p>
                            </Link>
                        </form>

                        {/* Social Login Section */}
                        <div className="flex gap-5 py-8 justify-center items-center mx-auto">
                            <button className="shadow-lg p-2 hover:bg-gray-300 bg-lime-100">
                                <FcGoogle size={30} />
                            </button>
                            <button className="shadow-lg p-2 hover:bg-gray-300 bg-lime-100">
                                <BsGithub size={30} />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center w-full lg:w-1/2">
                        <Image
                            src="/asset/sign.gif"
                            objectFit="cover"
                            alt="error image"
                            height={2000}
                            width={2000}
                            className="md:w-2/3 sm:w-full h-auto lg:h-[500px] m-5 mt-12 px-3"
                        />
                    </div>
                </div>
            </div>

            <ScrollToTop
                style={{
                    boxShadow: "none",
                    backgroundColor: "#023020",
                    borderRadius: "50%",
                    right: 20,
                    zIndex: 20,
                }}
                className="my-12 outline outline-2 outline-[#F0ECE5]"
                component={
                    <MdKeyboardArrowUp
                        style={{ fontSize: "20px", margin: "0 auto", color: "#fff" }}
                        size={28}
                    />
                }
                smooth
                top={500}
            />
        </>
    );
};

export default page;
