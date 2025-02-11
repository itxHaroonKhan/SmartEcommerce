"use client"
import { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { CgArrowBottomLeft } from "react-icons/cg";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoMenu, IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <section className="flex items-center justify-between w-full bg-[#272343] px-4 py-2">
        <div className="flex items-center">
          <CgArrowBottomLeft className="text-slate-500 text-xl" />
          <p className="text-gray-500 ml-2">
            Free shipping on all orders over $50
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <label htmlFor="language-selector" className="sr-only">
            Select Language
          </label>
          <select
            id="language-selector"
            className="bg-[#272343] text-white border border-slate-600 hover:border-slate-400 py-1 px-2 rounded transition duration-300 ease-in-out"
            aria-label="Language Selector"
          >
            <option value="english">English</option>
            <option value="urdu">Urdu</option>
            <option value="arabic">Arabic</option>
            <option value="french">French</option>
            <option value="persian">Persian</option>
            <option value="spanish">Spanish</option>
          </select>

          <div className="flex items-center space-x-2">
            <p className="text-white">Faqs</p>
            <BiErrorCircle className="text-white text-2xl" />
            <p className="text-white">Need Help</p>
          </div>
        </div>
      </section>

      {/* Middle Bar with Logo & Cart */}
      <section className="flex items-center justify-between w-full px-4 py-3 h-[84px] bg-[#F0F2F3]">
        <div className="flex items-center">
          <Image src="/Logo Icon.png" alt="Logo" width={40} height={40} />
          <h2 className="text-[20px] sm:text-[26px] font-medium ml-2">Comforty</h2>
        </div>

        {/* Cart Button */}
        <div className="hidden md:flex items-center">
          <button className="px-4 sm:px-6 py-3 flex items-center bg-white gap-3 hover:bg-gray-200 rounded-lg">
            <PiShoppingCartSimpleBold className="text-2xl sm:text-xl text-gray-700" />
            <Link href="/cart" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              Cart
              <span className="bg-[#007580] text-white rounded-full w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center text-sm font-semibold">
                2
              </span>
            </Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </section>

      {/* Navigation Bar */}
      <header className="text-gray-600 bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:mr-auto md:ml-4 space-x-6 text-base">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <Link href="/shop" className="hover:text-gray-900">Shop</Link>
            <Link href="/products" className="hover:text-gray-900">Products</Link>
            <Link href="/pages" className="hover:text-gray-900">Pages</Link>
            <Link href="/about" className="hover:text-gray-900">About</Link>
          </nav>

          <Link href="/contact"  className="hidden md:flex items-center text-base">
            Contact: <span className="ml-2 text-black">(808) 555-0111</span>
            </Link>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full left-0 top-[150px] z-10">
          <nav className="flex flex-col items-center space-y-4 py-6">
            <Link href="/" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/shop" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link href="/products" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="/pages" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Pages</Link>
            <Link href="/about" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Contact: (808) 555-0111</Link>
           
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
