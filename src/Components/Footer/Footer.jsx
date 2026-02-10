import React from "react";
import { Mail, Twitter, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {

  const linkStyle =
    "relative text-gray-500 text-sm cursor-pointer transition-all duration-300 hover:text-black hover:translate-x-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="bg-gray-100 pt-16">

      <div data-aos="fade-up" className="max-w-7xl mx-auto px-6">
        <div className="bg-black rounded-2xl px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
            STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-80">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-3 rounded-full outline-none"
              />
            </div>

            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

    
        <div data-aos="fade-left">
          <h3 className="text-2xl font-extrabold mb-4">SHOP.CO</h3>
          <p className="text-gray-500 text-sm mb-6">
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>

        
          <div data-aos="fade-left" className="flex gap-4">
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-white rounded-full shadow-md cursor-pointer 
               hover:scale-110 hover:bg-black hover:text-white 
               transition-all duration-300"
  >
    <Twitter size={16} />
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-white rounded-full shadow-md cursor-pointer 
               hover:scale-110 hover:bg-black hover:text-white 
               transition-all duration-300"
  >
    <Facebook size={16} />
  </a>

  <a
    href="https://www.instagram.com/fxatamova13/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-white rounded-full shadow-md cursor-pointer 
               hover:scale-110 hover:bg-black hover:text-white 
               transition-all duration-300"
  >
    <Instagram size={16} />
  </a>

  <a
    href="https://github.com/aceracerov67-hash"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-white rounded-full shadow-md cursor-pointer 
               hover:scale-110 hover:bg-black hover:text-white 
               transition-all duration-300"
  >
    <Github size={16} />
  </a>
</div>
        </div>

       
        <div data-aos="fade-left">
          <h4 className="font-semibold mb-4 tracking-wide">COMPANY</h4>
          <ul className="space-y-3">
            <li className={linkStyle}>About</li>
            <li className={linkStyle}>Features</li>
            <li className={linkStyle}>Works</li>
            <li className={linkStyle}>Career</li>
          </ul>
        </div>

        {/* HELP */}
        <div data-aos="fade-right">
          <h4 className="font-semibold mb-4 tracking-wide">HELP</h4>
          <ul className="space-y-3">
            <li className={linkStyle}>Customer Support</li>
            <li className={linkStyle}>Delivery Details</li>
            <li className={linkStyle}>Terms & Conditions</li>
            <li className={linkStyle}>Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ */}
        <div data-aos="fade-left">
          <h4 className="font-semibold mb-4 tracking-wide">FAQ</h4>
          <ul className="space-y-3">
            <li className={linkStyle}>Account</li>
            <li className={linkStyle}>Manage Deliveries</li>
            <li className={linkStyle}>Orders</li>
            <li className={linkStyle}>Payments</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div data-aos="fade-right">
          <h4 className="font-semibold mb-4 tracking-wide">RESOURCES</h4>
          <ul className="space-y-3">
            <li className={linkStyle}>Free eBooks</li>
            <li className={linkStyle}>Development Tutorial</li>
            <li className={linkStyle}>How to - Blog</li>
            <li className={linkStyle}>Youtube Playlist</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-200"></div>
    </footer>
  );
};

export default Footer;
