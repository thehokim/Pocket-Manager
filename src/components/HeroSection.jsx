import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-black bg-cover bg-center"
      style={{ backgroundImage: `url('/background.png')` }}
    >
      <div className="px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* ЛЕВАЯ ЧАСТЬ: Заголовок, текст, кнопки, пользователи */}
        <div className="md:w-1/2 mt-10 md:mt-80 text-white space-y-6 text-start md:text-left z-10">
          <h1 className="text-5xl font-light sm:text-5xl md:text-6xl lg:text-7xl lg:font-semibold leading-snug">
            Take{" "}
            <span className="bg-gradient-to-r from-[#9DCCDA] to-[#41FDA8] bg-clip-text text-transparent">
              Control
            </span>{" "}
            of <br className="hidden md:block" />
            Your{" "}
            <span className="bg-gradient-to-r from-[#9DCCDA] to-[#41FDA8] bg-clip-text text-transparent">
              Money
            </span>
          </h1>

          <p className="text-gray-300 leading-relaxed hidden md:block">
            Take control of your finances with Pocket Manager, the only app that
            combines expense tracking, budgeting, and insights in one place.
            Track spending, set budgets, and gain smart financial insights to
            save more and spend smarter. Download Pocket Manager now!
          </p>

          {/* Кнопки магазинов + информация о пользователях */}
          <div className="flex relative flex-wrap items-center justify-center 2xl:justify-start  gap-4">
            {/* Кнопка Google Play */}
            <div className="flex sm:flex-row items-center justify-center md:justify-start gap-4 relative z-10">
              {/* Google Play */}
              <a
                href="#"
                className="bg-white md:px-5 md:py-2 px-2 py-1 rounded-lg flex items-center hover:opacity-90 transition"
              >
                <img
                  src="/google-play.svg"
                  alt="Google Play"
                  className="h-6 mr-3"
                />
                <div className="text-left">
                  <p className="text-black md:text-xs text-[10px]">GET IT NOW</p>
                  <p className="text-black text-lg font-semibold">
                    Google Play
                  </p>
                </div>
              </a>

              {/* Apple Store */}
              <a
                href="#"
                className="bg-white md:px-5 md:py-2 px-2 py-1 rounded-lg flex items-center hover:opacity-90 transition"
              >
                <img
                  src="/app-store.svg"
                  alt="Apple Store"
                  className="h-6 mr-3"
                />
                <div className="text-left">
                  <p className="text-black md:text-xs text-[10px]">DOWNLOAD ON THE</p>
                  <p className="text-black text-lg font-semibold">
                    Apple Store
                  </p>
                </div>
              </a>
            </div>

            {/* Блок с аватарами и числом пользователей: скрыт на мобильных */}
            <div className="flex flex-col items-center mt-6 md:hidden">
              <div className="flex -space-x-2">
                <img src="/user1.png" className="w-10 h-10 rounded-full" />
                <img src="/user2.png" className="w-10 h-10 rounded-full" />
                <img src="/user3.png" className="w-10 h-10 rounded-full" />
                <span className="text-white text-2xl font-semibold ml-4 mt-1">
                10 M
              </span>
              </div>
              <div className="flex justify-center items-center space-x-2 mt-2">
              <div className="bg-[#41FDA8] w-2 h-2 rounded-full flex"></div>
              <span className="text-gray-400 text-sm">
                Active Users Worldwide
              </span>
              </div>
            </div>


            
            <div className="hidden md:flex items-center mt-4">
              <div className="flex -space-x-2">
                <img src="/user1.png" className="w-10 h-10 rounded-full" />
                <img src="/user2.png" className="w-10 h-10 rounded-full" />
                <img src="/user3.png" className="w-10 h-10 rounded-full" />
              </div>
              <div className="ml-3">
                <span className="block text-gray-200 text-3xl font-semibold">
                  10 M
                </span>
                <div className="flex justify-center items-center space-x-2">
                <div className="bg-[#41FDA8] w-2 h-2 rounded-full flex"></div>
                <span className="text-gray-400 text-sm">
                  Active Users Worldwide
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Три телефона */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          {/*
            Блок, в котором на десктопах (md+) будут 3 телефона в нужном
            абсолютном позиционировании, а на мобильных — только один по центру
          */}
          <div className="relative w-full h-auto md:w-[1200px] md:h-[500px] md:-mt-32">
            {/*
              На мобильных показываем ТОЛЬКО центральный телефон
            */}
            <img
              src="/phone1.png"
              alt="Phone 1"
              className="block md:hidden relative w-[300px] z-10"
            />
            <img
              src="/phone2.png"
              alt="Phone 2"
              className="block md:hidden absolute top-10 -left-16 w-[250px] rotate-[-35deg] z-20"
            />
            <img
              src="/phone3.png"
              alt="Phone 3"
              className="block absolute top-10 left-28 md:hidden w-[250px] rotate-[-20deg] z-5"
            />

            {/*
              На больших экранах показываем все 3 телефона
              (скрываем их на мобильных через hidden md:block)
            */}
            {/* Левый (слегка повернутый) телефон */}
            {/* <img
              src="/phone1.png"
              alt="Phone 1"
              className="hidden md:block absolute -top-16 -left-52 w-[620px] lg:w-[750px] z-20"
            />
            <img
              src="/phone2.png"
              alt="Phone 2"
              className="hidden md:block absolute top-8 left-0 lg:left-10 w-[518px] lg:w-[650px] z-10"
            />
            <img
              src="/phone3.png"
              alt="Phone 3"
              className="hidden md:block absolute top-28 lg:top-40 right-16 xl:right-42 lg:right-[450px] w-[498px] lg:w-[590px] z-5"
            /> */}
            <div className=" absolute w-[704px] h-[415px]  hidden md:block right-[0px] md:-top-32 lg:top-0 lg:w-[800px] lg:h-[500px] xl:w-[900px] 2xl:-right-52 2xl:w-[1200px] ">  
            <img src="/group.png" alt="phone" className="2xl:h-[800px]"/> 
            {/* xl:w-[1100px] check*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
