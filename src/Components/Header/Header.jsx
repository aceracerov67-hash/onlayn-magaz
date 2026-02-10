import { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const linkClass = ({ isActive }) =>
    `relative transition ${
      isActive ? "text-black font-semibold after:w-full" : "text-gray-700"
    }
     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
     after:bg-black after:transition-all after:w-0 hover:after:w-full`;

  return (
    <header  className="sticky top-0 z-50 bg-[#f5f5f5] border-b border-gray-200">
      <div  className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

      
        <div data-aos="fade-right" className="flex items-center gap-4">
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <Menu size={26} />
          </button>

          <div
            onClick={() => navigate("/")}
            className="text-2xl font-extrabold tracking-tight cursor-pointer"
          >
            SHOP.CO
          </div>
        </div>

       
        <nav data-aos="fade-left" className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/category" className={linkClass}>Category</NavLink>
          <NavLink to="/product" className={linkClass}>Product</NavLink>
          <NavLink to="/cart" className={linkClass}>Cart</NavLink>
        </nav>

     
        <div data-aos="fade-right" className="hidden md:flex items-center bg-gray-200 rounded-full px-4 py-2 w-[350px]">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

      
        <div data-aos="fade-left" className="flex items-center gap-5">
          <ShoppingCart
            onClick={() => navigate("/cart")}
            className="cursor-pointer hover:text-black transition"
          />
          <User className="cursor-pointer hover:text-black transition" />
        </div>
      </div>

     
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 py-8 text-lg">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/category" onClick={() => setIsOpen(false)}>Category</NavLink>
          <NavLink to="/product" onClick={() => setIsOpen(false)}>Product</NavLink>
          <NavLink to="/cart" onClick={() => setIsOpen(false)}>Cart</NavLink>
        </nav>

        <div className="px-6">
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
            <Search size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
