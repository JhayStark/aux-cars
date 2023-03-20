import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-14 font-roboto">
        <section
          role="region"
          id="home"
          className="grid xl:h-screen lg:grid-cols-2"
        >
          <div className="flex justify-center py-10 lg:flex-col lg:py-0">
            <div className="flex flex-col gap-5 px-2 text-center md:px-10 lg:mx-28 lg:px-0 lg:text-left ">
              <h1 className="text-2xl font-bold md:text-4xl">
                Auction Your Car Now
              </h1>
              <p className="text-justify md:text-xl">
                Have a car you want to sell. Auxcars helps get the best price
                for you by auctioning it on our platform
              </p>
              <button
                type="button"
                className="self-center px-5 py-2 text-white rounded w-80 bg-primaryBlue lg:self-auto "
              >
                Create Auctioneer Account
              </button>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/carHero.png"
                alt="HeroImage"
                width={500}
                height={273}
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full bg-center bg-cover md:py-10 lg:py-12 bg-leftHero ">
            <div className="flex flex-col gap-5 py-10 bg-white rounded-md md:px-10 lg:px-8 lg:py-7 bg-opacity-70 md:mx-10">
              <h1 className="text-xl font-bold text-center md:text-2xl lg:text-justify text-primaryBlue">
                Create a bidders account now
              </h1>
              <p className="text-center md:text-xl lg:text-justify">
                Create an account and have access to auctions available
              </p>
              <div className="flex flex-col gap-3 px-10 md:px-0 ">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  className="w-full h-12 px-2 py-2 bg-white rounded-lg "
                />
                <div className="grid grid-rows-2 gap-3 md:grid-cols-2 md:grid-rows-none">
                  <input
                    type="text"
                    placeholder="Ghana Card"
                    className="w-full h-12 px-2 py-2 bg-white rounded-lg "
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full h-12 px-2 py-2 bg-white rounded-lg "
                  />
                </div>
                <input
                  type="text"
                  placeholder="Select Auction"
                  className="w-full h-12 px-2 py-2 bg-white rounded-lg "
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full h-12 px-2 py-2 bg-white rounded-lg "
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full h-12 px-2 py-2 bg-white rounded-lg "
                />
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="w-full h-12 px-2 py-2 bg-white rounded-lg "
                />
              </div>
              <button
                type="submit"
                className=" w-[80%] self-center mt-5 py-2 rounded-md text-primaryBlue bg-white  border-primaryBlue border-2 "
              >
                Create Bidder Account
              </button>
            </div>
          </div>
        </section>
        <section role="region">
          <div className="p-2">
            <Image
              src="/images/carLogoLg.png"
              width={1298}
              height={96}
              className="hidden lg:block"
            />
            <Image
              src="/images/carLogoSm.png"
              width={1298}
              height={96}
              className="block lg:hidden"
            />
          </div>
        </section>
        <section className="px-2 py-10 md:px-10 lg:py-10 lg:h-screen ">
          <h1 className="text-2xl font-bold text-center lg:text-left">
            Why you should choose us
          </h1>
          <div className="grid grid-rows-5 lg:grid-rows-3 lg:grid-cols-2">
            <div className="flex items-center py-5 text-center md:py-0 md:text-justify text-neutral-800 space-x-auto">
              <h1 className="text-6xl font-medium text-[#8A8A8A] md:block hidden">
                01
              </h1>
              <div>
                <h1 className="text-xl ">
                  <span className=" text-6xl font-medium md:hidden text-[#8A8A8A]">
                    01
                  </span>
                  Auctioneer:
                </h1>
                <p className="text-xl ">
                  We manage the entire auction to get you the best deals for
                  your vehicle
                </p>
              </div>
            </div>
            <div className="flex items-center text-center md:text-justify lg:items-end text-neutral-800 space-x-auto">
              <h1 className="text-6xl font-medium text-[#8A8A8A] md:block hidden">
                02
              </h1>
              <div>
                <h1 className="text-xl ">
                  <span className=" text-6xl font-medium md:hidden text-[#8A8A8A]">
                    02
                  </span>
                  Bidder:
                </h1>
                <p className="text-xl ">
                  Our auction system ensures that you get the best possible
                  price for your desired car, from used to new cars
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 ">
              <div className="flex items-center justify-center">
                <Image src="/images/whyUs.png" width={300} height={300} />
              </div>
            </div>
            <div className="flex items-center text-center md:text-justify lg:items-start text-neutral-800 space-x-auto">
              <h1 className="text-6xl font-medium text-[#8A8A8A] md:block hidden">
                03
              </h1>
              <div>
                <h1 className="text-xl ">
                  <span className=" text-6xl font-medium md:hidden text-[#8A8A8A]">
                    03
                  </span>
                  Auctioneer:
                </h1>
                <p className="text-xl ">
                  Due to our managing system and auctioning schedules, your
                  vehicles are bound to be sold early and for good price making
                  your life easy
                </p>
              </div>
            </div>
            <div className="flex items-center py-5 text-center md:py-0 md:text-justify text-neutral-800 space-x-auto">
              <h1 className="text-6xl font-medium text-[#8A8A8A] md:block hidden">
                04
              </h1>
              <div>
                <h1 className="text-xl ">
                  <span className=" text-6xl font-medium md:hidden text-[#8A8A8A]">
                    04
                  </span>
                  Client Security:
                </h1>
                <p className="text-xl ">
                  Our security system ensures that auctioneer receive their
                  money successfully while also assuring bidders they will get
                  the vehicle they paid for in its said condition
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          role="region"
          id="auctioneer"
          className="flex flex-col items-center justify-center h-screen bg-center bg-cover md:bg-bmw bg-bmwSm "
        >
          <div className="flex flex-col justify-center p-3 md:p-0 md:block ">
            <div className="flex flex-col text-2xl font-medium text-center text-white md:text-justify md:text-4xl lg:text-5xl">
              <p>I want to become an Auctioneer</p>
              <p>How do I start ?</p>
            </div>
            <button
              type="button"
              className="self-center px-5 py-3 mt-5 text-white rounded w-50 md:py-4 md:w-80 bg-primaryBlue lg:self-auto "
            >
              Create Auctioneer Account
            </button>
          </div>
        </section>
        <section
          role="region"
          id="howItWorks"
          className="flex flex-col items-center justify-center px-5 h-96 md:my-20 lg:my-0 lg:px-0 lg:h-screen"
        >
          <div>
            <div className="flex flex-col items-center justify-between mb-5 lg:flex-row ">
              <h1 className="text-2xl font-bold">How it works</h1>
              <p className="text-center">
                The video below explains how to bid with Auxcars
              </p>
            </div>
            <Image src="/images/howItWorks.png" width={1131} height={478} />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
