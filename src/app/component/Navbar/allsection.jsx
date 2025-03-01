import React from 'react';
import Product from './product/page';
import Image from 'next/image';
import Reviews from './Review/page';
import { IoStar } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import About from './About/about';

const Allsection = () => {
  const menuItems = [
    { href: '/', icon: "/asset/me.png", label: 'OTC Medicine', className: "text-blue-600" },
    { href: '/friends', icon: "/asset/woman.png", label: 'Women Choice', className: "text-pink-600" },
    { href: '/settings', icon: "/asset/well.png", label: 'Sexual Wellness', className: "text-red-600" },
    { href: '/messages', icon: "/asset/diab.png", label: 'Diabetic Care', className: "text-green-600" },
    { href: '/messages', icon: "/asset/baby.png", label: 'Baby Care', className: "text-yellow-600" },
    { href: '/messages', icon: "/asset/teeth.png", label: 'Dental Care', className: "text-blue-600" },
    { href: '/messages', icon: "/asset/suple.png", label: 'Supplement', className: "text-purple-600" },
    { href: '/messages', icon: "/asset/per.jpg", label: 'Diapers', className: "text-teal-600" },
    { href: '/messages', icon: "/asset/perso.png", label: 'Personal Care', className: "text-orange-600" },
    { href: '/messages', icon: "/asset/meci.png", label: 'Devices', className: "text-blue-600 " },
    { href: '/messages', icon: "/asset/pre.png", label: 'Prescription Medicine', className: "text-red-600" },
  ];
  const Skills = [
    {
      id: "1",
      img: "/asset/img7.jpg",
      pra: "The Web Surgery - amazing job for our Website The Blood Clinic very helpful and always willing to accommodate us with our queries.",
      name: "Jon Sinha",
      company: "CMO at Sivo",
      img: "/asset/img4.jpg",
      names: "Yeari",
      des: "This is very good Web Service Website The Blood Clinic very helpful."
    },

    {
      id: "3",
      img: "/asset/img6.jpg",
      pra: "Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions  good. ",
      company: "Owner",
      name: "Denie Ronal",
      img1: "/asset/jk.jpg",
      names: "Soroji",
      des: "knowledge and determination our website looks great and functions  good is very good Web Service Website The Blood Clinic very helpful."
    },
    {
      id: "2",
      img: "/asset/img5.jpg",
      pra: "BioCare is one of the most amazing people he will help you with everything you need he is so friendly and I recommend everyone to work with him..",
      company: "Cryptop Expert",
      name: "Keya Estbin",
      img1: "/asset/img44.jpg",
      names: "Dilara",
      des: "The Web Surgery - amazing job for our Website The Blood Clinic very helpful and always willing to accommodate us with our queries."
    },
    {
      id: "4",
      img: "/asset/img7.jpg",
      pra: "I am recommend anyone that is looking for a custom website to give them a call and speak to Gus, he will guide you to the right direction.",
      company: "Web Developer",
      name: "Sastika ",
      img1: "/asset/img43.jpg",
      names: "Yeariyan",
      des: "BioCare is one of the most amazing people he will help you with everything you need he is so friendly and I recommend everyone to work with him.."
    },
    {
      id: "5",
      img: "/asset/img41.jpg",
      pra: "My second time working with Raisa. Excellent communication skills, great service, and exceptional delivery. My favourite Web designer",
      name: "Adonia Rabika",
      company: "Owner",
      img1: "/asset/img5.jpg",
      names: "Solujni",
      des: "Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions  good."
    },

    {
      id: "6",
      img: "/asset/img5.jpg",
      pra: "It is always a pleasure working with Shormily. He answers all my questions and gives me the best feedback and suggestions in a timely manner. ",
      company: "Owner",
      name: "Kavibi Salik",
      img1: "/asset/img41.jpg",
      names: "Fariyan",
      des: "BioCare is one of the most amazing people he will help you with everything you need he is so friendly and I recommend everyone to work with him.."
    },
    {
      id: "7",
      img: "/asset/img43.jpg",
      pra: "It is always nice working with Shormily. The delivery of the work was swift, with absolute efficiency and quality on the task. ",
      company: "Lead Application Developer",
      name: "Astha moon",
      img1: "/asset/img7.jpg",
      names: "Somiya",
      des: "knowledge and determination our website looks great and functions  good is very good Web Service Website The Blood Clinic very helpful."
    },
    {
      id: "8",
      img: "/asset/img44.jpg",
      pra: "Overall very pleased with Morales and Gustavo and his friendliness with us. He did everything we asked in a timely matter. ",
      company: "Graphic Designer",
      name: "Dwatis Bimuk",
      img1: "/asset/img5.jpg",
      names: "Somiya",
      des: "This is very good Web Service Website The Blood Clinic very helpful.I will definitely be recommending him to other companies."
    },
    {
      id: "9",
      img: "/asset/jk.jpg",
      pra: "The work of this developer has tired it's best and the work of Font-End- Develop has been done well.",
      company: "Retired Police",
      name: "Caaki Daud",
      img1: "/asset/img6.jpg",
      names: "Waichard",
      des: "Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions  good."
    },
    {
      id: "9",
      img: "/asset/ls.jpg",
      pra: "The work of this developer has tired it's best and the work of Font-End-Develop has been done well.",
      company: "Maneger",
      name: "Manobika Sen",
      img1: "/asset/img4.jpg",
      names: "Tesread",
      des: "This is very good Web Service Website The Blood Clinic very helpful.I will definitely be recommending him to other companies."
    },
  ];
  const products = [
    {
      name: 'Pantonix',
      genericName: 'Pantoprazole',
      manufacturer: 'Incepta Pharmaceuticals Ltd.',
      price: 6.3,
      originalPrice: 7.0,
      image: '/asset/pantonix.jpg',
    },
    {
      name: 'Fexo',
      genericName: 'Fexofenadine Hydrochloride',
      manufacturer: 'Square Pharmaceuticals PLC.',
      price: 8.1,
      originalPrice: 9.0,
      image: '/asset/fexo.jpg',
    },
    {
      name: 'Neuro-B',
      genericName: 'Vitamin B1 + B6 + B12',
      manufacturer: 'Square Pharmaceuticals PLC.',
      price: 270.0,
      originalPrice: 300.0,
      image: '/asset/neuro-b.jpg',
    },
    {
      name: 'Maxpro',
      genericName: 'Esomeprazole Magnesium',
      manufacturer: 'Renata Limited',
      price: 6.3,
      originalPrice: 7.0,
      image: '/asset/maxpro.jpg',
    },
    {
      name: 'Pantonix',
      genericName: 'Pantoprazole',
      manufacturer: 'Incepta Pharmaceuticals Ltd.',
      price: 6.3,
      originalPrice: 7.0,
      image: '/asset/pantonix.jpg',
    },
    {
      name: 'Fexo',
      genericName: 'Fexofenadine Hydrochloride',
      manufacturer: 'Square Pharmaceuticals PLC.',
      price: 8.1,
      originalPrice: 9.0,
      image: '/asset/fexo.jpg',
    },
    {
      name: 'Neuro-B',
      genericName: 'Vitamin B1 + B6 + B12',
      manufacturer: 'Square Pharmaceuticals PLC.',
      price: 270.0,
      originalPrice: 300.0,
      image: '/asset/neuro-b.jpg',
    },
    {
      name: 'Maxpro',
      genericName: 'Esomeprazole Magnesium',
      manufacturer: 'Renata Limited',
      price: 6.3,
      originalPrice: 7.0,
      image: '/asset/maxpro.jpg',
    },
  ];
    return (
      <>
       <h1 className='text-3xl font-bold px-3 py-4 mt-5 '>Product Categories</h1>
      <div className='px-3'>
        <Swiper
          navigation={true} modules={[Navigation,]}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}

          slidesPerView={6} spaceBetween={10} className="mySwiper"
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
            <SwiperSlide key={index} className='justify-center items-center m-auto text-center'>
              <div className="max-w-sm p-6 py-6  border shadow-lg border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">

                <div className='flex flex-col items-center justify-center'>
                  <Image className={`rounded-md mb-2`}
                    src={item.icon}
                    alt="error image"
                    height={100}
                    width={100}
                  />
                  <span className='text-[#000]'>{item.label}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        <div className='grid grid-cols-2 '>
      <h1 className='text-3xl font-bold px-3 py-4 mt-5 text-green-800 '> Our Product</h1>  
      <h1 className='  px-3 py-4 mt-6 font-semibold underline hover:no-underline hover:text-orange-800 text-blue-800 justify-end flex'>See all Product</h1>
      </div>
      <Product/>
        <About />
         <Reviews />
      {/* Testimonial Part */}
      <h1 className='font-bold text-2xl '>Testemonial</h1>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        effect={'fade'}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="rounded-xl "
      >
        {Skills?.map((Skill) => {
          return (
            <> <SwiperSlide>
              <div className="testimonials bgc">
                <div className="container mx-auto">
                  <div className="grid md:grid-cols-12 sm:grid-cols-6">
                    <div className="col-span-5 col-start-2 p-5 border-l-4 border-green-800 mt-12 mb-12">
                      <p className="text-dark mb-2">
                        {Skill.pra}
                      </p>

                      <Image objectFit="cover" alt="error image" height={1500} width={1500} src={Skill.img} className="h-15 mb-3 w-15 rounded-full mx-2 " />
                      <p className="user-details text-dark ">
                        <b className='my-3'>{Skill.names}</b>
                        <br />
                        <span className="item-center justify-center flex text-yellow-400  pb-1">
                          <IoStar size={25} />
                          <IoStar size={25} />
                          <IoStar size={25} />
                          <IoStar size={25} />
                          <IoStar size={25} />
                        </span>
                      </p>
                    </div>
                    <div className="col-span-5  p-5 m-5 border-l-4 border-green-800 mt-12 mb-12">
                      <p className="text-dark mb-2">
                        {Skill.des}
                      </p>
                      <Image objectFit="cover" alt="error image" height={1500} width={1500} src={Skill.img1} className="h-15 mb-2  w-15 rounded-full mx-2" />
                      <p className="user-details text-dark">
                        <b >{Skill.name}</b>
                        <br />
                        <span className="item-center justify-center flex text-yellow-400  pb-1">
                          <IoStar size={25} />
                          <IoStar size={25} />
                          <IoStar size={25} />
                          <IoStar size={25} />
                          <IoStar size={25} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </SwiperSlide></>

          );
        })}

      </Swiper>
        
           

        </>
    );
};

export default Allsection;