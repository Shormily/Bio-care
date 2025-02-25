// pages/404.js
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  bg-[#FFFBEB]'>
  <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=""
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold text-red-500"
      >
        <Image
                                 src='/asset/run.gif'
                                 width={700}
                                 height={700}
                                 alt="Logo"
                                 className="py-2 auto"
                               />
                  <h1 className='text-5xl text-red-900'> Error (404)</h1> 
      </motion.h1>
      <motion.p className="text-xl mt-4" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.3 }}>
      <p>It&apos;s not found!</p>
      </motion.p>
      <Link href="/">
        <p className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md">
          Go back home
        </p>
      </Link>
      </motion.div>
    </div>
  
     
  );
}
