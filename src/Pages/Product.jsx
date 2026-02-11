import { useState } from "react";
import { useCart } from "../context/CartContext";


import imgMain from "./images/product-main.png";
import img1 from "./images/product-main.png";
import img2 from "./images/product-2.png";
import img3 from "./images/product-3.png";

import main from  "./images/main.png" ;
import main2 from "./images/main2.png";
import main3 from "./images/main3.png";
import main4 from "./images/main4.png";

const Product = () => {
  const [activeImg, setActiveImg] = useState(imgMain);
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("Large");
  const [color, setColor] = useState("olive");


   const { addToCart, cartItems, increase, decrease } = useCart();





  return (
    
    <>
    <section className="bg-white py-16">
      <div  className="max-w-7xl mx-auto px-6">

        <p className="text-sm text-gray-400 mb-6">
          Home / Shop / Men / T-shirts
        </p>

        <div  className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          <div className="flex gap-6">
  <div data-aos="fade-left" className="flex flex-col gap-4">
    {[img1, img2, img3].map((img, i) => (
      <button
        key={i}
        onClick={() => setActiveImg(img)}
        className="w-24 h-24 rounded-xl border overflow-hidden"
      >
        <img src={img} className="w-full h-full object-cover" />
      </button>
    ))}
  </div>

  <div className="flex-1 bg-[#F5F5F5] rounded-3xl p-12 flex items-center justify-center min-h-[550px]">
    <img
    data-aos="fade-right"
      src={activeImg}
      className="w-full max-h-[550px] object-contain"
    />
  </div>
</div>


          <div>
            <h1 data-aos="fade-left" className="text-3xl font-extrabold mb-3">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>

            <div data-aos="fade-right" className="flex items-center gap-3 mb-4">
              <div className="text-yellow-400">★★★★★</div>
              <span className="text-sm text-gray-500">4.5/5</span>
            </div>

            <div data-aos="fade-left" className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold">$260</span>
              <span className="line-through text-gray-400">$300</span>
              <span className="text-red-500 text-sm bg-red-100 px-3 py-1 rounded-full">
                -40%
              </span>
            </div>

            <p data-aos="fade-right" className="text-gray-600 mb-8 max-w-lg">
              This graphic t-shirt is perfect for any occasion. Crafted from a soft
              and breathable fabric, it offers superior comfort and style.
            </p>

            <div data-aos="fade-left" className="mb-6">
              <p className="font-medium mb-3">Select Colors</p>
              <div className="flex gap-3">
                {[
                  { id: "olive", color: "bg-[#5A5A3C]" },
                  { id: "green", color: "bg-[#2F4F4F]" },
                  { id: "navy", color: "bg-[#1F2A44]" },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setColor(c.id)}
                    className={`w-9 h-9 rounded-full ${c.color}
                    ${color === c.id ? "ring-2 ring-black ring-offset-2" : ""}`}
                  />
                ))}
              </div>
            </div>

            <div data-aos="fade-right" className="mb-8">
              <p className="font-medium mb-3">Choose Size</p>
              <div className="flex gap-3">
                {["Small", "Medium", "Large", "X-Large"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-5 py-2 rounded-full text-sm
                    ${size === s
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div data-aos="fade-left" className="flex gap-4">
              <div className="flex items-center gap-4 bg-gray-100 rounded-full px-5">
                <button
                  onClick={() => setCount(count > 1 ? count - 1 : 1)}
                  className="text-xl"
                >
                  −
                </button>
                <span>{count}</span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="text-xl"
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-black text-white rounded-full py-3 font-semibold hover:opacity-90 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#F2F0F1] py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h1 className="text-2xl font-bold mb-10">
      All Reviews (451)
    </h1>

    <ul data-aos="fade-down" className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {[1,2,3,4,5,6].map((item) => (
        <li key={item} className="bg-white rounded-2xl p-6 shadow">
          <div className="text-yellow-400 mb-2">★★★★☆</div>

          <h2 className="font-bold mb-2">
            Sarah M. ✅
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            I absolutely love this t-shirt! The design is unique and
            the fabric feels so comfortable. As a fellow designer,
            I appreciate the attention to detail. It's become my
            favorite go-to shirt.
          </p>
        </li>
      ))}

    </ul>

    <div className="flex justify-center mt-12">
      <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
        Load More Reviews
      </button>
    </div>

  </div>
</section>
<section className="bg-[#F2F0F1] py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
        YOU MIGHT ALSO LLIKE
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

         <div data-aos="fade-left" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={main} alt="T-shirt" className="h-full object-contain" />
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
           <span className="line-through text-gray-400">$242</span>
            <span className="text-red-500 text-xs bg-red-100 px-2 py-1 rounded-full">
            -20%
          </span>
        </div>

       
     {(() => {
  const item = cartItems.find((c) => c.image === activeImg);

  if (!item) {
    return (
      <button
        onClick={() =>
          addToCart({
            id: 1,
            name: "ONE LIFE GRAPHIC T-SHIRT",
            price: 260,
            image: activeImg,
            size: size,
            color: color,
            qty: count,
          })
        }
        className="flex-1 bg-black text-white rounded-full py-1 font-semibold"
      >
        🛒
      </button>
    );
  }

  return (
    <div className="flex items-center gap-4 bg-gray-100 rounded-full px-26 py-2">
      <button onClick={() => decrease(item.id)}>−</button>
      <span>{item.qty}</span>
      <button onClick={() => increase(item.id)}>+</button>
    </div>
  );
})()}



      </div>


      <div data-aos="fade-up" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={main2} alt="Jeans" className="h-full object-contain" />
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

        
       {(() => {
  const item = cartItems.find((c) => c.image === activeImg);

  if (!item) {
    return (
      <button
        onClick={() =>
          addToCart({
            id: 1,
            name: "ONE LIFE GRAPHIC T-SHIRT",
            price: 260,
            image: activeImg,
            size: size,
            color: color,
            qty: count,
          })
        }
        className="flex-1 bg-black text-white rounded-full py-1 font-semibold"
      >
        🛒
      </button>
    );
  }

  return (
    <div className="flex items-center gap-4 bg-gray-100 rounded-full px-26 py-2">
      <button onClick={() => decrease(item.id)}>−</button>
      <span>{item.qty}</span>
      <button onClick={() => increase(item.id)}>+</button>
    </div>
  );
})()}



      </div>


      <div data-aos="fade-right" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={main3} alt="Checkered Shirt" className="h-full object-contain" />
        </div>

        <h3 className="font-semibold mb-2">
          Checkered Shirt
        </h3>

        <div className="flex items-center gap-2 mb-2 text-sm">
          <div className="text-yellow-400">★★★☆☆</div>
          <span className="text-gray-500">3/5</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">$180</span>
        </div>

        
       {(() => {
  const item = cartItems.find((c) => c.image === activeImg);

  if (!item) {
    return (
      <button
        onClick={() =>
          addToCart({
            id: 1,
            name: "ONE LIFE GRAPHIC T-SHIRT",
            price: 260,
            image: activeImg,
            size: size,
            color: color,
            qty: count,
          })
        }
        className="flex-1 bg-black text-white rounded-full py-1 font-semibold"
      >
        🛒
      </button>
    );
  }

  return (
    <div className="flex items-center gap-4 bg-gray-100 rounded-full px-26 py-2">
      <button onClick={() => decrease(item.id)}>−</button>
      <span>{item.qty}</span>
      <button onClick={() => increase(item.id)}>+</button>
    </div>
  );
})()}


      </div>


      <div data-aos="fade-down" className="group">
        <div className="bg-[#EDECEC] rounded-2xl p-6 flex items-center justify-center h-[250px] mb-4 transition group-hover:scale-105">
          <img src={main4} alt="Striped T-shirt" className="h-full object-contain" />
        </div>

        <h3 className="font-semibold mb-2">
          Sleeve Striped T-shirt
        </h3>

        <div className="flex items-center gap-2 mb-2 text-sm">
          <div className="text-yellow-400">★★★★☆</div>
          <span className="text-gray-500">4.5/5</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">$120</span>
          <span className="line-through text-gray-400">$150</span>
          <span className="text-red-500 text-xs bg-red-100 px-2 py-1 rounded-full">
            -30%
          </span>
         
        </div>

      {(() => {
  const item = cartItems.find((c) => c.image === activeImg);

  if (!item) {
    return (
      <button
        onClick={() =>
          addToCart({
            id: 1,
            name: "ONE LIFE GRAPHIC T-SHIRT",
            price: 260,
            image: activeImg,
            size: size,
            color: color,
            qty: count,
          })
        }
        className="flex-1 bg-black text-white rounded-full py-1 font-semibold"
      >
        🛒
      </button>
    );
  }

  return (
    <div className="flex items-center gap-4 bg-gray-100 rounded-full px-26 py-2">
      <button onClick={() => decrease(item.id)}>−</button>
      <span>{item.qty}</span>
      <button onClick={() => increase(item.id)}>+</button>
    </div>
  );
})()}

      </div>

    </div>

  </div>
</section>


    </>
  );
};

export default Product;
