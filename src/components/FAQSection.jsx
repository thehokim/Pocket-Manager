import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"; // пример с иконками из икон-пака Feather

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Вопросы и ответы (пример из скриншотов)
  const questions = [
    {
      question: "How does the app work, and what are its main features?",
      answer:
        "The app helps you track your income and expenses, set budgets. You can enter transactions, categorize them, and view detailed reports and charts to better understand your spending.",
    },
    {
      question: "Can I use the app without an internet connection?",
      answer:
        "Yes, you can add transactions and access your financial data offline.",
    },
    {
      question: "How do I add expenses and income?",
      answer:
        "Simply open the app, go to the “Transactions” section, tap the “+” button, select a category, enter the amount, and save the entry. You can also add notes and attach receipts if needed.",
    },
    {
      question: "How does the money-back guarantee work?",
      answer: "We offer a 100% money-back guarantee within 14 days.",
    },
    {
      question:
        "Will my data be deleted from the app after canceling the subscription?",
      answer:
        "No, all user data remains. You only lose access to premium features.",
    },
    {
      question: "Can I set budgets and track financial analytics?",
      answer:
        "Yes! You can set spending limits for different categories, receive alerts when you approach your budget, and view detailed analytics through charts and reports to track your financial progress.",
    },
    {
      question: "Which devices support the app?",
      answer:
        "The app is available on iOS and Android. Check our website for the latest updates.",
    },
    {
      question: "How can I cancel my subscription or delete my account?",
      answer:
        "Go to Settings > Your Name > Subscriptions on your iPhone, select the app, and tap Cancel Subscription.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className=" bg-[#f1f1f1]">
      {/* Заголовок */}
      <div className="container px-6">
        <h2 className="text-3xl md:text-7xl font-bold md:mb-12 mb-4 text-start">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Сетка FAQ */}
      <div className=" px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4">
            <button
              className="w-full text-left font-bold flex justify-between items-center text-md md:text-lg"
              onClick={() => toggleAccordion(idx)}
            >
              {item.question}
              <span className="text-2xl font-bold">
                {activeIndex === idx ? <FiChevronDown /> : <FiChevronUp />}
              </span>
            </button>
            {activeIndex === idx && (
              <p className="mt-2 pt-2 text-gray-600 text-base border-t border-px border-[#a9a9a9]">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Блок «Still Have Questions?» */}
      <div className="px-6 mt-6 pb-6">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl  p-6">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl font-semibold">Still Have Questions?</p>
            <p className="text-gray-600 mt-4">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <button className="bg-[#41fda8] py-2 px-6 rounded-xl font-semibold text-gray-900">
            <a
              href="mailto:support@helperg.com"
              className="hover:text-white transition"
            >
              Get in Touch
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
