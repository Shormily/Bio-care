"use client"; // Ensure this is at the top for client-side rendering
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import './product.css';

const Product = () => {
    const menuItems = [
        {
            "id": 1,
            "name": "Paracetamol 500mg",
            "description": "Paracetamol is a commonly used pain reliever and fever reducer. It’s effective in treating headaches, muscle pain, and mild arthritis. It works by blocking the production of prostaglandins, chemicals in the body that cause pain and inflammation.",
            "price": "$5.99",
            "image": "/health/Paracetamol.jpg"
        },
        {
            "id": 2,
            "name": "Amoxicillin 250mg",
            "description": "Amoxicillin is a widely prescribed antibiotic for treating bacterial infections such as bronchitis, pneumonia, and ear infections. It works by preventing bacteria from building their cell walls, making them unable to survive.",
            "price": "$14.50",
            "image": "/health/Amoxicillin.jpg"
        },
        {
            "id": 3,
            "name": "Cetirizine 10mg",
            "description": "Cetirizine is an antihistamine commonly used to treat hay fever and allergy symptoms. It helps to reduce symptoms like itching, runny nose, sneezing, and watery eyes. Its non-drowsy formula makes it suitable for daytime use.",
            "price": "$7.25",
            "image": "/health/Cetirizine.jpg"
        },
        {
            "id": 4,
            "name": "Ibuprofen 200mg",
            "description": "Ibuprofen is an anti-inflammatory medicine used to treat conditions such as headaches, menstrual cramps, muscle aches, and arthritis. It works by blocking the production of inflammatory chemicals in the body.",
            "price": "$6.50",
            "image": "/health/Ibuprofen.png"
        },
        {
            "id": 5,
            "name": "Loratadine 10mg",
            "description": "Loratadine is an antihistamine that reduces the effects of natural histamines in the body, often used to treat symptoms of allergies. It relieves runny nose, sneezing, itchy eyes, and other allergy-related symptoms.",
            "price": "$8.00",
            "image": "/health/Loratadine.jpg"
        },
        {
            "id": 6,
            "name": "Aspirin 81mg",
            "description": "Aspirin is a pain reliever and anti-inflammatory medicine that is often used to reduce fever and prevent heart attacks in low doses. It helps reduce inflammation by inhibiting the enzymes that produce prostaglandins.",
            "price": "$4.99",
            "image": "/health/Aspirin.jpg"
        },
        {
            "id": 7,
            "name": "Metformin 500mg",
            "description": "Metformin is a widely used diabetes medicine that helps lower blood sugar levels in people with type 2 diabetes. It works by reducing glucose production in the liver and increasing the body’s response to insulin.",
            "price": "$12.75",
            "image": "/health/Metformin.jpg"
        },
        {
            "id": 8,
            "name": "Ciprofloxacin 500mg",
            "description": "Ciprofloxacin is an antibiotic used to treat various bacterial infections such as urinary tract infections, respiratory infections, and skin infections. It works by stopping the growth of bacteria.",
            "price": "$16.30",
            "image": "/health/Ciprofloxacin.jpg"
        },
        {
            "id": 9,
            "name": "Omeprazole 20mg",
            "description": "Omeprazole is a proton pump inhibitor (PPI) used to treat gastroesophageal reflux disease (GERD) and ulcers. It works by decreasing the amount of acid produced in the stomach, providing relief from heartburn.",
            "price": "$9.50",
            "image": "/health/Omeprazole.jpg"
        },
        {
            "id": 10,
            "name": "Simvastatin 40mg",
            "description": "Simvastatin is a cholesterol-lowering medicine used to reduce the risk of heart disease. It works by reducing the production of cholesterol in the liver, which can lower the risk of strokes and heart attacks.",
            "price": "$15.20",
            "image": "/health/Simvastatin.jpg"
        },
        {
            "id": 11,
            "name": "Azithromycin 250mg",
            "description": "Azithromycin is an antibiotic used to treat various infections caused by bacteria, such as respiratory infections, skin infections, and ear infections. It works by preventing bacteria from growing and multiplying.",
            "price": "$18.00",
            "image": "/health/Azithromycin.jpg"
        },
        {
            "id": 12,
            "name": "Pantoprazole 40mg",
            "description": "Pantoprazole is a proton pump inhibitor used to treat conditions such as GERD, stomach ulcers, and acid reflux. It reduces the production of stomach acid, providing relief from symptoms like heartburn.",
            "price": "$10.80",
            "image": "/health/Pantoprazole.jpg"
        },
        {
            "id": 13,
            "name": "Losartan 50mg",
            "description": "Losartan is used to treat high blood pressure and protect the kidneys from damage caused by diabetes. It works by relaxing blood vessels, allowing blood to flow more easily, and helps prevent strokes and heart attacks.",
            "price": "$13.60",
            "image": "/health/Losartan.jpeg"
        },
        {
            "id": 14,
            "name": "Levothyroxine 100mcg",
            "description": "Levothyroxine is a thyroid medicine used to treat hypothyroidism, where the thyroid gland does not produce enough thyroid hormone. It works by replacing the hormone that the body is missing.",
            "price": "$11.99",
            "image": "/health/Levothyroxine.jpeg"
        },
        {
            "id": 15,
            "name": "Atorvastatin 20mg",
            "description": "Atorvastatin is used to lower cholesterol and triglyceride levels in the blood. It helps reduce the risk of heart disease and prevents strokes by slowing the production of cholesterol in the liver.",
            "price": "$16.90",
            "image": "/health/Atorvastatin.jpg"
        },
        {
            "id": 16,
            "name": "Clopidogrel 75mg",
            "description": "Clopidogrel is an antiplatelet medication used to reduce the risk of heart disease and strokes. It works by preventing platelets from sticking together and forming harmful blood clots.",
            "price": "$12.40",
            "image": "/health/Clopidogrel.jpg"
        },
        {
            "id": 17,
            "name": "Doxycycline 100mg",
            "description": "Doxycycline is an antibiotic used to treat various bacterial infections, including respiratory tract infections and skin infections. It prevents bacteria from reproducing, allowing the immune system to eliminate them.",
            "price": "$14.75",
            "image": "/health/Doxycycline.jpg"
        },
        {
            "id": 18,
            "name": "Hydrochlorothiazide 25mg",
            "description": "Hydrochlorothiazide is a diuretic used to treat high blood pressure and fluid retention. It helps reduce blood pressure by eliminating excess salt and water from the body through urine.",
            "price": "$9.30",
            "image": "/health/Hydrochlorothiazide.jpg"
        },
        {
            "id": 19,
            "name": "Amlodipine 5mg",
            "description": "Amlodipine is a calcium channel blocker used to treat high blood pressure and angina (chest pain). It works by relaxing blood vessels and improving blood flow, reducing the strain on the heart.",
            "price": "$8.80",
            "image": "/health/Atorvastatin.jpg"
        },
        {
            "id": 20,
            "name": "Warfarin 5mg",
            "description": "Warfarin is an anticoagulant used to prevent blood clots from forming or growing larger in the blood and blood vessels. It’s commonly used to reduce the risk of stroke, heart attack, and other clot-related issues.",
            "price": "$19.25",
            "image": "/health/Warfarin.jpg"
        }
    ]

  return (
    <div className="px-3">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={6}
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        loop={true}
        navigation={{
          prevEl: ".reviewPrevRef",
          nextEl: ".reviewNextRef",
        }}
        breakpoints={{
            640: { slidesPerView: 2 },
            600: { slidesPerView: 2 },
            580: { slidesPerView: 1 },
            554: { slidesPerView: 2 },
            500: { slidesPerView: 1 },
            389: { slidesPerView: 1 },
            320: { slidesPerView: 1 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1364: { slidesPerView: 6 },
            1615: { slidesPerView: 5 },
          }}
      >
        {menuItems.map((item, index) => (
          <SwiperSlide key={item.id} className="text-center">
            <div className="max-w-sm p-6 py-6 border shadow-lg rounded-lg">
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-md mb-2 w-full h-28 "
                  src={item.image}
                  alt={item.name}
                  height={1500}
                  width={1500}
                />
                <span>{item.name}</span>
                <p>{item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center mt-6 gap-4">
        <div className="reviewPrevRef cursor-pointer">
          <MdKeyboardArrowLeft size={30} className="text-green-800" />
        </div>

        <div className="custom-pagination gap-2 flex justify-center swiper-pagination-bullets" />

        <div className="reviewNextRef cursor-pointer">
          <MdOutlineKeyboardArrowRight size={30} className="text-green-800" />
        </div>
      </div>
    </div>
  );
};

export default Product;
