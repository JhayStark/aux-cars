import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="text-gray-700 font-roboto ">
      <nav
        className={`${
          dropDown ? `hidden lg:flex` : `flex`
        } flex-row fixed w-full bg-white items-center justify-between px-2 py-3 shadow-md lg:justify-around font-roboto`}
      >
        <h1 className="font-bold text-[#0146E9] text-xl ">AUXCARS</h1>
        <AiOutlineMenu
          className="lg:hidden"
          onClick={() => setDropDown(true)}
        />
        <ul className="flex-row items-center hidden gap-5 text-lg text-center text-gray-600 lg:flex ">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#auctioneer">
            <li>Auction your car</li>
          </a>
          <li>Auctions</li>
          <a href="#howItWorks">
            <li>How it works</li>
          </a>
        </ul>
        <div className="hidden gap-2 lg:flex">
          <Link href="/auth/login">
            <button
              type="button"
              className="p-1 text-[#0146E9] border-2 border-[#0146e9] w-24 font-medium rounded "
            >
              Sign In
            </button>
          </Link>
          <Link href="/auth/register">
            <button
              type="button"
              className="p-1 font-medium text-white bg-[#0146e9] w-24 rounded "
            >
              Join Us
            </button>
          </Link>
        </div>
      </nav>
      <nav
        className={`${
          dropDown ? `flex lg:hidden   ` : `hidden`
        } h-screen flex-col md:p-5 p-2  fixed overflow-y-hidden z-50 bg-white w-full`}
      >
        <MdArrowBackIosNew
          className="self-start text-2xl "
          onClick={() => setDropDown(false)}
        />
        <div className="flex flex-col items-center justify-center px-20 py-20 gap-28">
          <h1 className="font-bold text-[#0146E9] text-2xl ">AUXCARS</h1>
          <ul className="flex flex-col gap-5 text-2xl text-[#8A8A8A] ">
            <li>
              <span className="underline underline-offset-8 ">Ho</span>me
            </li>
            <li>
              <span className="underline underline-offset-8 ">Auc</span>tion
              your car
            </li>
            <li>
              <span className="underline underline-offset-8 ">Auc</span>tions
            </li>
            <li>
              <span className="underline underline-offset-8 ">How</span> it
              works
            </li>
          </ul>
          <div className="flex flex-col w-[70%] md:w-[30%] gap-2">
            <Link href="/auth/login">
              <button
                type="button"
                className="p-2 text-[#0146E9] border-2 border-[#0146e9] font-medium rounded "
              >
                Sign In
              </button>
            </Link>
            <Link href="/auth/register">
              <button
                type="button"
                className="p-2 font-medium text-white bg-[#0146e9]  w-full rounded "
              >
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
