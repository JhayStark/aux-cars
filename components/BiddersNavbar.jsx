import React, { useEffect, useRef, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";

const BiddersNavbar = () => {
  const dropdownRef = useRef();
  const profileDiv = useRef();
  const [dropDown, setDropDown] = useState(false);
  const handleDropdown = () => {
    setDropDown((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <div>
      <nav className="flex flex-row items-center justify-between w-full px-5 py-2 shadow-md font-roboto">
        <h1 className="font-bold text-[#0146E9] text-xl ">AUXCARS</h1>
        <div
          className="flex flex-row items-center gap-2 cursor-pointer "
          onClick={handleDropdown}
          ref={dropdownRef}
        >
          <p>Mr Modey</p> <BsPersonFill />
        </div>
        <div
          className={`absolute p-5 bg-white rounded-md top-10 right-1  ${
            dropDown ? `block` : `hidden`
          }`}
        >
          <nav className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <FiSettings />
              <p>Account Details</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FiSettings />
              <p> History</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <BiWallet />
              <p> Buy Voucher</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <AiOutlineLogout />
              <p> Sign out</p>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default BiddersNavbar;
