import Image from "next/image";
import Box from "../Box/Box";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
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
    <div className="bg-gray-100">
    
     <Box/>
     <div className="justify-center items-center p-5    mt-2 rounded-lg">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center items-center m-auto px-2">
                <div className='flex flex-row gap-5 py-3 justify-center items-center m-auto'>
                        <div>
                            <Image
                                src='/asset/sai.jpg'
                                width={200}
                                height={200}
                                alt="error image"
                                className="mb-4 p-1 bg-white"
                            />
                            <Image
                                src='/asset/saik.jpg'
                                width={200}
                                height={200}
                                alt="error image"
                                className="mb-4 p-1 bg-white"
                            />
                        </div>
                        <div>
                            <Image
                                src='/asset/saik.jpg'
                                width={200}
                                height={250}
                                alt="error image"
                                className="mb-4 p-1 bg-white"
                            />
                            <Image
                                src='/asset/sa.jpg'
                                width={200}
                                height={200}
                                alt="error image"
                                className="mb-4 p-1 bg-white"
                            />
                        </div>
                    </div>
          <div className="flex flex-col gap-5 md:text-start xs:text-center px-4 ">
            <div className="gap-6 font-bold bg-clip-text bg-gradient-to-r from-emerald-950 to-lime-500 w-auto h-auto">
            <p className="text-transparent bg-clip-text py-4 bg-gradient-to-r from-emerald-950 to-lime-300">
                                <span className='text-5xl italic '>About US</span>
                            </p>
                          
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-950 to-lime-800">
                                <span className='text-[40px]  '>Dr. Mohiuzzaman Saikat</span>
                            </p>
                        </div>
                        <p className="text-white">
                            <span className="text-danger">
                                <TypeAnimation
                                    sequence={[
                                        "> Hi, I am MBBS Doctor",
                                        1000,
                                        "> This is my HealthCare Website",
                                        1000,
                                        "",
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    className="font-semibold text-transparent herotext bg-clip-text bg-gradient-to-r from-emerald-950 to-lime-800"
                                />
                            </span>
                        </p>
                    </div>
                   
                </div>
                    </div>
      <div className="px-4 mt-8">
        <h1 className="text-2xl font-semibold">
          Best Online Pharmacy And Health Care Platform in Bangladesh
        </h1>
        <p className="text-[#71717a] text-justify mt-4">
          Bangladesh is a developing nation with more than 180 million people. With the advent of technology, Bangladesh health care sector has shown tremendous expansion in the past few years. As a result, several online pharmacies and health care platforms have been developed to provide affordable access to quality healthcare services.
          <br />
          <br />
          The <span className="font-bold text-black">best online pharmacy and health care platform in</span> is <span className="font-bold text-black">BioCare Bangladesh</span>. It is an online medicine platform that provides access to various health care services. MedEasy is a one-stop destination for all healthcare needs. It offers various services such as medicine delivery, doctor consultations, lab tests, and more. The platform also provides access to health records, medical advice and support, and a comprehensive database of health care providers in Bangladesh.
          <br />
          <br />
          <span>BioCare</span> is Bangladesh most trusted and reliable <span className="font-bold text-black">online pharmacy and healthcare platform.</span> The secure and user-friendly platform makes it easy to access the services provided. BioCare also offers discounts and deals to help make health care services more affordable. The platform provides 24/7 customer service and support to ensure customers get the best possible experience.
          <br />
          <br />
          Overall, BioCare is the <span className="font-bold text-black">best online pharmacy and healthcare platform in Bangladesh.</span> It provides affordable access to quality health care services and offers the best customer support. BioCare is the best choice for anyone looking for quality health care services in Bangladesh.
        </p>
       

        <p className="text-2xl font-semibold mt-8">Best Selling Medicines</p>
        <p className="text-[#3f6212] font-semibold hover:cursor-pointer hover:text-red-500 py-3 text-justify">
          Sergel 20 mg Capsule | Napa 500 mg Tablet | Ceevit 250 mg Chewable Tablet | Ecosprin 75 mg Tablet | Monas 10 10 mg Tablet | Pantonix 20 mg Tablet | Atova 10 mg Tablet | Linaglip 5 mg Tablet | Bizoran 5 mg+20 mg Tablet | Fexo 120 mg Tablet | Thyrox 50 mcg Tablet | Rosuva 10 mg Tablet | Neuro-B Tablet | Uromax 0.4 mg Capsule | Bislol 2.5 mg Tablet | Maxpro 20 mg Tablet | Clopid 75 mg Tablet | Osartil 50 mg Tablet | Rosuva 5 mg Tablet | Napa Extend 665 mg Tablet
        </p>

        <p className="text-2xl font-semibold mt-8">Benefits of Using BioCare Bangladesh</p>
        <p className="text-[#71717a] text-justify py-4">
          BioCare is an online pharmacy that provides a convenient and affordable way to access medication. It offers many benefits for customers, such as:
          <br />
          1. Easy and convenient access to health care services.
          <br />
          2. Comprehensive database of health care providers.
          <br />
          3. 24/7 customer service and support.
          <br />
          4. Secure and user-friendly platform.
          <br />
          5. Discounts and deals to make health care services more affordable.
          <br />
          6. Access to health records and medical advice.
          <br />
          7. Fast and reliable delivery of medicines.
          <br />
          8. Professional and experienced health care professionals.
          <br />
          9. Access to reliable information on health and wellness.
        </p>
      </div>
    </div>
  );
};

export default Banner;
