// ui/Faq.jsx
import  { useState } from "react";
import faqData, { faqImage } from "../data/faq_data";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default to match screenshot

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Title & Illustration */}
          <div className="flex flex-col justify-center lg:text-left">
            <p className="text-sm font-semibold text-[#00A3E0] uppercase tracking-wider mb-4">
              Frequently Asked Questions
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              What People Want to Know
            </h2>

            <div className="mt-12 lg:mt-20">
              <img
                src={faqImage} // Using public/Faq.png
                alt="FAQ Illustration"
                className="w-full mx-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg  overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full px-6 py-5  flex items-center rounded-lg justify-between text-left transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gray-900 text-white"
                      : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                  }`}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-xl p-1  font-bold pr-4">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <IoChevronUp className="text-2xl flex-shrink-0" />
                  ) : (
                    <IoChevronDown className="text-2xl flex-shrink-0 text-gray-600" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 py-8 bg-white text-gray-600 text-base leading-relaxed border-t border-gray-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}