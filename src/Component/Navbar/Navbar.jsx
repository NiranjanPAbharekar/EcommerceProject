import React, { useEffect, useState } from 'react'
import Logo from '../../assets/Images/logo.png'
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = ({handelScroll , setSearchTearm,isScrolled,handelActivePanel,cartCount, wishlistCount}) => {
   
  
    // const changeNAvbar=()=>{
    //     setIsScrolled(window.scrollY >= 10);
    // }
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? ' shadow-lg' : ''}`}>
      <nav className="max-w-[1300px] w-full px-4 sm:px-6 md:px-12 py-3 flex items-center justify-between mx-auto">
        
        {/* Logo */}
        <a href="#" className="h-10 w-10 flex items-center justify-center">
          <img src={Logo} alt="logo" className="w-full h-full object-contain" />
        </a>

        {/* Search (desktop only) */}
        <div className="hidden md:flex items-center gap-x-5 flex-1 justify-center">
          <div className="p-1 rounded-md flex items-center border border-blue-600 w-full max-w-[350px]">
           <input
  type="text"
  name="search"
  placeholder="Search..."
  autoComplete="off"
  className="pl-2 focus:outline-none flex-1 text-sm sm:text-base"
  onFocus={() => handelScroll('Product-Section')}
  onChange={(e) => setSearchTearm(e.target.value)}
/>
            
            <button className="w-7 h-7 rounded-full bg-blue-600 text-white text-lg flex items-center justify-center">
              <IoSearch />
            </button>
          </div>
        </div>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-x-4">
          <button className="relative text-[1.7rem] text-zinc-800 cursor-pointer" onClick={()=>handelActivePanel('wishlist')}>
            <GoHeartFill className="text-red"  />
             {wishlistCount > 0 && (
    <span className="flex justify-center items-center absolute -top-2 -right-2 border-2 border-white text-[0.65rem] w-5 h-5 bg-red-600 text-white rounded-full">
      {wishlistCount}
    </span>
  )}
          </button>

          <button className="relative text-[1.7rem] text-zinc-800 cursor-pointer" onClick={()=>handelActivePanel('cart')}>
            <HiShoppingBag />
            {cartCount > 0 && (
    <span className="flex justify-center items-center absolute -top-2 -right-2 border-2 border-white text-[0.65rem] w-5 h-5 bg-red-600 text-white rounded-full">
      {cartCount}
    </span>
  )}
          </button>

          {/* Hamburger menu (mobile only) */}
          <button 
            className="md:hidden text-2xl text-zinc-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white shadow-md px-4 py-3">
          {/* Mobile Search */}
          <div className="p-1 rounded-md flex items-center border border-blue-600 w-full mb-3">
            <input
  type="text"
  name="search"
  placeholder="Search..."
  autoComplete="off"
  className="pl-2 focus:outline-none flex-1 text-sm"
  onFocus={() => handelScroll('Product-Section')}
  onChange={(e) => setSearchTearm(e.target.value)}
/>

            <button className="w-7 h-7 rounded-full bg-blue-600 text-white text-lg flex items-center justify-center">
              <IoSearch />
            </button>
          </div>

          {/* Navigation Links */}
          {/* <ul className="flex flex-col gap-3 text-zinc-700 font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul> */}
        </div>
      </div>
    </header>
  )
}

export default Navbar
