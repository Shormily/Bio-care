import React from 'react';
import { FcViewDetails } from "react-icons/fc";

const Box = () => {
    return (
        <>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-4 gap-5'>
                <div className='bg-[#023020] rounded-lg '>
                    <p className='text-white py-4 justify-center items-center m-auto text-center flex'>
                        <p> <FcViewDetails size={24} /></p> Upload Prescription</p>
                </div>
                

            </div>
        </>
    );
};

export default Box;