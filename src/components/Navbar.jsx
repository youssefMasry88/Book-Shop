import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/NavLinks";

export default function Navbar() {
  return (
    <header className="w-full px-[5em] py-6 bg-white/20 flex justify-between items-center fixed text-white font-bold ">
      <div className="flex items-center gap-2">
        <img src="/public/book-bookmark 1.png" alt="" />
          <h1 >Book Shop</h1>
      <span>|</span>
      <nav className="flex gap-6 ">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className=" hover:text-[#D9176C]"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      </div>
      <div className="btn flex items-center gap-2">
        <Link to="/login"><button className="px-4 py-2.5 text-center bg-[#D9176C] rounded-md text-white border border-[#D9176C] hover:bg-white hover:text-[#D9176C] hover:border-[#D9176C]"> Login</button></Link>
        <Link to="/register"><button className="px-4 py-2.5 text-center bg-white rounded-md border border-[#D9176C] text-[#D9176C] hover:bg-[#B71059] hover:text-white hover:border-white"> Sign Up</button></Link>
      
      </div>
    </header>
  );
}
