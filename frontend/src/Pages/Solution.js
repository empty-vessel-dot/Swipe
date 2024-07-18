import React from "react";
import Header from "../components/Header";

const Solution = () => {
  return (
    <>
      <Header />
      <div className="h-[600px] flex justify-center items-center">
        <div className="bg-white shadow-xl p-6 flex flex-col">
          <img
            className="h-[300px] w-fit place-self-center"
            src="https://img.freepik.com/free-vector/website-faq-section-user-help-desk-customer-support-frequently-asked-questions-problem-solution-quiz-game-confused-man-cartoon-character_335657-1602.jpg?size=626&ext=jpg"
          />
          <h1 className="text-2xl font-bold place-self-center">
            Any query against cibil scores rejection of loan
          </h1>

          <h1 className="place-self-center mt-5 font-semibold text-xl">
            Contact us at{" "}
            <a
              href="mailto:Swipe@ac.co"
              className="text-blue-500 cursor-pointer hover:underline underline-offset-4 font-bold"
            >
              Swipe@ac.co
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Solution;
