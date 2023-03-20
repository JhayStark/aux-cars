import { AiOutlinePoweroff } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import BreadCrump from "./BreadCrump";
const Header = () => {
  return (
    <div className=" py-2 text-[#FCFFE7] ">
      <div className="flex justify-between ">
        <h1 className="font-medium">AuctionAce</h1>
        <div className="flex flex-row items-center justify-center gap-2 mb-2">
          <h1 className="text-2xl font-medium">Hi Joel!</h1>
          <AiOutlinePoweroff className="text-[#EB455F] text-xl hover:opacity-80 cursor-pointer " />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <BreadCrump />
        <div className="flex flex-row items-center bg-[#4f4d67] p-1 rounded justify-center cursor-pointer">
          <h1>Menu</h1>
          <IoIosArrowDown className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
