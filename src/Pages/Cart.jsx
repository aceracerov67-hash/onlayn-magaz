import { useState, useMemo } from "react";
import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";


const initialItems = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    size: "Large",
    color: "White",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300",
    qty: 1,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    price: 180,
    size: "Medium",
    color: "Red",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300",
    qty: 1,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    price: 240,
    size: "Large",
    color: "Blue",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300",
    qty: 1,
  },
];

export default function Cart() {
  


  const { cartItems, increase, decrease, removeItem } = useCart();

  const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);


  const discount = subtotal * 0.2;
  const delivery = 15;
  const total = subtotal - discount + delivery;
  

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
    
      <div className="lg:col-span-2 bg-white rounded-xl border p-6 space-y-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            data-aos="fade-right"
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  Size: {item.size} <br />
                  Color: {item.color}
                </p>
                <p className="font-bold mt-1">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-full">
                <button
                  onClick={() => decrease(item.id)}
                  className="px-3 py-1 text-lg"
                >
                  −
                </button>
                <span className="px-3">{item.qty}</span>
                <button
                  onClick={() => increase(item.id)}
                  className="px-3 py-1 text-lg"
                >
                  +
                </button>
              </div>

              <button onClick={() => removeItem(item.id)}>
                <Trash2 className="text-red-500" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border p-6 h-fit">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>

        <div data-aos="fade-left" className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between text-red-500">
            <span>Discount (-20%)</span>
            <span>- ${discount.toFixed(0)}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>${delivery}</span>
          </div>

          <hr />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(0)}</span>
          </div>
        </div>

        <div data-aos="fade-up" className="flex mt-4 gap-2">
          <input
            placeholder="Add promo code"
            className="flex-1 px-4 py-2 rounded-full border text-sm"
          />
          <button className="px-6 py-2 bg-black text-white rounded-full text-sm">
            Apply
          </button>
        </div>

        <button data-aos="fade-down" className="mt-4 w-full bg-black text-white py-3 rounded-full font-medium flex items-center justify-center gap-2">
          Go to Checkout →
        </button>
      </div>
    </div>
  );
}
