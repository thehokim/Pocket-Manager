import React from "react";

const StatisticsSection = () => {
  const chartData = [
    { name: "Emily Smith", before: 12, after: 80 },
    { name: "Gabriel Costa", before: 5, after: 68 },
    { name: "Fatima Ahmad", before: 22, after: 93 },
  ];

  return (
    <section id="statistics" className="bg-[#f1f1f1] px-6 md:py-6">
      <div
        className="relative rounded-4xl p-6 md:p-12 mx-auto overflow-hidden bg-no-repeat bg-cover bg-black"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle_at_20%_50%, rgba(65,253,168,0.3), transparent), radial-gradient(circle_at_80%_50%, rgba(175,82,222,0.3), transparent)",
          }}
        />

        <div className="relative z-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
            Statistics and achievements
          </h1>

          {/* === Десктопная версия === */}
          <div className="hidden md:flex justify-around items-end h-64 mb-10">
            {chartData.map((item, index) => (
              <div key={index} className="flex flex-col items-center h-full">
                <div className="flex items-end gap-6 h-full">
                  {/* Before */}
                  <div
                    className="relative w-14 flex flex-col justify-end"
                    style={{ height: `${item.before + 20}%` }}
                  >
                    <div className="absolute top-0 w-full text-center text-black font-bold mt-2">
                      {item.before}%
                    </div>
                    <div className="bg-[#41fda8] rounded-t-full rounded-b-xl w-full h-full" />
                  </div>

                  {/* After */}
                  <div
                    className="relative w-14 flex flex-col justify-end"
                    style={{ height: `${item.after + 0}%` }}
                  >
                    <div className="absolute top-0 w-full text-center text-black font-bold mt-2">
                      {item.after}%
                    </div>
                    <div className="bg-[#af52de] rounded-t-full rounded-b-xl w-full h-full" />
                  </div>
                </div>
                <div className="mt-4 text-white text-lg font-semibold text-center">
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          {/* === Мобильная версия === */}
          <div className="md:hidden flex flex-wrap justify-around items-end gap-y-10 h-auto mb-8">
            {chartData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-end gap-2 h-48">
                  {/* Before */}
                  <div
                    className="relative w-10 flex flex-col justify-end"
                    style={{ height: `${item.before + 20}%` }}
                  >
                    <div className="absolute top-0 w-full text-center text-black text-xs font-bold mt-2">
                      {item.before}%
                    </div>
                    <div className="bg-[#41fda8] rounded-t-full rounded-b-xl w-full h-full" />
                  </div>

                  {/* After */}
                  <div
                    className="relative w-10 flex flex-col justify-end"
                    style={{ height: `${item.after + 0}%` }}
                  >
                    <div className="absolute top-0 w-full text-center text-black text-xs font-bold mt-2">
                      {item.after}%
                    </div>
                    <div className="bg-[#af52de] rounded-t-full rounded-b-xl w-full h-full" />
                  </div>
                </div>
                <div className="mt-3 text-white text-sm font-medium text-center w-24 break-words">
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          {/* Легенда */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20 mt-6 text-white text-sm md:text-lg">
            <div className="flex space-x-6 md:space-x-72">
            <div className="flex items-center">
              <div className="md:w-4 md:h-4 w-2 h-2 rounded-full mr-2 bg-[#41fda8]" />
              <span className="block md:hidden text-[10px]">Savings before using</span>
              <span className="hidden md:block">
                Savings before using the application
              </span>
            </div>
            <div className="flex items-center">
              <div className="md:w-4 md:h-4 w-2 h-2 rounded-full mr-2 bg-[#af52de]" />
              <span className="block md:hidden text-[10px]">Savings after using</span>
              <span className="hidden md:block">
                Savings after using the application
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
