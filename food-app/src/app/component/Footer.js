import React from "react";
import Link from 'next/link';

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container bg-accent mt-20 pt-[35px]">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8]">
            diseño. El punto de usar Lorem Ipsum es que tiene una distribución
            máso menos normal de las letras, al contrario de usar diseño. El
            punto de usar Lorem Ipsum es que tiene una distribución más o menos
            normal de las letras, al contrario de usar
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">The Resturant</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="flex gap-8 text-2xl pt-16">
            <Link href="https://www.facebook.com/profile.php?id=100013128493253">
             <FaFacebookF   
               className=" hover:text-white"
               />
               </Link>
          <BsTwitter className=" hover:text-white" />
          <BsPinterest className=" hover:text-white" />
          <FaLinkedinIn className=" hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
