import React from "react";
import Header from "../components/Header";

const Pricing = () => {
  return (
    <>
      <Header />
      <div className="p-4 h-[600px] flex justify-evenly items-center ">
        <div className=" bg-white rounded-xl h-[300px]  w-[350px] shadow-xl flex flex-col hover:scale-105 cursor-pointer">
          <img
            className="rounded-xl h-[230px] w-fit place-self-center"
            src="https://static.thenounproject.com/png/3329470-200.png"
          />
          <h1 className="place-self-center font-bold text-lg mt-5">
            Tailored Plans, Transparent Pricing
          </h1>
        </div>
        <div className=" bg-white rounded-xl h-[300px] w-[350px] shadow-xl flex flex-col hover:scale-105 cursor-pointer">
          <img
            className="rounded-xl h-[230px] w-fit place-self-center"
            src="https://cdn-icons-png.flaticon.com/512/3343/3343387.png"
          />
          <h1 className="place-self-center font-bold text-lg mt-5 mb-4">
            Premium Features, Unbeatable Prices
          </h1>
        </div>
        <div className=" bg-white rounded-xl h-[300px] w-[350px] shadow-xl flex flex-col hover:scale-105 cursor-pointer">
          <img
            className="rounded-xl h-[230px] w-fit place-self-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yH-qqHixqoRoHNK7N0SDO3nuVhWoiCgWeQ&s"
          />
          <h1 className="place-self-center font-bold text-lg mt-5 mb-4">
            Discover Your Perfect Plan
          </h1>
        </div>
        <div className=" bg-white rounded-xl h-[300px] w-[350px] shadow-xl flex flex-col hover:scale-105 cursor-pointer">
          <img
            className="rounded-xl h-[230px] w-fit place-self-center"
            src="https://static.vecteezy.com/system/resources/previews/017/647/849/non_2x/megaphone-and-speech-bubble-illustrations-no-hidden-fees-banners-for-business-marketing-and-advertising-free-vector.jpg"
          />
          <h1 className="place-self-center font-bold text-lg mt-5 mb-4">
            Simple Plans, No Hidden Fees
          </h1>
        </div>
      </div>
    </>
  );
};

export default Pricing;
