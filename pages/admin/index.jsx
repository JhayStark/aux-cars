import Header from "@/components/Header";
import { GiEmptyHourglass, GiTakeMyMoney } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
import { HiClipboardList } from "react-icons/hi";

const Index = () => {
  return (
    <div className="bg-[#24213a] text-[#FCFFE7] min-h-[100vh] min-w-[100vw] px-5 lg:px-20">
      <Header />
      <div className="grid grid-rows-4 gap-1 md:gap-3 md:grid-rows-none md:grid-cols-4">
        <div className="bg-[#4f4d67] p-3 h-32 md:h-40 rounded-md flex flex-col justify-between">
          <h1 className="text-lg font-medium lg:text-2xl ">Bids Pending</h1>
          <div className="flex flex-row items-end justify-between text-3xl">
            <GiEmptyHourglass className="text-[#F0CD4E]" />
            <p>32</p>
          </div>
        </div>
        <div className="bg-[#4f4d67] p-3 h-32 md:h-40 rounded-md flex flex-col justify-between">
          <h1 className="text-lg font-medium lg:text-2xl ">Items Auctioned</h1>
          <div className="flex flex-row items-end justify-between text-3xl">
            <FiCheckCircle className="text-[#01A601]" />
            <p>32</p>
          </div>
        </div>
        <div className="bg-[#4f4d67] p-3 h-32 md:h-40 rounded-md flex flex-col justify-between">
          <h1 className="text-lg font-medium lg:text-2xl ">Earnings</h1>
          <div className="flex flex-row items-end justify-between text-3xl">
            <GiTakeMyMoney className="text-[#F0CD4E]" />
            <p>32</p>
          </div>
        </div>
        <div className="bg-[#4f4d67] p-3 h-32 md:h-40 rounded-md flex flex-col justify-between">
          <h1 className="text-lg font-medium lg:text-2xl ">Listed Items</h1>
          <div className="flex flex-row items-end justify-between text-3xl">
            <HiClipboardList className="text-[#EB455F]" />
            <p>32</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
