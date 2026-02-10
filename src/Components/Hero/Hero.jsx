import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import img1 from "./img1.1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import versage from "./Group.png";
import calvin from "./Group1.png";
import gucci from "./gucci-logo-1.png";
import prada from "./prada-logo-1.png";
import zara from "./zara-logo-1.png";

import shirt1 from "./shirt1.png";
import jeans from "./jeans.png";
import shirt2 from "./shirt2.png";
import tshirt from "./tshirt.png";

import shirt11 from "./shirt11.png"
import shirt12 from "./shirt12.png"
import shirt13 from "./shirt13.png"
import shirt14 from "./shirt14.png"

import main1 from "./main1.png"
import main2 from "./main2.png"
import main3 from "./main3.png"
import main4 from "./main4.png"


const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

const products = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    image: shirt1,
    price: 120,
    rating: 4.5,
    korzinka: 1,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    image: jeans,
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    rating: 3.5,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    image: shirt2,
    price: 180,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    image: tshirt,
    price: 130,
    oldPrice: 160,
    discount: "-30%",
    rating: 4.5,
  },
];

const Hero = () => {
  const navigate = useNavigate();

 

  return (
    <>
      <section className="relative bg-[#F2F0F1]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div data-aos="fade-right">
            <h1  className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>

            <p className="text-gray-500 max-w-md mb-8">
              Browse through our diverse range of meticulously crafted garments.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              Shop Now
            </button>

            <div className="flex flex-wrap gap-12 mt-14">
              <div>
                <h2 className="text-3xl font-bold">
                  <Counter end={200} />
                </h2>
                <p className="text-gray-500 text-sm">
                  International Brands
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  <Counter end={2000} />
                </h2>
                <p className="text-gray-500 text-sm">
                  High-Quality Products
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  <Counter end={30000} />
                </h2>
                <p className="text-gray-500 text-sm">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-center min-h-[600px] w-full">
            <img data-aos="fade-right"
              src={img1}
              alt="model"
              className="max-w-[520px] w-full relative z-30"
            />

            <img
            data-aos="fade-left"
              src={img2}
              alt="big star"
              className="absolute top-8 right-8 w-28 animate-pulse"
            />

            <img
            data-aos="fade-up"
              src={img3}
              alt="small star"
              className="absolute top-78 left-12 w-14 animate-pulse"
            />
          </div>
        </div>
      </section>

     <section className="relative overflow-hidden py-10 bg-black">
  <div data-aos="fade-up" className="flex w-max animate-marquee gap-20 items-center">
    <img src={versage} alt="Versace" className="h-8 md:h-10 opacity-80" />
    <img src={calvin} alt="Calvin Klein" className="h-8 md:h-10 opacity-80" />
    <img src={zara} alt="Zara" className="h-8 md:h-10 opacity-80" />
    <img src={gucci} alt="Gucci" className="h-8 md:h-10 opacity-80" />
    <img src={prada} alt="Prada" className="h-8 md:h-10 opacity-80" />

   
    <img src={versage} alt="Versace" className="h-8 md:h-10 opacity-80" />
    <img src={calvin} alt="Calvin Klein" className="h-8 md:h-10 opacity-80" />
    <img src={zara} alt="Zara" className="h-8 md:h-10 opacity-80" />
    <img src={gucci} alt="Gucci" className="h-8 md:h-10 opacity-80" />
    <img src={prada} alt="Prada" className="h-8 md:h-10 opacity-80" />
  </div>
</section>


      
     <section className="bg-[#F2F0F1] py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-extrabold text-center mb-14">
      NEW ARRIVALS
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

         <div data-aos="fade-left" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={shirt1} alt="T-shirt" className="h-full object-contain" />
        </div>

        <h3 className="font-semibold mb-2">
          T-shirt with Tape Details
        </h3>

        <div className="flex items-center gap-2 mb-2 text-sm">
          <div className="text-yellow-400">★★★★★</div>
          <span className="text-gray-500">4.5/5</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">$120</span>
        </div>

        <button className="mt-3 text-xs text-gray-500 hover:text-black transition">
          🛒
        </button>
      </div>


      {/* CARD 2 */}
      <div data-aos="fade-right" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={jeans} alt="Jeans" className="h-full object-contain" />
        </div>

        <h3 className="font-semibold mb-2">
          Skinny Fit Jeans
        </h3>

        <div className="flex items-center gap-2 mb-2 text-sm">
          <div className="text-yellow-400">★★★★☆</div>
          <span className="text-gray-500">3.5/5</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">$240</span>
          <span className="line-through text-gray-400">$260</span>
          <span className="text-red-500 text-xs bg-red-100 px-2 py-1 rounded-full">
            -20%
          </span>
        </div>

        <button className="mt-3 text-xs text-gray-500 hover:text-black transition">
          🛒
        </button>
      </div>


      <div data-aos="fade-left" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={shirt2} alt="Checkered Shirt" className="h-full object-contain" />
        </div>

        <h3 className="font-semibold mb-2">
          Checkered Shirt
        </h3>

        <div className="flex items-center gap-2 mb-2 text-sm">
          <div className="text-yellow-400">★★★★★</div>
          <span className="text-gray-500">4.5/5</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">$180</span>
        </div>

        <button className="mt-3 text-xs text-gray-500 hover:text-black transition">
          🛒
        </button>
      </div>


      <div data-aos="fade-right" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={tshirt} alt="Striped T-shirt" className="h-full object-contain" />
        </div>

        <h3 className="font-semibold mb-2">
          Sleeve Striped T-shirt
        </h3>

        <div className="flex items-center gap-2 mb-2 text-sm">
          <div className="text-yellow-400">★★★★★</div>
          <span className="text-gray-500">4.5/5</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">$130</span>
          <span className="line-through text-gray-400">$160</span>
          <span className="text-red-500 text-xs bg-red-100 px-2 py-1 rounded-full">
            -30%
          </span>
        </div>

        <button className="mt-3 text-xs text-gray-500 hover:text-black transition">
          🛒
        </button>
      </div>

    </div>

    <div data-aos="fade-down" className="flex justify-center mt-12">
      <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
        View All
      </button>
    </div>
  </div>
</section>

       <section className="bg-[#F2F0F1] py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-extrabold text-center mb-14">
        TOP SELLING
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

         <div data-aos="fade-right" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={shirt11} alt="T-shirt" className="h-full object-contain" />
        </div>

        <h3 className="font-semibold mb-2">
          T-shirt with Tape Details
        </h3>

        <div className="flex items-center gap-2 mb-2 text-sm">
          <div className="text-yellow-400">★★★★★</div>
          <span className="text-gray-500">5.0/5</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">$212</span>
           <span className="line-through text-gray-400">$232</span>
            <span className="text-red-500 text-xs bg-red-100 px-2 py-1 rounded-full">
            -20%
          </span>
        </div>

        <button className="mt-3 text-xs text-gray-500 hover:text-black transition">
          🛒
        </button>
      </div>


      <div data-aos="fade-left" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={shirt12} alt="Jeans" className="h-full object-contain" />
        </div>

        <h3 className="font-semibold mb-2">
          Skinny Fit Jeans
        </h3>

        <div className="flex items-center gap-2 mb-2 text-sm">
          <div className="text-yellow-400">★★★★☆</div>
          <span className="text-gray-500">4/5</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">$145</span>
        </div>

        <button className="mt-3 text-xs text-gray-500 hover:text-black transition">
          🛒
        </button>
      </div>


      <div data-aos="fade-right" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={shirt13} alt="Checkered Shirt" className="h-full object-contain" />
        </div>

        <h3 className="font-semibold mb-2">
          Checkered Shirt
        </h3>

        <div className="flex items-center gap-2 mb-2 text-sm">
          <div className="text-yellow-400">★★★☆☆</div>
          <span className="text-gray-500">3/5</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">$80</span>
        </div>

        <button className="mt-3 text-xs text-gray-500 hover:text-black transition">
          🛒
        </button>
      </div>


      <div data-aos="fade-left" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={shirt14} alt="Striped T-shirt" className="h-full object-contain" />
        </div>

        <h3 className="font-semibold mb-2">
          Sleeve Striped T-shirt
        </h3>

        <div className="flex items-center gap-2 mb-2 text-sm">
          <div className="text-yellow-400">★★★★☆</div>
          <span className="text-gray-500">4.5/5</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">$210</span>
         
        </div>

        <button className="mt-3 text-xs text-gray-500 hover:text-black transition">
          🛒
        </button>
      </div>

    </div>

    <div data-aos="fade-down" className="flex justify-center mt-12">
      <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
        View All
      </button>
    </div>
  </div>
</section>

     <section className="bg-[#F2F0F1] py-20">
  <div className="max-w-6xl mx-auto px-6">
    <div className="bg-[#EDECEC] rounded-[32px] p-10 md:p-16">
      
      <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-14">
        BROWSE BY DRESS STYLE
      </h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">

      
        <li data-aos="fade-left" className="relative bg-white rounded-2xl overflow-hidden h-[260px] cursor-pointer group">
          
          <img
            src={main1}
            alt="Casual"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </li>

      
        <li data-aos="fade-right" className="relative bg-white rounded-2xl overflow-hidden h-[260px] cursor-pointer group">
         
          <img
            src={main2}
            alt="Formal"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </li>


        <li data-aos="fade-left" className="relative bg-white rounded-2xl overflow-hidden h-[260px] cursor-pointer group">

          <img
            src={main3}
            alt="Party"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </li>

        <li data-aos="fade-right" className="relative bg-white rounded-2xl overflow-hidden h-[260px] cursor-pointer group">

          <img
            src={main4}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </li>

      </ul>

    </div>
  </div>
</section>

          <section className="bg-[#F2F0F1] py-20">
  <div data-aos="fade-up" className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-extrabold text-center mb-12">
      OUR HAPPY CUSTOMERS
    </h2>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      <SwiperSlide>
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="text-yellow-400 mb-2">★★★★☆</div>
          <h1 className="font-bold mb-2">Sarah M. ✅</h1>
          <p className="text-gray-600 text-sm">
            "I'm blown away by the quality and style of the clothes..."
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="text-yellow-400 mb-2">★★★★☆</div>
          <h1 className="font-bold mb-2">Alex K. ✅</h1>
          <p className="text-gray-600 text-sm">
            "Finding clothes that align with my personal style..."
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="text-yellow-400 mb-2">★★★★☆</div>
          <h1 className="font-bold mb-2">James L. ✅</h1>
          <p className="text-gray-600 text-sm">
            "As someone who's always on the lookout..."
          </p>
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="text-yellow-400 mb-2">★★★★☆</div>
          <h1 className="font-bold mb-2">Sarah M. ✅</h1>
          <p className="text-gray-600 text-sm">
            "I'm blown away by the quality and style of the clothes..."
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="text-yellow-400 mb-2">★★★★☆</div>
          <h1 className="font-bold mb-2">Alex K. ✅</h1>
          <p className="text-gray-600 text-sm">
            "Finding clothes that align with my personal style..."
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="text-yellow-400 mb-2">★★★★☆</div>
          <h1 className="font-bold mb-2">James L. ✅</h1>
          <p className="text-gray-600 text-sm">
            "As someone who's always on the lookout..."
          </p>
        </div>
      </SwiperSlide>
    </Swiper>

  </div>
</section>





    </>
  );
};

export default Hero;
