"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
// import ReviewImage from "@/assets/review.png";
// import Container from "@/Components/ContainerWrapper/Container";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "./Reviews.css";

const reviews = [
  // {
  //   "id": 15704,
  //   "medicine_name": "Sergel",
  //   "category_name": "Capsule",
  //   "slug": "Sergel-20-mg-Capsule",
  //   "generic_name": "Esomeprazole Magnesium Trihydrate",
  //   "strength": "20 mg",
  //   "manufacturer_name": "Healthcare Pharmaceuticals Ltd.",
  //   "discount_type": "Percentage",
  //   "discount_value": 8,
  //   "is_discountable": false,
  //   "is_available": true,
  //   "medicine_image": "/media/medicines/IMG-20231019-WA0397.jpg",
  //   "unit_prices": [
  //     {
  //       "unit": "piece",
  //       "unit_size": 1,
  //       "price": 7
  //     },
  //     {
  //       "unit": "10's Strip",
  //       "unit_size": 10,
  //       "price": 70
  //     },
  //     {
  //       "unit": "100's Pack",
  //       "unit_size": 100,
  //       "price": 700
  //     }
  //   ]
  // },
  // {
  //   "id": 11306,
  //   "medicine_name": "Napa",
  //   "category_name": "Tablet",
  //   "slug": "napa-500-mg-tablet",
  //   "generic_name": "Paracetamol",
  //   "strength": "500 mg",
  //   "manufacturer_name": "Beximco Pharmaceuticals Ltd.",
  //   "discount_type": "Percentage",
  //   "discount_value": 10,
  //   "is_discountable": false,
  //   "is_available": true,
  //   "medicine_image": "/media/medicines/IMG-20231023-WA0137.jpg",
  //   "unit_prices": [
  //     {
  //       "unit": "Piece",
  //       "unit_size": 1,
  //       "price": 1.2
  //     },
  //     {
  //       "unit": "10's Strip",
  //       "unit_size": 10,
  //       "price": 12
  //     },
  //     {
  //       "unit": "500s pack",
  //       "unit_size": 500,
  //       "price": 600
  //     },
  //     {
  //       "unit": "510's Pack",
  //       "unit_size": 510,
  //       "price": 612
  //     }
  //   ]
  // },
  // {
  //   "id": 3004,
  //   "medicine_name": "Ceevit",
  //   "category_name": "Chewable Tablet",
  //   "slug": "ceevit-250-mg-chewable-tablet",
  //   "generic_name": "Vitamin C [Ascorbic acid]",
  //   "strength": "250 mg",
  //   "manufacturer_name": "Square Pharmaceuticals PLC.",
  //   "discount_type": "Percentage",
  //   "discount_value": 10,
  //   "is_discountable": false,
  //   "is_available": true,
  //   "medicine_image": "/media/medicines/medeasy_ceevit_250.jpg",
  //   "unit_prices": [
  //     {
  //       "unit": "piece",
  //       "unit_size": 1,
  //       "price": 1.9
  //     },
  //     {
  //       "unit": "10's Strip",
  //       "unit_size": 10,
  //       "price": 19
  //     },
  //     {
  //       "unit": "250's Pack",
  //       "unit_size": 250,
  //       "price": 475
  //     }
  //   ]
  // },
  // {
  //   "id": 10903,
  //   "medicine_name": "Monas 10",
  //   "category_name": "Tablet",
  //   "slug": "monas-10-mg-tablet",
  //   "generic_name": "Montelukast",
  //   "strength": "10 mg",
  //   "manufacturer_name": "ACME Laboratories Ltd.",
  //   "discount_type": "Percentage",
  //   "discount_value": 10,
  //   "is_discountable": false,
  //   "is_available": true,
  //   "medicine_image": "/media/medicines/IMG-20230919-WA0156.jpg",
  //   "unit_prices": [
  //     {
  //       "unit": "15's Strip",
  //       "unit_size": 15,
  //       "price": 262.5
  //     },
  //     {
  //       "unit": "30's pack",
  //       "unit_size": 30,
  //       "price": 525
  //     }
  //   ]
  // },
  // {
  //   "id": 13192,
  //   "medicine_name": "Pantonix",
  //   "category_name": "Tablet",
  //   "slug": "Pantonix-20-mg-tablet",
  //   "generic_name": "Pantoprazole",
  //   "strength": "20 mg",
  //   "manufacturer_name": "Incepta Pharmaceuticals Ltd.",
  //   "discount_type": "Percentage",
  //   "discount_value": 10,
  //   "is_discountable": false,
  //   "is_available": true,
  //   "medicine_image": "/media/medicines/IMG-20240529-WA0234.jpg",
  //   "unit_prices": [
  //     {
  //       "unit": "piece",
  //       "unit_size": 1,
  //       "price": 7
  //     },
  //     {
  //       "unit": "14's Strip",
  //       "unit_size": 14,
  //       "price": 98
  //     },
  //     {
  //       "unit": "98's Pack",
  //       "unit_size": 98,
  //       "price": 686
  //     }
  //   ]
  // },
  // {
  //   "id": 6729,
  //   "medicine_name": "Fexo",
  //   "category_name": "Tablet",
  //   "slug": "fexo-120-mg-tablet",
  //   "generic_name": "Fexofenadine Hydrochloride",
  //   "strength": "120 mg",
  //   "manufacturer_name": "Square Pharmaceuticals PLC.",
  //   "discount_type": "Percentage",
  //   "discount_value": 10,
  //   "is_discountable": false,
  //   "is_available": true,
  //   "medicine_image": "/media/medicines/medeasy-fexo-120.jpg",
  //   "unit_prices": [
  //     {
  //       "unit": "piece",
  //       "unit_size": 1,
  //       "price": 9
  //     },
  //     {
  //       "unit": "10's Strip",
  //       "unit_size": 10,
  //       "price": 90
  //     },
  //     {
  //       "unit": "50's Pack",
  //       "unit_size": 50,
  //       "price": 450
  //     },
  
  {
    "id": 2,
    "name": "General-Surgeon",
    "img": "/health/g1.jpg",
    "description": "General surgeons are doctors who specialize in surgical procedures. Surgery is any procedure that alters body tissues to  or treat a medical condition. A general surgeon is part of a surgical  includes an anesthesiologist, nurses, and surgical technicians.This Disease good treatment our hospital.",
    "price":3567
  },
  {
    "id": 3,
    "name": "kidney-Specialist",
    "price":3567,
    "img": "/health/k1.jpg",
    "description": "This is when your kidneys are damaged over time. You might not have severe symptoms until the disease is more advanced. But if your doctor catches it early, medications and lifestyle changes may help you avoid more damage.This Disease good treatment our hospital."
  },

  {
    "id": 4,
    "name": "Thyroid",
    "price":3567,
    "img": "/health/t1.jpg",
    "description": "The globally escalating thyroid nodule incidence rates may be only partially ascribed to better diagnostics, allowing for the assessment of environmental risk factors on thyroid disease. Endocrine disruptors or thyroid-disrupting chemicals (TDC) like bisphenol This Disease good treatment our hospital."
  },
  {
    "id": 5,
    "name": "Plastic-surgery",
    "price":3567,
    "img": "/health/p1.jpg",
    "description": "Plastic surgery restores and improves function, as well as appearance. It can involve surgery on any part of the anatomy, except the central nervous system, including,Skin,  birthmarks, and tattoo removal Maxillofacial Congenital anomalies, cleft palate, and cleft lip.This Disease good treatment our hospital."
  },

  {
    "id": 6,
    "name": "Diabetes",
    "price":3567,
    "img": "/health/D1.jpg",
    "description": "Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy.Most of the food you eat is broken down into sugar (also called glucose) including,Skin and released into your bloodstream. When your blood sugar goes up, it signals your pancreas to good treatment release insulin. "
  },

  {
    "id": 7,
    "name": "Neurologist",
    "price":3567,
    "img": "/health/N1.jpg",
    "description": "A neurologist can help identify the cause of symptoms and create a treatment plan for both common and complex neurological conditions.During a neurological exam, instruments, such as lights and reflex hammers, may be used to assess the nervous system. Motor skills,balance,best treated by a neurologist."
  },
  {
    "id": 8,
    "name": "Cardiologist",
    "price":3567,
    "img": "/health/c1.jpg",
    "description": "A cardiologist specializes in diagnosing and treating diseases of the cardiovascular system. The cardiologist will carry out tests, and they may perform some procedures, such as heart catheterizations, angioplasty, or inserting a pacemaker,they are here and all the operations are done best treated with great care."
  },
  {
    "id": 9,
    "name": "Sexul-problem",
    "price":3567,
    "img": "/health/s1.jpg",
    "description": "The definition of sexual dysfunction is the inability to have a satisfactory sexual relationship. This definition depends on each person's own interpretation on what he judges satisfactory. In general, sexual dysfunction can affect the quality of life and, important can be the first  or psychological problem."
    
  },

  {
    "id": 10,
    "price":3567,
    "img": "/health/b1.jpg",
    "name": "Baby-Delivery",
    "description": "It takes different machines to deliver the baby, they are here and all the operations are done with great care.Erythema multiforme mainly affects adults under 40 seriously and evaluated.This Disease good treatment our hospital. although it can happen at any age.This Disease good treatment our hospital."
    
  },
  {
    "id": 11,
    "name": "Corona-Virous",
    "price":3567,
    "img": "/health/p2.jpg",
    "description": "A cardiologist specializes in diagnosing and treating diseases of the cardiovascular system. The cardiologist will carry out tests, and they may perform some procedures, such as heart catheterizations, angioplasty, or inserting a pacemaker,they are here and all the operations are done best treated with great care."
   
  },
  {
    "id": 12,
    "name": "Pregency-Test",
    "price":3567,
    "img": "/health/w1.jpg",
    "description": "It takes different machines to deliver the baby, they are here and all the operations are done with great care.Erythema multiforme mainly affects adults under 40 seriously and evaluated.This Disease good treatment our hospital. although it can happen at any age.This Disease good treatment our hospital."

  }
];

