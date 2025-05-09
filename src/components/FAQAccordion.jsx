import { useState } from "react";

/**
 * @typedef {Object} FAQItem
 * @property {string} question - The question text
 * @property {string} answer - The answer text
 */

/**
 * @param {Object} props
 * @param {FAQItem[]} props.items - Array of FAQ items
 */
const FAQAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary-300"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 text-left bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-200"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                {item.question}
              </h3>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-6 h-6 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 py-4 bg-primary-50">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
