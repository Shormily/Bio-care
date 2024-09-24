'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcDocument, FcFeedback, FcGoogle, FcReading } from 'react-icons/fc';
import "./globals.css";
import ScrollToTop from 'react-scroll-to-top';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';

const page = () => {
    const handleLogin = async () => {};

    return (
        <>
            <div className="flex justify-center items-center mx-auto p-4">
                <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-3 lg:gap-12">
                    <div className="flex justify-center w-full lg:w-1/2">
                        <Image
                            src="/asset/login.gif"
                            objectFit="cover"
                            alt="error image"
                            height={2000}
                            width={2000}
                            className="md:w-2/3 sm:w-full h-auto lg:h-[500px] m-5 mt-12 px-3"
                        />
                    </div>

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
                            <p className="font-bold text-2xl lg:text-3xl">Log In</p>
                        </Link>

                        {/* Form Section */}
                        <form onSubmit={handleLogin}>
                            <div className="max-w-[600px] py-4 mx-auto">
                                

                                <div className="group pt-8 mx-5">
                                    <span className="icon">
                                        <FcFeedback size={20} />
                                    </span>
                                    <input
                                        className="inputs shadow-lg w-full"
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                <div className="group pt-8 mx-5">
                                    <span className="icon">
                                        <FcDocument size={20} />
                                    </span>
                                    <input
                                        className="inputs shadow-lg w-full"
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>

                                <div className="pt-8 mx-5">
                                    <button className="btnsign font-medium w-full text-center bg-[#4a940ef3] shadow-lg py-2 lg:py-3">
                                        Log In
                                    </button>
                                </div>
                            </div>

                            <Link href="/sign" className="flex justify-center items-center mx-auto mt-4">
                                <p className="hover:text-red-800 font-semibold">
                                    You have no account? Please Register Now
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
