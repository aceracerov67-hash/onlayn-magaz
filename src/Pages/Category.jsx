import shirt1 from "./images/main4.png";
import shirt2 from "./images/main3.png";
import shirt3 from "./images/main.png";
import jeans from "./images/product-main.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  return (
    <section className="bg-[#F2F0F1] py-10">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-sm text-gray-500 mb-6">
          Home / Casual
        </p>

        <div  className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

          <aside data-aos="fade-left" className="bg-white rounded-2xl p-6 h-fit shadow">

            <h2 className="font-bold text-lg mb-6">Filters</h2>

            <div className="mb-8">
              <h3 className="font-semibold mb-3">Category</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-black cursor-pointer">T-Shirts</li>
                <li className="hover:text-black cursor-pointer">Shirts</li>
                <li className="hover:text-black cursor-pointer">Jeans</li>
                <li className="hover:text-black cursor-pointer">Hoodie</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold mb-3">Price</h3>
              <input type="range" className="w-full" />
              <div className="flex justify-between text-sm mt-2">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold mb-3">Colors</h3>
              <div className="flex flex-wrap gap-3">
                {["bg-red-500","bg-green-500","bg-blue-500","bg-black","bg-yellow-400"].map((color,i)=>(
                  <div key={i} className={`w-6 h-6 rounded-full ${color} cursor-pointer`} />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {["S","M","L","XL"].map((size)=>(
                  <button
                    key={size}
                    className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-black hover:text-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full">
              Apply Filter
            </button>

          </aside>

          <div>

            <div data-aos="fade-right" className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Casual</h2>
              <p className="text-sm text-gray-500">
                Showing 1–10 of 100 Products
              </p>
            </div>

            <div data-aos="fade-right" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {[shirt1, shirt2, shirt3, jeans, shirt1, shirt2].map((img, i) => (
                <div key={i} className="group bg-white rounded-2xl p-4 shadow hover:shadow-lg transition">
                  
                  <div className="bg-[#F2F0F1] rounded-xl h-[220px] flex items-center justify-center mb-4">
                    <img src={img} className="h-full object-contain group-hover:scale-105 transition" />
                  </div>

                  <h3 className="font-semibold mb-2">
                    Gradient Graphic T-shirt
                  </h3>

                  <div className="text-yellow-400 text-sm mb-1">
                    ★★★★☆
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-bold">$145</span>
                    <span className="line-through text-gray-400">$160</span>
                  </div>

                </div>
              ))}
               {[shirt1, shirt2, shirt3, jeans, shirt1, shirt2].map((img, i) => (
                <div key={i} className="group bg-white rounded-2xl p-4 shadow hover:shadow-lg transition">
                  
                  <div className="bg-[#F2F0F1] rounded-xl h-[220px] flex items-center justify-center mb-4">
                    <img src={img} className="h-full object-contain group-hover:scale-105 transition" />
                  </div>

                  <h3 className="font-semibold mb-2">
                    Gradient Graphic T-shirt
                  </h3>

                  <div className="text-yellow-400 text-sm mb-1">
                    ★★★★☆
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-bold">$145</span>
                    <span className="line-through text-gray-400">$160</span>
                  </div>

                </div>
              ))}

            </div>

            <div className="flex justify-center mt-12 gap-3">
              <button className="px-3 py-2 bg-white rounded-lg shadow">1</button>
              <button className="px-3 py-2 bg-white rounded-lg shadow">2</button>
              <button className="px-3 py-2 bg-white rounded-lg shadow">3</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
