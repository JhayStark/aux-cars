import React from "react";
import { BsFillFileArrowUpFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="flex-row justify-between hidden px-10 py-8 md:flex">
        <h1 className="self-center text-5xl text-blue-700 transform -rotate-90 ">
          AuxCars
        </h1>
        <div>
          <h1 className="mb-6 text-2xl ">Helpful Links</h1>
          <ul className="text-[#A29E95] gap-2 flex flex-col">
            <li>How it works</li>
            <li>Shipping Policy</li>
            <li>Faqs</li>
            <li>Contact Support</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-6 text-2xl">Socials</h1>
          <ul className="text-[#A29E95] gap-2 flex flex-col">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Blog</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-6 text-2xl">Accounts</h1>
          <ul className="text-[#A29E95] gap-2 flex flex-col">
            <li>Login</li>
            <li>Sign up as bidder</li>
            <li>Sign up as Auctioneer</li>
          </ul>
        </div>
        <a href="#home" className="self-end">
          <BsFillFileArrowUpFill className="self-end text-5xl text-blue-700 " />
        </a>
      </div>
      {/* mobile navbar */}
      <div className="flex flex-col md:hidden">
        <div className="flex flex-row justify-between px-2 py-8 ">
          <div>
            <h1 className="mb-6 ">Helpful Links</h1>
            <ul className="text-[#A29E95] gap-2 flex flex-col">
              <li>How it works</li>
              <li>Shipping Policy</li>
              <li>Faqs</li>
              <li>Contact Support</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-6 ">Accounts</h1>
            <ul className="text-[#A29E95] gap-2 flex flex-col">
              <li>Login</li>
              <li>Sign up as bidder</li>
              <li>Sign up as Auctioneer</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-6 ">Socials</h1>
            <ul className="text-[#A29E95] gap-2 flex flex-col">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Blog</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <h1 className="self-center mb-2 text-3xl text-blue-700 opacity-80 ">
          AuxCars
        </h1>
      </div>
    </>
  );
};

export default Footer;
