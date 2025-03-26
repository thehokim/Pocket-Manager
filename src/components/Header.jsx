import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-6 px-8 md:px-20 flex justify-between items-center">
      <div className="flex items-center gap-2 text-white text-xl xl:text-4xl font-medium">
        <img src="/logo.svg" alt="Pocket Manager" className="h-8 w-8 xl:h-16 xl:w-14"/>
        Pocket Manager
      </div>
      <nav className="hidden md:flex gap-8 text-gray-200 text-sm xl:text-lg font-light">
        <a href="#home" className="hover:text-white transition">Home</a>
        <a href="#reviews" className="hover:text-white transition">Reviews</a>
        <a href="#statistics" className="hover:text-white transition">Statistic</a>
        <a href="#premium" className="hover:text-white transition">Premium</a>
        <a href="#faq" className="hover:text-white transition">FAQ</a>
        <a href="mailto:support@helperg.com" className="hover:text-white transition">Contact Us</a>
        </nav>
    </header>
  );
};

export default Header;
