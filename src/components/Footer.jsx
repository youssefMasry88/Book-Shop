import React from "react";
import { navLinks } from "../data/NavLinks";
import { Link } from "react-router-dom";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { IoEarthSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="w-full  bg-[#3B2F4A] px-20 py-5 ">
      <footer className="flex justify-between  items-center">
        <div className="flex items-center gap-2">
          <img src="/public/book-bookmark 1.png" alt="" />
          <h1>Book Shop</h1>
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
        <div className="Icons flex items-center gap-4">
          <Link to="https://www.facebook.com/"><FaFacebook size={24} /></Link>
            <Link to="https://www.instagram.com/"><RiInstagramLine size={24} /></Link>
            <Link to="https://www.youtube.com/"><FaYoutube size={24} /></Link>
            <Link to="https://twitter.com/"><FaXTwitter size={24} /></Link>
        </div>
      </footer>
        <hr className="w-full my-5" />
        <div className="flex justify-between items-center ">
            <p >Developed by EraaSoft All Copy Rights Reserved @2024 </p>
            <div className="flex items-center  gap-3 ">
              <Link to="https://www.google.com/"><IoEarthSharp size={30} /></Link>
            <p className="px-3 py-2 border border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-300 ">English ︿</p>
            </div>

        </div>
    </div>
  );
}
