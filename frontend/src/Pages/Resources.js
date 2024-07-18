import React from "react";
import Header from "../components/Header";
const Resources = () => {
  return (
    <>
      <Header />
      <div className="p-4 h-[600px] flex justify-evenly items-center ">
        <div className=" bg-white rounded-xl h-[300px]  w-[400px] shadow-xl flex flex-col hover:scale-105 cursor-pointer">
          <img
            className="rounded-xl h-[230px]"
            src="https://vakilsearch.com/blog/wp-content/uploads/2022/10/form-16-2.jpg"
          />
          <h1 className="place-self-center font-bold text-2xl mt-5">Form 16</h1>
        </div>
        <div className=" bg-white rounded-xl h-[300px] w-[400px] shadow-xl flex flex-col hover:scale-105 cursor-pointer">
          <img
            className="rounded-xl h-[230px]"
            src="https://assets.upstox.com/content/assets/images/cms/2024424/Understanding%20tax%20deductions.jpg"
          />
          <h1 className="place-self-center font-bold text-2xl mt-5 mb-4">
            Tax Deduction
          </h1>
        </div>
        <div className=" bg-white rounded-xl h-[300px] w-[400px] shadow-xl flex flex-col hover:scale-105 cursor-pointer">
          <img
            className="rounded-xl h-[230px]"
            src="https://www.indiafilings.com/learn/wp-content/uploads/2023/10/TDS.jpg"
          />
          <h1 className="place-self-center font-bold text-2xl mt-5 mb-4">
            TDS (Tax Deducted at Source)
          </h1>
        </div>
      </div>
    </>
  );
};

export default Resources;
