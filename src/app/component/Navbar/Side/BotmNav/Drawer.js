import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

export default function Drawer({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <Transition show={isOpen} as="div">
        <Transition.Child
          as="div"  // Ensure we render a `div` element instead of a `Fragment`
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose}
        />
      </Transition>

      {/* Drawer */}
      <Transition show={isOpen} as="div">
        <Transition.Child
          as="div"  // Ensure we render a `div` element instead of a `Fragment`
          enter="transition-transform duration-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-300"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="fixed inset-y-0 left-0 w-72 bg-white shadow-md z-50"
        >
          <div className="p-4 flex items-center justify-between border-b">
            <div className="flex items-center space-x-2">
            <Image
                  src='/asset/logo.png'
                  width={50}
                  height={50}
                  alt="error image"
                  className="py-2"
                />   
              <span className="text-lg font-semibold">BioCare</span>
            </div>
            <button onClick={onClose}>
              <FaTimes className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <div className="p-4 text-gray-600">
            <p className="font-bold text-blue-600 mb-4">BioCare Cash: 0 Taka</p>
            <h3 className="text-md font-semibold mb-2">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">OTC Medicine</a></li>
              <li><a href="#" className="hover:text-blue-500">Women's Choice</a></li>
              <li><a href="#" className="hover:text-blue-500">Sexual Wellness</a></li>
              <li><a href="#" className="hover:text-blue-500">Diabetic Care</a></li>
              <li><a href="#" className="hover:text-blue-500">Baby Care</a></li>
              <li><a href="#" className="hover:text-blue-500">Dental Care</a></li>
              <li><a href="#" className="hover:text-blue-500">Supplement</a></li>
              <li><a href="#" className="hover:text-blue-500">Diapers</a></li>
              <li><a href="#" className="hover:text-blue-500">Personal Care</a></li>
              <li><a href="#" className="hover:text-blue-500">Devices</a></li>
            </ul>
          </div>
          <div className="p-4 flex justify-center space-x-4 border-t mt-auto">
            <a href="#" className="text-gray-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-500"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-gray-500"><i className="fab fa-linkedin"></i></a>
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
}
