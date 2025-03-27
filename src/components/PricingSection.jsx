import React from "react";
import Tree from "../../public/money-tree.svg";
import CheckBox from "../../public/check-box.svg";

const PricingSection = () => {
  return (
    <section id="premium" className="py-4 md:py-8 bg-[#f1f1f1]">
      {/* Заголовок */}
      <div
                className="hidden md:flex 
                      flex-nowrap 
                      items-center 
                      justify-center 
                      whitespace-nowrap 
                      text-black 
                      md:text-[123px] 
                      xl:text-[150px] 
                      font-bold 
                      gap-8"
              >
                <span>AN</span>
                <img src={Tree} alt="Money tree icon" className="h-52" />
                <span>PREMIUM PLAN</span>
                <img src={Tree} alt="Money tree icon" className="h-52" />
                <span>PR</span>
              </div>

      <div className="flex md:hidden justify-center items-center gap-2 mb-4">
        <img src={Tree} alt="Money tree icon" className="w-10 h-10" />
        <h2 className="text-4xl font-extrabold text-center text-black">
          PREMIUM PLAN
        </h2>
        <img src={Tree} alt="Money tree icon" className="w-10 h-10" />
      </div>

      {/* Карточки */}
      <div className="px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 xl:space-x-36 justify-center items-center">
          {/* FREE PLAN */}
          <div className="w-full md:w-[440px] xl:w-[440px] xl:h-[640px] bg-white rounded-2xl p-6">
            <p className="font-semibold text-lg">Pay monthly</p>
            <p className="text-4xl">
              $0/<span className="text-2xl">mo</span>
            </p>
            <div className="px-2 mt-6">
              <div className="space-y-4">
                {[
                  "Create monthly or yearly budgets",
                  "Categorize your expenses",
                  "Access to charts and reports on expenses",
                  "Store records of all your income and expenses without limitations",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <img src={CheckBox} alt="" className="h-6 mr-2 mt-1" />
                    <p className="text-base">{item}</p>
                  </div>
                ))}
              </div>
              {[
                "Artificial Intelligence Without Limits — Assistance 24/7.",
                "Data Export and Import — Easy Data Handling.",
                "Advanced Analytics — Insights for Decision-Making",
              ].map((item, i) => (
                <p key={i} className="text-base mt-4 ml-8 text-[#a9a9a9]">
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-6 xl:mt-[70px] flex justify-center">
              <a href="#home">
                <button className="px-10 py-3  rounded-2xl font-semibold text-black pb-3">
                  {/* Get Started */}
                </button>
              </a>
            </div>
          </div>

          {/* YEARLY PLAN */}
          <div className="w-full md:w-[464px] lg:h-[680px] xl:h-[740px]   bg-[#1a1a1a] text-white rounded-2xl p-6 relative">
            <div className="px-3 py-0.5 rounded-full bg-[#41FDA8] absolute right-5 text-black text-sm">
              Save 50%
            </div>
            <p className="font-semibold text-lg">Pay yearly</p>
            <p className="text-4xl">
              $49.99/<span className="text-2xl">year</span>
            </p>
            <span className="text-md line-through ml-2">$99.99</span>
            <div className="px-2 mt-6">
              <div className="space-y-4">
                {[
                  "Create monthly or yearly budgets",
                  "Categorize your expenses",
                  "Access to charts and reports on expenses",
                  "Store records of all your income and expenses without limitations",
                  "Artificial Intelligence Without Limits — Assistance 24/7.",
                  "Data Export and Import — Easy Data Handling.",
                  "Advanced Analytics — Insights for Decision-Making",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <img src={CheckBox} alt="" className="h-6 mr-2 mt-1" />
                    <p className="text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-28 md:mt-12 lg:mt-10 xl:mt-20 2xl:mt-40 flex justify-center">
            <a href="#home">
                <button className="px-10 py-3 bg-[#41FDA8] rounded-2xl font-semibold text-black pb-3">
                  Get Started
                </button>
              </a>
            </div>
          </div>

          {/* MONTHLY PAID PLAN */}
          <div className="w-full md:w-[440px] xl:h-[640px] bg-white rounded-2xl p-6">
            <p className="font-semibold text-lg">Pay monthly</p>
            <p className="text-4xl">
              $9.99/<span className="text-2xl">mo</span>
            </p>
            <div className="px-2 mt-4">
              <div className="space-y-4">
                {[
                  "Create monthly or yearly budgets",
                  "Categorize your expenses",
                  "Access to charts and reports on expenses",
                  "Store records of all your income and expenses without limitations",
                  "Artificial Intelligence Without Limits — Assistance 24/7.",
                  "Data Export and Import — Easy Data Handling.",
                  "Advanced Analytics — Insights for Decision-Making",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <img src={CheckBox} alt="" className="h-6 mr-2 mt-1" />
                    <p className="text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 xl:mt-6 2xl:mt-20 flex justify-center">
              <a href="#home">
                <button className="px-10 py-3 bg-[#41FDA8] rounded-2xl font-semibold text-black pb-3">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
