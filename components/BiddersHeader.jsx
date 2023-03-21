import React from "react";
import BiddersNavbar from "./BiddersNavbar";
import { BsSearch } from "react-icons/bs";

const BiddersHeader = () => {
  return (
    <div className="fixed w-full bg-white">
      <BiddersNavbar />
      <div className="flex flex-col items-center w-full py-2 lg:px-20 lg:flex-row">
        <div className="flex flex-row items-center gap-3">
          <BsSearch />
          <input
            type="text"
            placeholder="search "
            className="p-2 outline-none"
          />
        </div>
        <div className="flex flex-row items-center w-full justify-evenly">
          <select name="" id="" className="relative md:w-24 lg:w-32">
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              Make
            </option>
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              1
            </option>
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              1
            </option>
          </select>
          <select name="" id="" className="relative md:w-24 lg:w-32">
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              Make
            </option>
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              1
            </option>
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              1
            </option>
          </select>
          <select name="" id="" className="relative md:w-24 lg:w-32">
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              Make
            </option>
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              1
            </option>
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              1
            </option>
          </select>
          <select name="" id="" className="relative md:w-24 lg:w-32">
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              Make
            </option>
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              1
            </option>
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              1
            </option>
          </select>
          <select name="" id="" className="relative md:w-24 lg:w-32">
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              Make
            </option>
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              1
            </option>
            <option value="" className="absolute left-0 top-96 md:w-24 lg:w-32">
              1
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BiddersHeader;
