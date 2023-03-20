import Image from "next/image";
import Link from "next/link";

import { FaUserAlt, FaKey } from "react-icons/fa";

const Login = () => {
  return (
    <div className="bg-[#24213a] flex justify-center items-center h-[100vh] w-[100vw]">
      <div className="flex flex-row items-center justify-around w-full ">
        <div className=" bg-[#3a3756] flex rounded-xl p-16  md:p-20 gap-10 text-white  flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold ">AuctionAce</h1>
          <div className="flex flex-row items-end gap-1 ">
            <FaUserAlt className="text-lg text-blue-500 " />
            <input
              type="text"
              name=""
              id=""
              placeholder="email"
              className="p-1 px-2 bg-transparent border-b-2 border-white outline-none"
            />
          </div>
          <div className="flex flex-row items-end gap-1 ">
            <FaKey className="text-lg text-blue-500" />
            <input
              type="text"
              name=""
              id=""
              placeholder="password"
              className="p-1 px-2 bg-transparent border-b-2 border-white outline-none"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Link
              href="/auth/register"
              className="text-sm font-medium text-gray-300"
            >
              Don't have an account?...Sign Up
            </Link>
            <button className="bg-[#7666ff] font-medium py-1 px-3 rounded hover:opacity-80">
              Login
            </button>
            <p className="text-sm font-medium text-gray-300">
              Forgot your password?...
            </p>
          </div>
        </div>
        <div className="flex-col items-center justify-center hidden lg:flex">
          <div className="flex flex-col items-center justify-center text-white">
            <h1 className="text-2xl">Intelligent platform for</h1>
            <h1 className="text-xl font-bold">
              running efficient and secure auctions
            </h1>
            <h1 className="text-lg font-semibold">
              With this platform you can auction, bid and access competitive
              pricing.
            </h1>
          </div>
          <Image src="/auctioneer_bidders.png" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Login;
