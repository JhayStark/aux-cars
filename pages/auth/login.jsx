import React, { useState } from "react";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <>
      <section className="flex flex-row min-h-screen font-roboto">
        <img
          src="/images/authBmw.png"
          alt="register Image"
          className="min-w-[65vw] h-screen hidden lg:block"
        />
        <div className="flex flex-col items-center justify-center w-full bg-center bg-cover bg-authBmw lg:bg-whitebg ">
          <div className="flex flex-col items-center justify-center w-full h-[100%] bg-white bg-opacity-70">
            <h1 className="font-bold text-[#0146E9] text-3xl mb-10 ">
              AUXCARS
            </h1>
            <div className="w-[70%] space-y-6">
              <h1 className="text-2xl font-bold ">Login</h1>
              <div className="flex flex-col w-full ">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="lg:bg-[#e2e2e2] bg-white   outline-none p-2 rounded-md h-12 mt-2"
                />
              </div>
              <div className="flex flex-col w-full ">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="lg:bg-[#e2e2e2] bg-white  outline-none p-2 rounded-md h-12 mt-2"
                />
              </div>
              <div className="flex flex-row justify-between w-full text-sm ">
                <div>
                  <label
                    htmlFor="toggle"
                    // codiga-disable
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        id="toggle"
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={handleToggleChange}
                      />
                      <div className="block w-8 h-5 bg-[#e2e2e2] rounded-full"></div>
                      <div
                        className={` bg-blue-700 absolute w-3 h-3 transition lg:bg-white rounded-full dot left-1 top-1 ${
                          isChecked ? `translate-x-[100%]` : `translate-x-0`
                        }`}
                      ></div>
                    </div>
                    <div className="ml-3 font-medium ">Remember Me</div>
                  </label>
                </div>
                <p className="text-[#007AFF]">Forgot Password?</p>
              </div>
              <button
                type="button"
                className="w-full p-2 bg-[#007AFF] rounded-md text-white"
              >
                Sign In
              </button>
              <p className="text-sm md:text-center">
                Don't have an account?{" "}
                <span className="text-[#007AFF]">Sign up now</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
