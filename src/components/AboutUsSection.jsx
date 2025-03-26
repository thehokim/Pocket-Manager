import React from "react";
import Tree from "../../public/money-tree.svg";
import Analytics from "../../public/analytics.svg";
import Chat from "../../public/chat-ai.svg";
import Utils from "../../public/utilities.svg";
import Saving from "../../public/savings.svg";

const AboutUsSection = () => {
  return (
    <div className="bg-[#f1f1f1] w-full px-4 py-10">
      {/* Заголовок */}
      <div className="mb-10">
        {/* Заголовок на десктопе */}
        {/* Desktop version */}
        <div
          className="hidden md:flex 
                flex-nowrap 
                items-center 
                justify-center 
                whitespace-nowrap 
                text-black 
                md:text-[123px] 
                xl:text-[205px] 
                font-bold 
                gap-8"
        >
          <span>T US</span>
          <img src={Tree} alt="Money tree icon" className="h-52" />
          <span>ABOUT US</span>
          <img src={Tree} alt="Money tree icon" className="h-52" />
          <span>ABO</span>
        </div>

        {/* Заголовок на мобилке */}
        <div className="flex md:hidden justify-center items-center gap-4">
          <img src={Tree} alt="Money tree icon" className="w-10 h-10" />
          <h2 className="text-4xl font-extrabold text-center text-black">
            ABOUT US
          </h2>
          <img src={Tree} alt="Money tree icon" className="w-10 h-10" />
        </div>
      </div>

      {/* Карточки */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {/* Analytics Card */}
        <div className="bg-black rounded-xl p-6 text-white">
          <img src={Analytics} alt="Analytics icon" className="h-14 mb-4" />
          <h2 className="text-4xl font-bold mb-3">Detailed analytics</h2>
          <p className="text-gray-300">
            View clear and intuitive reports that will help you understand where
            your money is going and how to optimize your spending.
          </p>
        </div>

        {/* Chat with AI Card */}
        <div className="bg-white rounded-xl p-6">
          <img src={Chat} alt="Chat AI icon" className="h-14 mb-4" />
          <h2 className="text-4xl font-bold mb-3">Chat with AI</h2>
          <p className="text-gray-700">
            Get instant advice from artificial intelligence on your budget,
            financial strategies, and savings.
          </p>
        </div>

        {/* Utility Bill Card */}
        <div className="bg-white rounded-xl p-6 flex flex-col h-full md:row-span-2">
          {/* Иконка всегда сверху */}
          <img
            src={Utils}
            alt="Utilities icon"
            className="h-14 self-start mb-4"
          />

          {/* Контент прижат вниз только на md+ */}
          <div className="md:mt-auto">
            <h2 className="text-4xl font-bold mb-3">
              Utility bill calculation
            </h2>
            <p className="text-gray-700">
              Easily calculate and track utility costs such as electricity,
              water, gas, etc. with automatic payment reminders.
            </p>
          </div>
        </div>

        {/* Savings Goals Card */}
        <div className="bg-white rounded-xl p-6 flex flex-col h-full md:col-span-2 lg:col-span-2">
          <img src={Saving} alt="Savings icon" className="h-14 mb-4" />
          <h2 className="text-4xl font-bold mb-3">
            Savings goals and financial plans
          </h2>
          <p className="text-gray-700">
            Set financial goals (such as saving for a vacation or a big
            purchase) and get action plans to achieve those goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
