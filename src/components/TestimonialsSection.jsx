import React, { useRef, useState, useEffect } from "react";
import STAR from "../../public/Star 2.svg";
 
const testimonials = [
  {
    avatar: "/user4.png",
    name: "Emily Smith",
    location: "London, Great Britain",
    rating: 5,
    highlight: "This app changed my approach to finances!",
    feedback:
      "I've always struggled with managing expenses, but now with this app, it's so much easier to plan my budget. I highly recommend it to anyone who wants to be more organized with their finances!",
  },
  {
    avatar: "/user5.png",
    name: "Gabriel Costa",
    location: "Barcelona, España",
    rating: 5,
    highlight: "Simple to use and very helpful!",
    feedback:
      "I didn't expect a mobile app to be this effective. It gives me a clear picture of my expenses and helps me understand where I can save. A great tool for everyone!",
  },
  {
    avatar: "/user6.png",
    name: "Fatima Ahmad",
    location: "Istanbul, Turkey",
    rating: 5,
    highlight: "I can finally control my spending!",
    feedback:
      "Thanks to this app, I was able to set a real budget and see where I can cut back. It made my financial planning simple and clear.",
  },
];

const TestimonialsSection = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); // по умолчанию вторая карточка (Gabriel)

  // Прокрутка по клику на индикатор
  const scrollToIndex = (index) => {
    const container = sliderRef.current;
    const child = container.children[index];
    if (child) {
      container.scrollTo({
        left: child.offsetLeft - 16, // с учётом gap
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    scrollToIndex(1);
  }, []);
  
  // Отслеживание активной карточки при скролле
  useEffect(() => {
    const container = sliderRef.current;

    const handleScroll = () => {
      if (!container) return;
      const scrollLeft = container.scrollLeft;
      const childWidth = container.children[0].offsetWidth + 16; // ширина + gap (gap-4 = 1rem = 16px)
      const index = Math.round(scrollLeft / childWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="reviews" className="py-4 bg-[#f1f1f1]">
      <div className="mx-auto px-6 ">
        {/* Заголовок */}
        <h2 className="text-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12">
          What do our users say?
        </h2>

        {/* === Десктопная версия === */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => {
            const isMiddleCard = idx === 1;
            return (
              <div
                key={idx}
                className={`p-6 rounded-xl flex flex-col items-center overflow-hidden ${
                  isMiddleCard ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
                }`}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">{item.name}</h3>
                <p
                  className={`text-sm mt-1 ${
                    isMiddleCard ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.location}
                </p>
                <div className="flex mt-1 mb-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="text-green-500 text-lg mr-1">
                      <img src={STAR} alt="" />
                    </span>
                  ))}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center break-words">
                  {item.highlight}
                </h4>
                <p className="text-center text-sm break-words">
                  {item.feedback}
                </p>
              </div>
            );
          })}
        </div>

        {/* === Мобильная версия === */}
        <div className="md:hidden overflow-x-auto no-scrollbar -mx-6">
          <div
            ref={sliderRef}
            className="flex gap-4 px-0 scroll-smooth snap-x snap-mandatory overflow-x-auto"
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className={`inline-block w-[85%] shrink-0 snap-center p-6 rounded-xl ${
                  idx === 1 ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full mb-4 object-cover mx-auto"
                />
                <h3 className="text-sm font-semibold text-center">{item.name}</h3>
                <p
                  className={`text-xs text-center mt-1 ${
                    idx === 1 ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.location}
                </p>
                <div className="flex justify-center mt-1 mb-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="text-green-500 text-sm mr-0.5">
                      <img src={STAR} alt="" />
                    </span>
                  ))}
                </div>
                <h4 className="text-xs font-semibold text-center mb-1 break-words">
                  {item.highlight}
                </h4>
                <p className="text-[11px] text-center break-words">
                  {item.feedback}
                </p>
              </div>
            ))}
          </div>

          {/* Кликабельные индикаторы */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-[#41FDA8]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
