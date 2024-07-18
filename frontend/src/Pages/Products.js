import React from "react";
import Header from "../components/Header";

const Products = () => {
  return (
    <>
      <Header />
      <div className="p-4 h-[600px] flex justify-evenly items-center ">
        <div className=" bg-white rounded-xl h-[300px]  w-[300px] shadow-xl flex flex-col hover:scale-105 cursor-pointer">
          <img
            className="rounded-xl h-[230px]"
            src="https://images.deccanchronicle.com/dc-Cover-guh76c5ok88sgj80gglmkob1k4-20181015015330.Medi.jpeg"
          />
          <h1 className="place-self-center font-bold text-2xl mt-5">
            Personal Loans
          </h1>
        </div>
        <div className=" bg-white rounded-xl h-[300px] w-[300px] shadow-xl flex flex-col hover:scale-105 cursor-pointer">
          <img
            className="rounded-xl h-[230px]"
            src="https://media.istockphoto.com/id/1285857830/vector/mortgage-and-home-buying-concept-tiny-female-character-with-huge-calculator-and-percent.jpg?s=612x612&w=0&k=20&c=FBgI1S5xtHI4DCQ7joVdG38MsW8-VVKTCNEDuJOXA54="
          />
          <h1 className="place-self-center font-bold text-2xl mt-5 mb-4">
            Home Loans
          </h1>
        </div>
        <div className=" bg-white rounded-xl h-[300px] w-[300px] shadow-xl flex flex-col hover:scale-105 cursor-pointer">
          <img
            className="rounded-xl h-[230px]"
            src="https://cdni.iconscout.com/illustration/premium/thumb/car-loan-5776746-4833669.png?f=webp"
          />
          <h1 className="place-self-center font-bold text-2xl mt-5 mb-4">
            Car Loans
          </h1>
        </div>
        <div className=" bg-white rounded-xl h-[300px] w-[300px] shadow-xl flex flex-col hover:scale-105 cursor-pointer">
          <img
            className="rounded-xl h-[230px]"
            src="https://media.istockphoto.com/id/1150780289/vector/investment-in-education-scholarship-books-graduation-hat-and-stack-of-coins-education-in.jpg?s=612x612&w=0&k=20&c=sKga1ISk7xh35B0dHkC-LTJ50zYVETM6IAvjVud5Rp8="
          />
          <h1 className="place-self-center font-bold text-2xl mt-5 mb-4">
            Education Loans
          </h1>
        </div>
      </div>
    </>
  );
};

export default Products;