const Reviews = () => {
  return (
    <>
    <div className=" py-4">
        <h2 className="text-2xl font-semibold mb-4">
          Health Advice
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          loop={true}
          navigation={{
            prevEl: ".reviewPrevRef",
            nextEl: ".reviewNextRef",
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper "
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className="flex flex-col items-center border rounded-lg shadow-lg p-2 text-center "
            >
              <Image
                src={review.img}
                alt={review.name}
                width={300}
                height={300}
                className="w-32 h-32 rounded-full mb-2 mx-auto"
              />
              <h3 className="text-lg font-semibold ">{review.name}</h3>
              <div className="flex mb-2 justify-center mt-1">
               
              <FaStar  className="text-yellow-400" size={20} />  <FaStar  className="text-yellow-400" size={20}/> <FaStar  className="text-yellow-400" size={20}/> <FaStar  className="text-yellow-400" size={20}/> <FaStar  className="text-yellow-400 " size={20}/>
               
              </div>
              <p className="text-justify px-3 pb-3">{review.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center mt-6 gap-4">
          <div className="reviewPrevRef flex items-center justify-center cursor-pointer">
            <SlArrowLeft className="text-black text-lg" />
          </div>

          {/* <div className="custom-pagination gap-2 flex justify-center swiper-pagination-bullets" /> */}

          <div className="reviewNextRef flex items-center justify-center cursor-pointer">
            <SlArrowRight className="text-black text-lg" />
          </div>
        </div>
      </div>
    </>
      
  );
};

export default Reviews;
