import React  from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicyClick = () => {
    navigate("/privacy-policy");
  };

  const handleServiceClick = () => {
    navigate("/service");
  };

  return (
    <div className="p-6 bg-[#f1f1f1]">
      <div
        className="text-white py-12 bg-center bg-cover bg-no-repeat bg-black rounded-4xl"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        {/* Основной контейнер */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Левая колонка */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
              Pocket Manager
            </h3>
            <p className="mb-2">Download the app:</p>
            <div className="flex gap-4">
              <a href="#">
                <img src="/apple.svg" alt="App Store" className="h-8" />
              </a>
              <a href="#">
                <img src="/google.svg" alt="Google Play" className="h-8" />
              </a>
            </div>
          </div>

          {/* Средняя колонка */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-300 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-gray-300 transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#statistics"
                  className="hover:text-gray-300 transition-colors"
                >
                  Statistic
                </a>
              </li>
              <li>
                <a
                  href="#premium"
                  className="hover:text-gray-300 transition-colors"
                >
                  Premium
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-gray-300 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@helperg.com"
                  className="hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Правая колонка */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Terms & Policies</h4>
            <ul className="space-y-2">
               <li>
                <button
                  onClick={handlePrivacyPolicyClick}
                  className="hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={handleServiceClick}
                  className="hover:text-gray-300 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
