import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <>
      <section className="flex flex-row min-h-screen font-roboto">
        <img
          src="/images/authBmw.png"
          alt="register Image"
          className="min-w-[65vw] h-screen hidden lg:block"
        />
        <div className="flex flex-col items-center justify-center w-full bg-center bg-cover bg-authBmw lg:bg-whitebg ">
          <div className="flex flex-col items-center justify-center w-full h-[100%] bg-white bg-opacity-90">
            <h1 className="font-bold text-[#0146E9] text-3xl mb-6 md:mb-10 lg:mb-2 ">
              AUXCARS
            </h1>
            <div className="w-[70%] ">
              <h1 className="mb-3 text-xl font-bold ">Register</h1>
              <div className="flex flex-col gap-3 md:gap-5 lg:gap-3 xl:gap-5">
                <div className="flex flex-col w-full ">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="fullName"
                    placeholder="Full Name"
                    id="fullName"
                    className="lg:bg-[#e2e2e2] bg-white outline-none p-2 rounded-md md:h-12 h-9 xl:h-12 lg:h-10 mt-2 lg:mt-1 xl:mt-2"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="lg:bg-[#e2e2e2] bg-white outline-none p-2 rounded-md md:h-12 h-9 xl:h-12 lg:h-10 mt-2 lg:mt-1 xl:mt-2"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="phoneNumber"
                    placeholder="Phone Number"
                    id="phoneNumber"
                    className="lg:bg-[#e2e2e2] bg-white outline-none p-2 rounded-md md:h-12 h-9 xl:h-12 lg:h-10 mt-2 lg:mt-1 xl:mt-2"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label htmlFor="ghanaCard">Ghana Card</label>
                  <input
                    type="ghanaCard"
                    placeholder="GhanaCard"
                    id="ghanaCard"
                    className="lg:bg-[#e2e2e2] bg-white outline-none p-2 rounded-md md:h-12 h-9 xl:h-12 lg:h-10 mt-2 lg:mt-1 xl:mt-2"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="lg:bg-[#e2e2e2] bg-white outline-none p-2 rounded-md md:h-12 h-9 xl:h-12 lg:h-10 mt-2 lg:mt-1 xl:mt-2"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    id="password"
                    className="lg:bg-[#e2e2e2] bg-white outline-none p-2 rounded-md md:h-12 h-9 xl:h-12 lg:h-10 mt-2 lg:mt-1 xl:mt-2"
                  />
                </div>
                <button
                  type="button"
                  className="w-full p-2 lg:p-1 xl:p-2 mt-2  bg-[#007AFF] rounded-md text-white"
                >
                  Sign Up
                </button>
                <p className="text-sm md:text-center">
                  Already have an account?
                  <span className="text-[#007AFF]"> Sign In</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
